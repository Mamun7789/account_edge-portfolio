import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.mode)


    const handleDark = (e) => {
        localStorage.setItem('mode', 'dark')
        setTheme('dark')
        document.body.style.background = 'linear-gradient(145deg, #1e2024, #23272b)'
    }

    const handleLight = (e) => {
        localStorage.setItem('mode', 'light')
        setTheme('light')
        document.body.style.background = '#fff'
    }


    const themePack = {
        theme,
        handleDark,
        handleLight
    }
    return (
        <AuthContext.Provider value={themePack}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;