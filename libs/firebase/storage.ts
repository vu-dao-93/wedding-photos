import app from "./app";
import { getStorage } from "firebase/storage";

export default getStorage(app, "gs://wedding-photos-vu-pa");
