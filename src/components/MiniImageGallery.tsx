import React from 'react';
import { cn } from '@/lib/utils';

interface MiniImageGalleryProps {
    images: string[];
    mainImage: string;
}

export function MiniImageGallery({ images, mainImage }: MiniImageGalleryProps) {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = '/api/placeholder/400/300';
    };

    // Combine the main image and gallery images, ensuring no duplicates
    const allImages = [mainImage, ...images.filter(img => img !== mainImage)];

    return (
        <div className="flex-shrink-0 flex items-center gap-2">
            {/* Main Image */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-md overflow-hidden shadow-sm">
                <img
                    src={mainImage}
                    alt="Main image"
                    className="h-full w-full object-cover"
                    onError={handleImageError}
                />
            </div>

            {/* Gallery Images (up to 2 additional images) */}
            <div className="flex gap-2">
                {allImages.slice(1, 3).map((image, index) => (
                    <div
                        key={index}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-md overflow-hidden shadow-sm"
                    >
                        <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="h-full w-full object-cover"
                            onError={handleImageError}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}