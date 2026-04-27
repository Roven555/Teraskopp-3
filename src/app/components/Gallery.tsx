import { X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface GalleryProps {
  onClose: () => void;
}

export default function Gallery({ onClose }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/images/IMG_4948.JPG',
    '/images/IMG_4949.JPG',
    '/images/IMG_4950.JPG',
    '/images/IMG_4951.JPG',
    '/images/IMG_4952.JPG',
    '/images/IMG_4953.JPG',
    '/images/IMG_4954.JPG',
    '/images/IMG_4955.JPG',
    '/images/IMG_4956.JPG',
    '/images/IMG_4957.JPG',
    '/images/IMG_4958.JPG',
    '/images/IMG_4959.JPG',
    '/images/DJI_0946-HDR-scaled.jpg',
  ];
  return (
    <div className="min-h-screen bg-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-[#f5f5dc] hover:text-[#FDB71A] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium tracking-wide">TAGASI</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Gallery Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f5dc] mb-12 tracking-tight">
            GALERIID
          </h1>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-[#FDB71A]/20 transition-all cursor-pointer group"
              >
                <img src={image} alt="Galerii" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Large Image Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-[#f5f5dc] hover:text-[#FDB71A] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0f0f0f] border-t border-[#2d5016] mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-[#a89f91] text-sm">
            <p>&copy; 2024 TERASKOPP OÜ. Kõik õigused kaitstud.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
