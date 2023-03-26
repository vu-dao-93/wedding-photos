import React from "react";
import { Inter } from "@next/font/google";
import styles from "./PhotoGrid.module.css";
import Image from "next/image";
import DownloadButton from "../DownloadButton";
import { PhotoInfo } from "@/libs/api/firebase-photos";

const inter = Inter({ subsets: ["latin"] });

interface PhotoGridProps {
  photos: PhotoInfo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className={styles.grid}>
      {photos &&
        photos.map(({ name, id, url, path }) => (
          <div className={styles.gridItem} key={id}>
            <Image
              className={styles.photo}
              alt={name}
              src={url}
              width={300}
              height={200}
            />
            <div className={styles.content}>
              <p className={inter.className}>{name}</p>
              <DownloadButton name={name} path={path} />
            </div>
          </div>
        ))}
    </div>
  );
}
