import { useEffect, useState } from "react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [columns, setColumns] = useState("repeat(auto-fill, minmax(250px, 1fr))");

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns("repeat(4, 1fr)"); // Max 4 columns on desktop
      } else {
        setColumns("repeat(auto-fill, minmax(250px, 1fr))");
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div style={{ ...gridContainer, gridTemplateColumns: columns }}>
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

// Grid base styles
const gridContainer: React.CSSProperties = {
  display: "grid",
  gap: "16px",
  padding: "1rem",
};

// Image styling
const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
};
