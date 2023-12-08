// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO Lembrar de remover essas informações
const FIREBASE_API_KEY = "AIzaSyCAvoy34z_Dm-EbpIRTV-LLtB-u8fjUW1Q";
const FIREBASE_PROJECT_ID = "portfolio-fb195";
const FIREBASE_MESSAGING_SENDER_ID = "240950936900";
const FIREBASE_APP_ID = "1:240950936900:web:8f202d5e059a45eff9c311";
const FIREBASE_MEASUREMENT_ID = "8G2QJG148W";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: `G-${FIREBASE_MEASUREMENT_ID}`,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Tools =
  | "VUETIFY"
  | "VUE"
  | "REACT"
  | "HTML"
  | "CSS"
  | "FLUTTER"
  | "CYPRESS"
  | "JEST"
  | "JS"
  | "TS"
  | "LOTTIE"
  | "SASS"
  | "NUXT"
  | "NEXT"
  | "MUI"
  | "STYLED_COMPONENTS";

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  gitHubLink: string;
  link?: string;
  toolsUsed: Tools[];
}

export async function getProjects() {
  const myCollection = await getDocs(collection(db, "projects"));
  let response: Array<Project> = [];
  if (myCollection.empty) {
    return response;
  }
  response = myCollection.docs.map((doc) => {
    return {
      id: doc.id,
      title: doc.data().title,
      image: doc.data().image,
      description: doc.data().description,
      gitHubLink: doc.data().gitHubLink,
      link: doc.data().link,
      toolsUsed: doc.data().toolsUsed,
    };
  });
  return response;
}
