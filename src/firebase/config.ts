import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: "feedback-app-dbc3f",
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.APP_ID,
    measurementId: import.meta.env.MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const authGoogle = getAuth(app)