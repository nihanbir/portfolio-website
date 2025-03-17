import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

interface ImageGalleryProps {
  images: string[];
  mainImage: string;
  captions?: { [key: string]: string };
  projectTitle?: string;
}

export function ImageGallery({
                               images,
                               mainImage,
                               captions = {},
                               projectTitle = "Project"
                             }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);

  const allImages = [mainImage, ...images.filter(img => img !== mainImage)];

  // Set up portal container for the modal
  useEffect(() => {
    // Find or create a portal container at the document root level
    let portalContainer = document.getElementById('gallery-modal-portal');
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = 'gallery-modal-portal';
      document.body.appendChild(portalContainer);
    }
    setModalPortal(portalContainer);

    // Clean up the portal container when component unmounts
    return () => {
      if (isModalOpen) {
        document.body.style.overflow = 'auto';
      }
    };
  }, []);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
    // Add a small delay before showing the modal content for a smoother animation
    setTimeout(() => setModalVisible(true), 50);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalVisible(false);
    // Wait for the fade-out animation to complete before closing the modal
    setTimeout(() => {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }, 300);
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

  // Get caption for current image
  const getCaption = (image: string) => {
    // Use provided caption or generate a default one
    return captions[image] ||
        (image === mainImage
            ? `${projectTitle} - Main View`
            : `${projectTitle} - View ${allImages.indexOf(image) + 1}`);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      } else if (e.key === 'ArrowRight' && isModalOpen) {
        nextImage();
      } else if (e.key === 'ArrowLeft' && isModalOpen) {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, modalImage]);

  // Function to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/api/placeholder/400/300';
  };

  // Modal component to be rendered in the portal
  const Modal = () => {
    if (!isModalOpen) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 transition-all duration-300",
                modalVisible ? "bg-black/90 opacity-100" : "bg-black/0 opacity-0"
            )}
            onClick={closeModal}
        >
          <div
              className={cn(
                  "absolute inset-0 flex items-center justify-center transition-transform duration-300",
                  modalVisible ? "scale-100" : "scale-95"
              )}
              onClick={e => e.stopPropagation()}
          >
            <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-primary bg-black/30 rounded-full p-2 transition-colors duration-200"
                aria-label="Close modal"
            >
              <X size={28} />
            </button>

            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-3 rounded-full bg-black/30 transition-colors duration-200 hover:bg-black/50"
                aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="relative max-w-[90%] max-h-[90%] flex flex-col items-center">
              <img
                  src={modalImage}
                  alt={getCaption(modalImage)}
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                  onError={handleImageError}
              />
              <div className="mt-4 text-white bg-black/50 px-4 py-2 rounded-md w-full max-w-3xl">
                <p className="text-lg font-medium text-center">
                  {getCaption(modalImage)}
                </p>
                <p className="text-white/70 text-center text-sm mt-1">
                  {allImages.indexOf(modalImage) + 1} / {allImages.length}
                </p>
              </div>
            </div>

            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-3 rounded-full bg-black/30 transition-colors duration-200 hover:bg-black/50"
                aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
    );
  };

  return (
      <div className="space-y-3">
        <div className="relative">
          {/* Main image container with caption */}
          <div
              className="w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer relative group"
              onClick={() => openModal(currentImage)}
          >
            <img
                src={currentImage}
                alt={getCaption(currentImage)}
                className="w-full h-full object-cover object-center transition-transform group-hover:scale-105 duration-300"
                onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn size={36} className="text-white" />
            </div>

            {/* Caption on the main card image */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white transform transition-transform duration-300">
              <p className="text-sm md:text-base font-medium truncate">
                {getCaption(currentImage)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          {allImages.map((image, index) => (
              <div
                  key={index}
                  className={cn(
                      "relative w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden cursor-pointer flex-shrink-0 border-2 transition-transform hover:scale-105 duration-200",
                      currentImage === image ? "border-primary" : "border-transparent"
                  )}
                  onClick={() => setCurrentImage(image)}
              >
                <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                />

                {/* Small indicator for thumbnail captions on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-xs py-1 opacity-0 hover:opacity-100 transition-opacity duration-200 truncate text-center">
                  {index === 0 ? "Main" : `View ${index}`}
                </div>
              </div>
          ))}
        </div>

        {modalPortal && createPortal(<Modal />, modalPortal)}
      </div>
  );
}