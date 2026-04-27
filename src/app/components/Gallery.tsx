import { X, ArrowLeft } from 'lucide-react';

interface GalleryProps {
  onClose: () => void;
}

export default function Gallery({ onClose }: GalleryProps) {
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
            {/* Placeholder for gallery images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-[#2d5016] to-[#1a3009] rounded-lg flex items-center justify-center border-2 border-[#3d6a1f] hover:border-[#FDB71A] transition-all cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-[#FDB71A] text-4xl font-bold group-hover:scale-110 transition-transform">
                    {item}
                  </div>
                  <p className="text-[#a89f91] mt-2 text-sm">Pilt {item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder text */}
          <div className="mt-12 p-8 bg-[#2a2a2a] rounded-lg border-2 border-[#3d6a1f]">
            <p className="text-[#a89f91] text-center">
              Galeriisse saab lisada pilte tulevikus. Siin kuvatakse kõik tehtud tööde fotod.
            </p>
          </div>
        </div>
      </div>

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
