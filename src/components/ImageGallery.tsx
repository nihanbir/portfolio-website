import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize, Minimize } from 'lucide-react';
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

  // Zoom state - Make sure these state changes actually affect the DOM
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [startPanPosition, setStartPanPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

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
    // Reset zoom and pan state when opening modal
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    // Add a small delay before showing the modal content for a smoother animation
    setTimeout(() => setModalVisible(true), 50);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalVisible(false);
    // Wait for the fade-out animation to complete before closing the modal
    setTimeout(() => {
      setIsModalOpen(false);
      setZoomLevel(1); // Reset zoom when closing
      setPanPosition({ x: 0, y: 0 }); // Reset position when closing
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const nextImage = () => {
    const currentIndex = allImages.indexOf(modalImage);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setModalImage(allImages[nextIndex]);
    resetZoom();
  };

  const prevImage = () => {
    const currentIndex = allImages.indexOf(modalImage);
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setModalImage(allImages[prevIndex]);
    resetZoom();
  };

  // Get caption for current image
  const getCaption = (image: string) => {
    // Use provided caption or generate a default one
    return captions[image] ||
        (image === mainImage
            ? `${projectTitle} - Main View`
            : `${projectTitle} - View ${allImages.indexOf(image) + 1}`);
  };

  // Zoom functionality with console logging for debugging
  const zoomIn = () => {
    setZoomLevel(prev => {
      const newZoom = Math.min(prev + 0.5, 4);
      console.log(`Zooming in to: ${newZoom}x`);
      return newZoom;
    });
  };

  const zoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      // Reset pan position if zooming back to 1
      if (newZoom === 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      console.log(`Zooming out to: ${newZoom}x`);
      return newZoom;
    });
  };

  const resetZoom = () => {
    console.log('Resetting zoom');
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  // Pan functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      e.preventDefault(); // Prevent default to avoid unwanted behaviors
      setIsPanning(true);
      setStartPanPosition({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning && zoomLevel > 1) {
      const newX = e.clientX - startPanPosition.x;
      const newY = e.clientY - startPanPosition.y;
      setPanPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsPanning(true);
      setStartPanPosition({
        x: e.touches[0].clientX - panPosition.x,
        y: e.touches[0].clientY - panPosition.y
      });
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isPanning && zoomLevel > 1 && e.touches.length === 1) {
      e.preventDefault();
      const newX = e.touches[0].clientX - startPanPosition.x;
      const newY = e.touches[0].clientY - startPanPosition.y;
      setPanPosition({ x: newX, y: newY });
    }
  };
  const handleTouchEnd = () => {
    setIsPanning(false);
  };
  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        if (zoomLevel > 1) {
          resetZoom();
        } else {
          closeModal();
        }
      } else if (e.key === 'ArrowRight' && isModalOpen && zoomLevel === 1) {
        nextImage();
      } else if (e.key === 'ArrowLeft' && isModalOpen && zoomLevel === 1) {
        prevImage();
      } else if (e.key === '+' && isModalOpen) {
        zoomIn();
      } else if (e.key === '-' && isModalOpen) {
        zoomOut();
      } else if (e.key === '0' && isModalOpen) {
        resetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, modalImage, zoomLevel]);

  // Function to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/api/placeholder/300/200';
  };

  // Click handler that properly prevents propagation
  const handleZoomButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  // Modal component to be rendered in the portal
  const Modal = () => {
    if (!isModalOpen) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 transition-all duration-300 overscroll-none",
                modalVisible ? "bg-black/90 opacity-100" : "bg-black/0 opacity-0"
            )}
            onClick={zoomLevel > 1 ? undefined : closeModal}
        >
          <div
              className={cn(
                  "absolute inset-0 flex items-center justify-center transition-transform duration-300",
                  modalVisible ? "scale-100" : "scale-95"
              )}
              onClick={e => e.stopPropagation()}
          >
            <button
                onClick={e => handleZoomButtonClick(e, closeModal)}
                className="absolute top-20 right-4 text-white hover:text-primary bg-black/30 rounded-full p-2 transition-colors duration-200 z-10"
                aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Zoom controls */}
            <div className="absolute top-20 md:top-20 left-4 flex space-x-2 z-10 ">
              <button
                  onClick={e => handleZoomButtonClick(e, zoomIn)}
                  className="text-white hover:text-primary bg-black/30 rounded-full p-2 transition-colors duration-200"
                  aria-label="Zoom in"
                  disabled={zoomLevel >= 4}
              >
                <ZoomIn size={24} />
              </button>
              <button
                  onClick={e => handleZoomButtonClick(e, zoomOut)}
                  className="text-white hover:text-primary bg-black/30 rounded-full p-2 transition-colors duration-200"
                  aria-label="Zoom out"
                  disabled={zoomLevel <= 1}
              >
                <ZoomOut size={24} />
              </button>
              <button
                  onClick={e => handleZoomButtonClick(e, resetZoom)}
                  className="text-white hover:text-primary bg-black/30 rounded-full p-2 transition-colors duration-200"
                  aria-label="Reset zoom"
              >
                {zoomLevel > 1 ? <Minimize size={24} /> : <Maximize size={24} />}
              </button>
            </div>

            {/* Current zoom level indicator */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-black/30 text-white px-3 py-1 rounded-full z-10">
              {Math.round(zoomLevel * 100)}%
            </div>

            {zoomLevel === 1 && (
                <>
                  <button
                      onClick={e => handleZoomButtonClick(e, prevImage)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-3 rounded-full bg-black/30 transition-colors duration-200 hover:bg-black/50 z-10"
                      aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                      onClick={e => handleZoomButtonClick(e, nextImage)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-3 rounded-full bg-black/30 transition-colors duration-200 hover:bg-black/50 z-10"
                      aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
            )}

            <div
                ref={imageContainerRef}
                className="relative max-w-[90%] max-h-[90%] flex flex-col items-center overflow-hidden"
                style={{
                  cursor: zoomLevel > 1 ? (isPanning ? 'grabbing' : 'grab') : 'auto'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheel}
            >
              <div className="relative overflow-hidden">
                <img
                    src={modalImage}
                    alt={getCaption(modalImage)}
                    className="max-w-full max-h-[75vh] object-contain shadow-2xl will-change-transform touch-none"
                    onError={handleImageError}
                    style={{
                      transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                      transformOrigin: 'center',
                      transition: isPanning ? 'none' : 'transform 0.2s ease-out',
                    }}
                />
              </div>
              <div className="mt-2 md:mt-4 text-white bg-black/50 px-3 py-2 rounded-md w-full max-w-3xl">
                <p className="text-lg font-medium text-center">
                  {getCaption(modalImage)}
                </p>
                <p className="text-white/70 text-center text-xs md:text-sm mt-1">
                  {allImages.indexOf(modalImage) + 1} / {allImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  };

  return (
    <div className="image-gallery-container space-y-3">
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
              style={{ maxWidth: '100%', height: 'auto' }}
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

      <div className="flex flex-wrap space-x-2 overflow-x-hidden py-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
        {allImages.map((image, index) => (
          <div
              key={index}
              className={cn(
                  "relative w-14 h-14 md:w-20 md:h-20 rounded overflow-hidden cursor-pointer flex-shrink-0 border-2 transition-transform hover:scale-105 duration-200",
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