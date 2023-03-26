import { FirebaseApp, initializeApp } from "firebase/app";
import firebaseConfig from "firebase.config";

let app: FirebaseApp | undefined = undefined;

if (!app) {
  app = initializeApp(firebaseConfig);
}

export default app;
