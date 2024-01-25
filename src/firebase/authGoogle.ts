import { GoogleAuthProvider, UserCredential, signInWithPopup } from "firebase/auth"
import { authGoogle } from "./config"

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    return new Promise((resolve, reject) => {
        signInWithPopup(authGoogle, googleProvider)
            .then((result: UserCredential) => {
                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    profilePhoto: result.user.photoURL
                }

                const jsonUserData = JSON.stringify(userData)

                localStorage.setItem('GoogleAuthData', jsonUserData)
                resolve(userData)
            })
            .catch((error: Error) => {
                console.error("Error to sign in with Google Account: ", error)
                reject(error)
            })
    })
}