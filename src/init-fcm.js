import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDTi4hjtdewF-FGJlwfhprX8-Sfa6HK0KY",
  authDomain: "logoaliapp-a0202.firebaseapp.com",
  projectId: "logoaliapp-a0202",
  storageBucket: "logoaliapp-a0202.appspot.com",
  messagingSenderId: "695098146591",
  appId: "1:695098146591:web:d9e15bc1742e5e3b507a2a",
  measurementId: "G-7LTL753G1D",
};
const initializedFirebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(initializedFirebaseApp);

export { messaging };
