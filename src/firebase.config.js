import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDclSSVzIFBmzSrybyDxpqxlxgTB5HFXWQ",
  authDomain: "pizza-app-1e3af.firebaseapp.com",
  projectId: "pizza-app-1e3af",
  storageBucket: "pizza-app-1e3af.appspot.com",
  messagingSenderId: "803802461363",
  appId: "1:803802461363:web:0f658651d1b44b3611acc6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
