import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7UqgbCL44MA32UXRdSEDgqsfdak1FENw",
  authDomain: "artkraft-8f9b2.firebaseapp.com",
  projectId: "artkraft-8f9b2",
  storageBucket: "artkraft-8f9b2.appspot.com",
  messagingSenderId: "135771927605",
  appId: "1:135771927605:web:f4f3a111c390ef6d746d7c",
  measurementId: "G-V0KHQSZEEE"
};

// Initialize Firebase
if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;