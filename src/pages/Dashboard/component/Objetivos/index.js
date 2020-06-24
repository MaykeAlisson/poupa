import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";
import CardObjetivos from "./components/CardObjetivos";

const Objetivos = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <CardObjetivos/>
        </>
    );

};

export default Objetivos;