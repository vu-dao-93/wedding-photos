import { glob } from "glob";
import path from "path";
import sharp from "sharp";
import { PHOTOS_LOCAL_PATH } from "./api/constants.mts";

async function compressPhotos(): Promise<void> {
  const images = await glob(`*.jpg`, {
    cwd: path.join(process.cwd(), PHOTOS_LOCAL_PATH),
  });
  images.forEach((fileName) =>
    sharp(`${PHOTOS_LOCAL_PATH}/${fileName}`)
      .resize(2000)
      .webp({
        quality: 50,
      })
      .toFile(`${PHOTOS_LOCAL_PATH}/min/${fileName.slice(0, -4)}.webp`)
  );
}

function main() {
  compressPhotos();
}

main();
