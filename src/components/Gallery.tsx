interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div style={masonryStyles}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          loading="lazy"
          style={imageStyles}
        />
      ))}
    </div>
  );
}

// Masonry container styles
const masonryStyles: React.CSSProperties = {
  columnCount: 3,
  columnGap: '16px',
  padding: '1rem',
};

// Image styles for proper spacing and scaling
const imageStyles: React.CSSProperties = {
  width: '100%',
  marginBottom: '16px',
  borderRadius: '8px',
  display: 'block',
};
