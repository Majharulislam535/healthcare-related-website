import React, { createContext } from 'react';
import useFirebase from '../Firebase/useFirebase';
export const Context = createContext();
const AuthContext = (props) => {
    const firebase = useFirebase();
    return (
        <Context.Provider value={firebase}>
            {props.children}
        </Context.Provider>
    );
};

export default AuthContext;