import React, {useContext} from 'react';

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import useStyles from './styles';
import Grid from "@material-ui/core/Grid";

const balanco = [
    {
        'mes': 'Janeiro',
        'balanco': -200
    },
    {
        'mes': 'Fevereiro',
        'balanco': 0
    },
    {
        'mes': 'Março',
        'balanco': 0
    },
    {
        'mes': 'Abril',
        'balanco': -250
    },
    {
        'mes': 'Maio',
        'balanco': 0
    },
    {
        'mes': 'Junho',
        'balanco': 150
    },
    {
        'mes': 'Julho',
        'balanco': 0
    },
    {
        'mes': 'Agosto',
        'balanco': 0
    },
    {
        'mes': 'Setembro',
        'balanco': 200
    },
    {
        'mes': 'Outubro',
        'balanco': -20
    },
    {
        'mes': 'Novembro',
        'balanco': 0
    },
    {
        'mes': 'Dezembro',
        'balanco': 0
    },
]

const CardLancamentosMeses = () => {

    const classes = useStyles();

    return (
        <>
            <Grid
                className={classes.container}
                container
                spacing={3}
            >
                {
                    balanco.map(balanco => (
                        <Card className={classes.cards}>
                            <Typography>
                                {balanco.mes}
                            </Typography>
                            <Typography>
                                {balanco.balanco}
                            </Typography>
                        </Card>
                    ))
                }
            </Grid>
        </>
    );

};

export default CardLancamentosMeses;