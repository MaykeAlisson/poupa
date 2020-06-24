import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";
import CardLancamentosMeses from "./components/CardLancamentoMeses";

const Balanco = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <CardLancamentosMeses/>
        </>
    );

};

export default Balanco;