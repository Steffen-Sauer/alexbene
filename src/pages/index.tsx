
import Gallery from '../components/Gallery';


const imageCount = 500;
const images = Array.from({ length: imageCount }, (_, i) => `/images/foto-${i + 1}.jpg`);


export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: "18px" }}>Hochzeit 2025 – Alex & Bene</h1>
      <Gallery images={images} />
    </main>
  );
}
