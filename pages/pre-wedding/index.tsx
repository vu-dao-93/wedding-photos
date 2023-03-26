import React from "react";
import { Inter } from "@next/font/google";
import styles from "./PreWedding.module.css";
import { fetchPhotos, PhotoInfo } from "@/libs/api/firebase-photos";
import PhotoGrid from "./components/PhotoGrid";
import Slider from "./components/Slider";

const inter = Inter({ subsets: ["latin"] });

interface PreWeddingProps {
  photos: PhotoInfo[];
}

export async function getStaticProps() {
  const photos = await fetchPhotos();
  return {
    props: {
      photos,
    }, // will be passed to the page component as props
  };
}

export default function PreWedding({ photos }: PreWeddingProps) {
  return (
    <div className={styles.contentArea}>
      <h1 className={inter.className}>Pre-wedding</h1>
      <Slider photos={photos} />
      <PhotoGrid photos={photos} />
    </div>
  );
}
