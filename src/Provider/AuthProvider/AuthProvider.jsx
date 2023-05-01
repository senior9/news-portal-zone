import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../Firebase.init';

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {


    const authInfo ={

    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
            {children}
            </authContext.Provider>

        </div>
    );
};

export default AuthProvider;