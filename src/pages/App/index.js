import React, {useState} from 'react';

import AppProvider from '../../contexto/provider';
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
                    ? <AppProvider>
                        <Dashboard onLogoutSuccess={() => setAutenticado(false)}>
                            {children}
                        </Dashboard>
                    </AppProvider>
                    : <Acesso onLoginSuccess={() => setAutenticado(true)}/>
            }
        </>
    );
}