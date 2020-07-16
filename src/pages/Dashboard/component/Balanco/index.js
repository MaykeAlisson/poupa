import React, {useContext} from 'react';


import useStyles from "./styles";
import CardLancamentosMeses from "./components/CardLancamentoMeses";

const Balanco = () => {

    const classes = useStyles();
    

    return (
        <>
            <CardLancamentosMeses/>
        </>
    );

};

export default Balanco;