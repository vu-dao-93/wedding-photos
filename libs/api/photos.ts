import { listFiles } from "./cloud-storage";

export interface PhotoInfo {
  id: string | undefined;
  name: string;
  url: string;
}

export async function fetchPhotos(): Promise<PhotoInfo[]> {
  const [files] = await listFiles();
  const photos =
    files.map((file) => {
      // using spread lead to undefined error while running publicUrl()
      return {
        id: file.id,
        name: file.name.replace(/.*\//, ""),
        path: file.name,
        url: file.publicUrl(),
      };
    }) || [];
  return photos;
}
