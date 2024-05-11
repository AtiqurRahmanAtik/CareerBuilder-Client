import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../FireBase/Firebase.config";

export const AuthContext = createContext(null);

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


    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;