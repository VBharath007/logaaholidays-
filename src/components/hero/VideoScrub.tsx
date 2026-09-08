import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface VideoScrubProps {
  videoSrc: string;
}

export function VideoScrub({ videoSrc }: VideoScrubProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    const initScrub = () => {
      const duration = video.duration;
      if (isNaN(duration) || !duration) return;

      const proxy = { time: video.currentTime };

      const handleMouseMove = (e: MouseEvent) => {
        const width = window.innerWidth;
        let x = e.clientX;
        x = Math.max(0, Math.min(x, width)); 

        // Mouse LEFT = Start (0), Mouse RIGHT = End (1)
        const progress = x / width; 
        const targetTime = progress * duration;

        // Extremely fast tween to remove any "slow" feeling while preventing browser stutter
        gsap.to(proxy, {
          time: targetTime,
          duration: 0.1, // Near instant
          ease: "power1.out",
          overwrite: true,
          onUpdate: () => {
            if (video.readyState >= 2) {
              video.currentTime = proxy.time;
            }
          }
        });

        if (timelineRef.current) {
          gsap.to(timelineRef.current, {
            scaleX: progress,
            duration: 0.1,
            ease: "power1.out",
            overwrite: true,
            transformOrigin: "left center"
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    };

    let cleanupFn: (() => void) | undefined;

    if (video.readyState >= 1) {
      cleanupFn = initScrub();
    } else {
      const onLoadedMetadata = () => {
        cleanupFn = initScrub();
      };
      video.addEventListener('loadedmetadata', onLoadedMetadata);
    }

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-slate-950">
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        muted
        playsInline
        preload="auto"
      />
      {/* Timeline Indicator */}
      <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/20 rounded-full overflow-hidden z-20 pointer-events-none">
        <div ref={timelineRef} className="h-full bg-theme-primary w-full origin-left scale-x-0 will-change-transform" style={{ backgroundColor: 'var(--theme-primary)' }} />
      </div>
    </div>
  );
}
