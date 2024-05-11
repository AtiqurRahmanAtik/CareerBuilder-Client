import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


import { app } from "../FireBase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    //register
    const createUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const loginUser = (email,password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleSignIn = () =>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    //singOut
    const logOut = async () => {
        setLoader(true);
        return signOut(auth);
      }


      // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoader(false);
    })
    return () => {
      return unsubscribe()
    }
  }, [])


  //authInfo
    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        loginUser,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;