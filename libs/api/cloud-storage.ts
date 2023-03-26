import { Storage } from "@google-cloud/storage";

async function fetchStorage() {
  // This snippet demonstrates how to list buckets.
  // NOTE: Replace the client created below with the client required for your application.
  // Note that the credentials are not specified when constructing the client.
  // The client library finds your credentials using ADC.
  const storage = new Storage({
    keyFilename: "./cloud-storage.config.json",
  });

  return storage;
}

export async function listFiles() {
  const storage = await fetchStorage();

  return storage.bucket("wedding-photos-vu-pa").getFiles({
    prefix: "min/",
  });
}
