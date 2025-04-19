import { globStream } from "glob";
import { uploadFile } from "./api/upload-file.mts";
import path from "path";
import { PHOTOS_BUCKET, PHOTOS_LOCAL_PATH } from "./api/constants.mts";

const uploadPhotos = () => {
  globStream("*.webp", {
    cwd: path.join(process.cwd(), PHOTOS_LOCAL_PATH, "min/"),
  }).on("data", async (file) => {
    try {
      const response = await uploadFile(
        PHOTOS_BUCKET,
        `${PHOTOS_LOCAL_PATH}/min/${file}`,
        `min/${file}`
      );
    } catch (error) {
      console.log(error);
    }
  });
};

const main = () => {
  uploadPhotos();
};
main();
