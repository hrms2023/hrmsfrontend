'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyB7UqgbCL44MA32UXRdSEDgqsfdak1FENw",
    authDomain: "artkraft-8f9b2.firebaseapp.com",
    projectId: "artkraft-8f9b2",
    storageBucket: "artkraft-8f9b2.appspot.com",
    messagingSenderId: "135771927605",
    appId: "1:135771927605:web:f4f3a111c390ef6d746d7c",
    measurementId: "G-V0KHQSZEEE"
  };
  
  initializeApp(firebaseConfig);
const WithAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const auth = getAuth();
    const router = useRouter();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login'); // Redirect to login page if not authenticated
        }
      });

      return () => unsubscribe(); // Clean up the subscription when component unmounts
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default WithAuth;