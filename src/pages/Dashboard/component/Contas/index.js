import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";
import CardCredito from "./components/CardCredito";
import CardContas from "./components/CardContas";

const Contas = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <CardCredito/>
            <CardContas/>
        </>
    );

};

export default Contas;