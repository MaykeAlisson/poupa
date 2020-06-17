import React, {useContext} from 'react';

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import useStyles from './styles';

const CardNoticiasMercado = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <Typography>
                    Magazine Luiza abre nova tarde
                </Typography>
                <Typography>
                    Magazine Luiza abre nova tarde
                </Typography>
                <Typography>
                    Magazine Luiza abre nova tarde
                </Typography>
                <Typography>
                    Magazine Luiza abre nova tarde
                </Typography>
                <Typography>
                    Magazine Luiza abre nova tarde
                </Typography>
                <Typography>
                    Magazine Luiza abre nova tarde
                </Typography>
            </Card>
        </div>
    );

};

export default CardNoticiasMercado;