import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head'
import Gallery from '../components/Gallery'

const imageCount = 20 // change this to match your image count
const images = Array.from({ length: imageCount }, (_, i) => `/images/DSC034${47 + i}.jpg`)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
       <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Hochzeit 2025 – Alex & Bene</h1>
        <Gallery images={images} />
      </main>
      
    </div>
  );
}
