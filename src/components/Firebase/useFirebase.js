import { useEffect, useState } from "react";
import app from "./firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

app();
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const createEmailAct = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const setDisplayName = (name) => {
        console.log(name);
        updateProfile(auth.currentUser,
            { displayName: name })
            .then(result => {

            })
            .catch(error => {
                console.log(error.message);
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setError(' ');
                setUser(user);
            }
            else {

            }
        })
    }, [])

    const signOutGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        createEmailAct,
        signInEmail,
        signOutGoogle,
        googleSignIn,
        user,
        error,
        setError,
        setDisplayName

    }
}

export default useFirebase;