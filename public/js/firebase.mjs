// import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-storage.js";
// import {getDatabase, ref, onValue, set, child, get, update, remove} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { initializeApp } from "../js/other/firebase-app.js";
const firebaseConfig = {
          apiKey: "AIzaSyCo5jZ9wyNSP401q5X8-BH-gM7uxUnhuro",
          authDomain: "web2k21-99ffd.firebaseapp.com",
          projectId: "web2k21-99ffd",
          storageBucket: "web2k21-99ffd.appspot.com",
          messagingSenderId: "616040662732",
          appId: "1:616040662732:web:ac36b18f3ccff8c246a469"
};

const app = initializeApp(firebaseConfig);

export {app};
