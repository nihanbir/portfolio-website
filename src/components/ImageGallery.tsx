import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageGallery } from './ImageGallery';

interface ImageGalleryProps {
  images: string[];
  mainImage: string;
}

export function ImageGallery({ images, mainImage }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const allImages = [mainImage, ...images.filter(img => img !== mainImage)];

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const currentIndex = allImages.indexOf(modalImage);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setModalImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = allImages.indexOf(modalImage);
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setModalImage(allImages[prevIndex]);
  };

  return (
      <div className="space-y-3">
        <div
            className="w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(currentImage)}
        >
          <img
              src={currentImage}
              alt="Project screenshot"
              className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
          />
        </div>

        <div className="flex space-x-2 overflow-x-auto py-2">
          {allImages.map((image, index) => (
              <div
                  key={index}
                  className={cn(
                      "w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden cursor-pointer flex-shrink-0 border-2",
                      currentImage === image ? "border-primary" : "border-transparent"
                  )}
                  onClick={() => setCurrentImage(image)}
              >
                <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                />
              </div>
          ))}
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
              <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-primary"
                  aria-label="Close modal"
              >
                <X size={32} />
              </button>

              <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 rounded-full bg-black/20"
                  aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              <img
                  src={modalImage}
                  alt="Project screenshot fullscreen"
                  className="max-w-[90%] max-h-[90%] object-contain"
              />

              <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 rounded-full bg-black/20"
                  aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
        )}
      </div>
  );
}
