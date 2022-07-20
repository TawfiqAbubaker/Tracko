import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/compat/app"

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    
    const signup = (email,password) => {
        return auth.createUserWithEmailAndPassword(email,password);
    }
    const login = (email,password) => {
        return auth.signInWithEmailAndPassword(email,password);
    }
    const signout = () => {
        auth.signOut();
    }
    async function createNewAccount() {
        try {
            var user = {
                name: "Raja",
                phone: "779797329",
                address: "474 Mercer Drive",
                uid: currentUser.uid,
                email: currentUser.email
            }
            writeUserData(user)
    
        } catch (error) {
            console.log(error.message)
        }
    }
    function writeUserData(user) {
        firebase.database().ref('users/' + currentUser.uid).set(user).catch(error => {
            console.log(error.message)
        });
    }
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user)
        })
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        signout,
        createNewAccount
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}