import { PhotoInfo } from "@/libs/api/firebase-photos";
import React from "react";
import ImageSlider from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface SliderProps {
  photos: PhotoInfo[];
}

export default function Slider({ photos, ...rest }: SliderProps) {
  if (!photos) {
    return null;
  }
  const items = photos.map(({ url }) => {
    return {
      original: url,
    };
  });
  return <ImageSlider items={items} showThumbnails={false} {...rest} />;
}
