import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG7oAdZuK2zZS_2I3SOp-eO-MxoxDVrd8",
  authDomain: "meetup-production-f1470.firebaseapp.com",
  projectId: "meetup-production-f1470",
  storageBucket: "meetup-production-f1470.appspot.com",
  messagingSenderId: "754437329293",
  appId: "1:754437329293:web:495d302912bb9e886c2dc4",
};

export const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firestore;
