import { ref, list, getDownloadURL, getBlob } from "firebase/storage";
import storage from "../firebase/storage";

const minPhotosRef = ref(storage, "/min");

export interface PhotoInfo {
  id: string;
  name: string;
  url: string;
  path: string;
}

export const fetchPhotos = async (): Promise<PhotoInfo[]> => {
  const { items } = await list(minPhotosRef);
  return Promise.all(
    items.map(async (item): Promise<PhotoInfo> => {
      const url = await getDownloadURL(item);
      return {
        name: item.name,
        id: encodeURIComponent(item.fullPath),
        path: item.fullPath,
        url,
      };
    })
  );
};

export const fetchBlob = async (minPath: string) => {
  const path = minPath.replace("min", "");
  const photoRef = ref(storage, path);
  return await getBlob(photoRef);
};
