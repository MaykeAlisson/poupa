import React, {useContext} from 'react';

import useStyles from "./styles";
import GlobalContext from "Contexts/global";

const Configuracoes = () => {

    const classes = useStyles();
    const {usuario} = useContext(GlobalContext);


    return (
        <>
            <h1>Page Configurações</h1>
            <h2>{usuario}</h2>
        </>
    );

};

export default Configuracoes;