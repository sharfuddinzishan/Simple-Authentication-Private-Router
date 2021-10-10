import { useEffect, useState } from 'react';
import initialization from './../firebase/firebaseInitialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(response => {
                setUser(response.user);
                setError('');
            })
            .catch(error => setError(error.message));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth]);

    return {
        user,
        error,
        signInGoogle,
        logOut
    };
};

export default useFirebase;