import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [lang , setLang]= useState("en")
    const authInfo = {
        lang , setLang
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;