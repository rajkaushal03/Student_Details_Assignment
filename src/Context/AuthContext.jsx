/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../Auth/firebase";
import { doSignInWithGoogle } from "../Auth/auth";


export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");

    const toggleMode = () => {
        setIsRegister((prev) => !prev);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            let userCredential;

            if (isRegister) {
                userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User registered");
            } else {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
            }
            setCurrentUser(userCredential.user);
            setUserLoggedIn(true);
            setEmail("");
            setPassword("");
            console.log("User logged in", userCredential.user);

        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };


    const handleGoogleSignIn = async () => {
        try {

            const data = await doSignInWithGoogle();
            setUserLoggedIn(true);
            setCurrentUser(data.user);

        } catch (err) {
            console.error("Google sign-in error:", err.message);
            setError(err.message);
        }
    };

    return (
        <AuthContext.Provider value={{
            showLoginForm,
            setShowLoginForm,
            currentUser,
            userLoggedIn,
            setUserLoggedIn,
            email,
            setEmail,
            password,
            setPassword,
            isRegister,
            setIsRegister,
            error,
            toggleMode,
            handleGoogleSignIn,
            handleSubmit
        }}>
            {children}
        </AuthContext.Provider>
    );
}