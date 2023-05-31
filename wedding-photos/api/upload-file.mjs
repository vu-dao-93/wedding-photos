import { fetchBucket } from "./cloud-storage.mjs";

export async function uploadFile(file, destination) {
  const bucket = await fetchBucket();
  return bucket.upload(file, {
    destination,
  });
}
