import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // Create user with Email and Password
    const createUserWithEmail = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login user with email and password
    const signInUserWithEmail = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Signout user
    const signOutUser = () => {
        return signOut(auth);
    }

    // Seting an Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        loading,
        user,
        createUserWithEmail,
        signInUserWithEmail,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;