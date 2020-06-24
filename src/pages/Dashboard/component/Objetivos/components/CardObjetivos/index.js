import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import useStyles from './styles';
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import ColoredLinearProgress from "../../../../../../infra/components/CustomBarraProgress";


function LinearProgressWithLabel(props) {
    const styles = props => ({
        colorPrimary: {
            backgroundColor: '#00695C',
        },
        barColorPrimary: {
            backgroundColor: '#B2DFDB',
        }
    });
    return (
        <Box display="flex" alignItems="center">
            <Box width="50%" mr={1}>
                <ColoredLinearProgress {...props}/>
                {/*<LinearProgress classes={{colorPrimary: styles.colorPrimary, barColorPrimary: styles.barColorPrimary}} variant="determinate" {...props} />*/}
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const CardObjetivos = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Reserva de Emergencia
                </Typography>
                <div>
                    <Typography color="textSecondary" gutterBottom>
                        Objetivo
                    </Typography>
                    <Typography variant="h5" component="h2">
                        R$ 20.000{bull}
                    </Typography>
                    <LinearProgressWithLabel value={30} />
                    <Typography color="textSecondary" gutterBottom>
                        Atual
                    </Typography>
                    <Typography variant="h5" component="h2">
                        R$ 6.000{bull}
                    </Typography>
                </div>
                <Typography variant="body2" component="p">
                    {'"A disciplina é a mãe do êxito."'}
                    <br/>
                    {' Ésquilo'}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardObjetivos;