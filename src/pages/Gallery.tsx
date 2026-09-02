import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon, Video } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: '/assets/gallery/1.jpeg' },
  { id: 2, type: 'image', src: '/assets/gallery/2.jpeg' },
  { id: 3, type: 'video', src: '/assets/gallery/video/11.mp4' },
  { id: 4, type: 'image', src: '/assets/gallery/3.jpeg' },
  { id: 5, type: 'image', src: '/assets/gallery/4.jpeg' },
  { id: 6, type: 'image', src: '/assets/gallery/5.jpeg' },
  { id: 7, type: 'video', src: '/assets/gallery/video/22.mp4' },
  { id: 8, type: 'image', src: '/assets/gallery/6.jpeg' },
  { id: 9, type: 'image', src: '/assets/gallery/7.jpeg' },
  { id: 10, type: 'image', src: '/assets/gallery/8.jpeg' },
  { id: 11, type: 'video', src: '/assets/gallery/video/33.mp4' },
  { id: 12, type: 'image', src: '/assets/gallery/9.jpeg' },
  { id: 13, type: 'image', src: '/assets/gallery/10.jpeg' },
  { id: 14, type: 'image', src: '/assets/gallery/11.jpeg' },
];

type FilterType = 'all' | 'image' | 'video';

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredItems = galleryItems.filter(item => filter === 'all' || item.type === filter);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            Our <span className="text-emerald-600">Gallery</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Explore the beautiful moments and breathtaking destinations we've captured. From serene landscapes to exciting adventures, get a glimpse of what awaits you with Logaa Holidays.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-emerald-600 shadow-sm border border-slate-200'
              }`}
            >
              All Media
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === 'image'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-emerald-600 shadow-sm border border-slate-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" /> Photos
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === 'video'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-emerald-600 shadow-sm border border-slate-200'
              }`}
            >
              <Video className="w-4 h-4" /> Videos
            </button>
          </div>
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Gallery ${item.id}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-auto">
                    <video
                      src={item.src}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      muted
                      loop
                      playsInline
                      onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseOut={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.pause();
                        video.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 text-emerald-600 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={`Gallery ${selectedItem.id}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
