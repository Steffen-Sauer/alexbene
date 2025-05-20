import { useEffect, useRef, useState } from 'react';

interface GalleryProps {
  images: string[];
}

const BATCH_SIZE = 20;

export default function Gallery({ images }: GalleryProps) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          setVisibleCount(prev => Math.min(prev + BATCH_SIZE, images.length));
        }
      },
      { threshold: 1 }
    );

    const loader = loaderRef.current;
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [images.length]);

  return (
    <>
      <div style={masonryStyles}>
        {images.slice(0, visibleCount).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
            style={imageStyles}
          />
        ))}
      </div>
      {visibleCount < images.length && (
        <div ref={loaderRef} style={{ height: '1px' }} />
      )}
    </>
  );
}

// ✅ Add the styles here so they are in scope
const masonryStyles: React.CSSProperties = {
  columnCount: 3,
  columnGap: '16px',
  padding: '1rem',
};

const imageStyles: React.CSSProperties = {
  width: '100%',
  marginBottom: '16px',
  display: 'block',
};
