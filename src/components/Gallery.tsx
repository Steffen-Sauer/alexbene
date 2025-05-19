interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div style={gridContainer}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          loading="lazy"
          style={imageStyle}
        />
      ))}
    </div>
  );
}

// CSS Grid container that loads images horizontally (left to right, top to bottom)
const gridContainer: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '16px',
  padding: '1rem',
};

// Image styling
const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};
