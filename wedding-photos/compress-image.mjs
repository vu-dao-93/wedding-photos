import { glob } from "glob";
import path from "path";
import sharp from "sharp";

const PHOTOS_PATH = "wedding-photos/photos";

(async () => {
  const images = await glob(`*.jpg`, {
    cwd: path.join(process.cwd(), PHOTOS_PATH),
  });
  images.forEach((fileName) =>
    sharp(`${PHOTOS_PATH}/${fileName}`)
      .resize(2000)
      .webp({
        quality: 50,
      })
      .toFile(`${PHOTOS_PATH}/min/${fileName.slice(0, -4)}.webp`)
  );
})();
