import imagemin from "imagemin";
import imageminJpegRecompress from "imagemin-jpeg-recompress";

const PHOTOS_PATH = "wedding-photos/photos";

imagemin([`${PHOTOS_PATH}/*.jpg`], {
  destination: `${PHOTOS_PATH}/min`,
  plugins: [imageminJpegRecompress()],
});
