import { ref, list, getDownloadURL, getBlob } from "firebase/storage";
import storage from "./storage";

const minPhotosRef = ref(storage, "/min");

export interface PhotoInfo {
  id: string;
  name: string;
  nameWithoutExtension: string;
  url: string;
  path: string;
  largeImageName: string;
  largeImagePath: string;
}

export const fetchPhotos = async (): Promise<PhotoInfo[]> => {
  const { items } = await list(minPhotosRef);
  return Promise.all(
    items.map(async (item): Promise<PhotoInfo> => {
      const url = await getDownloadURL(item);
      const nameWithoutExtension = item.name.replace(/\..*$/, "");
      return {
        name: item.name,
        nameWithoutExtension,
        id: encodeURIComponent(item.fullPath),
        path: item.fullPath,
        largeImageName: `${nameWithoutExtension}.jpg`,
        largeImagePath: `${nameWithoutExtension}.jpg`,
        url,
      };
    })
  );
};

export const fetchBlob = async (path: string): Promise<Blob> => {
  const photoRef = ref(storage, path);
  return await getBlob(photoRef);
};
