interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div
      style={{
        columnCount: 3,
        columnGap: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Image ${i}`}
          style={{
            width: '100%',
            marginBottom: '1rem',
            breakInside: 'avoid',
            borderRadius: '8px',
          }}
        />
      ))}
    </div>
  );
}
