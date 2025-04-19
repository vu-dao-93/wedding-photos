import { UploadOptions } from "@google-cloud/storage";
import { fetchStorage } from "./cloud-storage.mts";

export async function uploadFile(
  bucket: string,
  file: string,
  destination: UploadOptions["destination"]
) {
  const storage = await fetchStorage();
  return storage.bucket(bucket).upload(file, {
    destination,
  });
}
