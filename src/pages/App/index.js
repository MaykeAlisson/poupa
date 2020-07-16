import React, {useState} from 'react';

import {GlobalProvider} from 'Contexts/global';
import Acesso from "../Acesso";
import Dashboard from '../Dashboard'

export default ({children}) => {

    const [autenticado, setAutenticado] = useState(true);

    // useEffect(() => {
    //     setAutenticado(TokenRepository.isAuthenticated());
    // }, []);

    return (
        <>
            {
                autenticado
                    ? <GlobalProvider>
                        <Dashboard onLogoutSuccess={() => setAutenticado(false)}>
                            {children}
                        </Dashboard>
                    </GlobalProvider>
                    : <Acesso onLoginSuccess={() => setAutenticado(true)}/>
            }
        </>
    );
}