import React, {useContext} from 'react';

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import useStyles from './styles';

const CardLivros = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <Typography>
                    Livro recomendado
                </Typography>
                <Typography>
                    Livro recomendado
                </Typography>
                <Typography>
                    Livro recomendado
                </Typography>
                <Typography>
                    Livro recomendado
                </Typography>
                <Typography>
                    Livro recomendado
                </Typography>                
            </Card>
        </div>
    );

};

export default CardLivros;