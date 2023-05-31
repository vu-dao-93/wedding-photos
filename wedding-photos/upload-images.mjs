import { globStream } from "glob";
import { uploadFile } from "./api/upload-file.mjs";
import path from "path";

const PHOTOS_PATH = "wedding-photos/photos";

(() => {
  globStream("*.webp", {
    cwd: path.join(process.cwd(), PHOTOS_PATH, "min/"),
  }).on("data", async (file) => {
    try {
      const response = await uploadFile(
        `${PHOTOS_PATH}/min/${file}`,
        `min/${file}`
      );
    } catch (error) {
      console.log(error);
    }
  });
})();
