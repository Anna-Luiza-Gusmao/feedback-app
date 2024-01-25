import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD7Kv6JxDx4agwkE0SDSVKmOH-Rjc5-pHk",
    authDomain: "feedback-app-dbc3f.firebaseapp.com",
    projectId: "feedback-app-dbc3f",
    storageBucket: "feedback-app-dbc3f.appspot.com",
    messagingSenderId: "333662043594",
    appId: "1:333662043594:web:8daa9c47c3329a11582333",
    measurementId: "G-QLHXY2XS8W"
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const authGoogle = getAuth(app)