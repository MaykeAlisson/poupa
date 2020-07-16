import React, {useContext} from 'react';

import useStyles from './styles';

import CardValoresMercado from "./components/CardValoresMercado";
import CardNoticiasMercado from "./components/CardNoticiasMercado";
import CardLivros from "./components/CardLivros";


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <CardValoresMercado/>
            </div>
            <div className={classes.sessionRecomend}>
                <CardNoticiasMercado/>
                <CardLivros/>
            </div>
        </>
    );

};

export default Home;