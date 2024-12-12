import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_vCc7APEBXnrjRECSIHVGrbEKedZExo",
  authDomain: "meal-plan-6ed50.firebaseapp.com",
  databaseurl: "https://meal-plan-6ed50-default-rtdb.firebaseio.com/",
  projectId: "meal-plan-6ed50",
  storageBucket: "meal-plan-6ed50.appspot.com",
  messagingSenderId: "385989799750",
  appId: "1:385989799750:web:f1265b15d02b6f60933f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };