import React, {useContext} from 'react';

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import useStyles from './styles';

const CardValoresMercado = () => {

    const classes = useStyles();
        
    return (
        <div className={classes.container}>
            <Card className={classes.cards}>
                <Typography>
                    Dolar
                </Typography>
                <Typography>
                    R$ 4,53
                </Typography>
            </Card>
            <Card className={classes.cards}>
                <Typography>
                    Bitcoin
                </Typography>
                <Typography>
                    R$ 19.300,53
                </Typography>
            </Card>
            <Card className={classes.cards}>
                <Typography>
                    Ibovespa: 1.300pt
                </Typography>
                <Typography>
                    Nasdak: 1.300pt
                </Typography>
            </Card>
        </div>
    );

};

export default CardValoresMercado;