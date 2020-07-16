import React from "react";
import {useState} from 'react';
import {createContext} from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    
    const [usuario, setUsuario] = useState("Mayke");
    const [numero, setNumero] = useState(28);
    

    return (
        <GlobalContext.Provider value={{
            usuario,
            numero, 
            setNumero
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;