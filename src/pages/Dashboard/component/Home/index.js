import React, {useContext} from 'react';

import useStyles from './styles';
import Contexto from '../../../../contexto'
import CardValoresMercado from "./components/CardValoresMercado";
import CardNoticiasMercado from "./components/CardNoticiasMercado";


const Home = () => {

    const classes = useStyles();
    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <div className={classes.container}>
                <CardValoresMercado/>
                <CardNoticiasMercado/>
            </div>
            {/*<h1>Page Home</h1>*/}
            {/*<h2>{usuario}</h2>*/}
            {/*<span>{numero}</span>*/}
        </>
    );

};

export default Home;