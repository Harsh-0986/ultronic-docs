import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5G3I4g7y3iirYM1Pc-ba5ktd8ZjpzJV4",
  authDomain: "ultronic-docs-production.firebaseapp.com",
  projectId: "ultronic-docs-production",
  storageBucket: "ultronic-docs-production.appspot.com",
  messagingSenderId: "351313318762",
  appId: "1:351313318762:web:ae3a0fbe7bac600998cb13",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
