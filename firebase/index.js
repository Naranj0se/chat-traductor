// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQE7fQdqhs_R7XFZ_2SS2la5tZ5wVtZ4",
  authDomain: "chat-translator-97c62.firebaseapp.com",
  projectId: "chat-translator-97c62",
  storageBucket: "chat-translator-97c62.appspot.com",
  messagingSenderId: "1021644006400",
  appId: "1:1021644006400:web:99d2a93abba8439807e4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMessages(db) {
  const messageCol = collection(db, 'messages');
  const messageSnapshot = await getDocs(citiesCol);
  const messageList = citySnapshot.docs.map(doc => doc.data());
  
  return messageList;
}

export { getMessages }
