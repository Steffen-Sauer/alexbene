import styles from './gallery.module.css'

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className={styles.masonry}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`img-${i}`} loading="lazy" />
      ))}
    </div>
  );
}
