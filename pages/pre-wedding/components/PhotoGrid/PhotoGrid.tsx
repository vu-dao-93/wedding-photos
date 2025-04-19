import React from "react";
import { Inter } from "@next/font/google";
import Image from "next/image";
import DownloadButton from "../DownloadButton";
import { PhotoInfo } from "@/libs/firebase/photos";

const inter = Inter({ subsets: ["latin"] });

interface PhotoGridProps {
  photos: PhotoInfo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="md:grid md:grid-cols-2 md:justify-items-center lg:grid-cols-3">
      {photos &&
        photos.map(
          ({
            nameWithoutExtension,
            id,
            url,
            largeImagePath,
            largeImageName,
          }) => (
            <div className="p-4" key={id}>
              <Image
                className="w-full object-contain mb-2"
                alt={nameWithoutExtension}
                src={url}
                width={300}
                height={200}
              />
              <div className="flex gap-2 items-center">
                <p className={inter.className}>{nameWithoutExtension}</p>
                <DownloadButton name={largeImageName} path={largeImagePath} />
              </div>
            </div>
          )
        )}
    </div>
  );
}
