import React, {useContext} from 'react';


import useStyles from "./styles";
import CardCredito from "./components/CardCredito";
import CardContas from "./components/CardContas";
import Grid from "@material-ui/core/Grid";

const Contas = () => {

    const classes = useStyles();
    

    return (
        <>
            <Grid
                className={classes.container}
                container
                spacing={3}
            >
                <CardCredito/>
                <CardContas/>
            </Grid>
        </>
    );

};

export default Contas;