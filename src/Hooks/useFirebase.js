// import initializeAuthentication from "../Component/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Component/Firebase/firebase.init.js" 
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
        .then(res => console.log(res))
    }
    // register function
    const processToRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
            })
    }
    // login via email and password
    const processToLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return {
        signInWithGoogle,
        processToRegister,
        processToLogin
    }
}

export default useFirebase;