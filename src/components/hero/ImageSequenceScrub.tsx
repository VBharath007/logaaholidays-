import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from '../../lib/gsap';

interface ImageSequenceScrubProps {
  folder: string;
  frameCount: number;
  sectionId: string;
}

export function ImageSequenceScrub({ folder, frameCount, sectionId }: ImageSequenceScrubProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<Record<number, HTMLImageElement>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let currentFrameIndex = -1;
    let animationFrameId: number;
    let latestRequestedFrame = 1;

    const draw = (img: HTMLImageElement) => {
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.max(1, currentFrameIndex));
    };

    const renderFrame = (index: number) => {
      const targetIndex = Math.max(1, Math.min(frameCount, Math.round(index)));
      latestRequestedFrame = targetIndex;
      
      if (targetIndex === currentFrameIndex) return;

      if (imageCache.current[targetIndex]) {
        draw(imageCache.current[targetIndex]);
        currentFrameIndex = targetIndex;
      } else {
        const img = new Image();
        // Remove async decoding for critical frames to ensure they appear instantly when scrolled
        img.src = `/assets/${folder}/frame_${targetIndex.toString().padStart(3, '0')}.webp`;
        img.onload = () => {
          imageCache.current[targetIndex] = img;
          if (latestRequestedFrame === targetIndex) {
            draw(img);
            currentFrameIndex = targetIndex;
          }
        };
      }
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Aggressive Preloading Strategy for buttery smooth scroll
    const preloadFrames = async () => {
      // Preload first 10 frames instantly for initial scroll feel
      for (let i = 1; i <= Math.min(10, frameCount); i++) {
        const img = new Image();
        img.src = `/assets/${folder}/frame_${i.toString().padStart(3, '0')}.webp`;
        imageCache.current[i] = img;
      }
      setIsLoaded(true); // Remove loading state once initial buffer is ready
      renderFrame(1); // Force draw first frame

      // Background preload ALL remaining frames so fast scrolling never breaks
      // BUT do it sequentially to prevent network congestion and lag
      const loadNextFrame = (i: number) => {
        if (i > frameCount) return;
        const img = new Image();
        img.src = `/assets/${folder}/frame_${i.toString().padStart(3, '0')}.webp`;
        img.onload = () => {
          imageCache.current[i] = img;
          loadNextFrame(i + 1);
        };
        img.onerror = () => {
          // If a frame fails to load, just skip to the next one
          loadNextFrame(i + 1);
        };
      };
      
      // Start background sequential loading after initial batch
      setTimeout(() => loadNextFrame(11), 500);
    };
    
    preloadFrames();

    const trigger = ScrollTrigger.create({
      trigger: `#${sectionId}`,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        const targetFrame = 1 + self.progress * (frameCount - 1);
        
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          renderFrame(targetFrame);
        });
      }
    });

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      trigger.kill();
    };
  }, [folder, frameCount, sectionId]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black">
      {/* Loading Skeleton/Spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
           <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ filter: 'brightness(0.6)' }}
      />
    </div>
  );
}
