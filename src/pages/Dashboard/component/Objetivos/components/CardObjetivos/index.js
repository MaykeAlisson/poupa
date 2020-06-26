import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import BarraDeProgresso from "../../../../../../infra/components/CustomBarraProgress";
import Motivacional from "../../../../../../infra/util/Motivacional/frases";
import formatBR from "../../../../../../infra/util/BR/formatBR";

const objetivo = [
    {id: 1, descricao: 'Objetivo1', tag: 'tag1', objetivo: 30000, atual: 15000},
    {id: 2, descricao: 'Objetivo2', tag: 'tag2', objetivo: 10000, atual: 4000},
    {id: 3, descricao: 'Objetivo3', tag: 'tag3', objetivo: 5000, atual: 1000},
    {id: 4, descricao: 'Objetivo4', tag: 'tag4', objetivo: 15000, atual: 6000},
    {id: 5, descricao: 'Objetivo5', tag: 'tag5', objetivo: 3000, atual: 535},
];


const CardObjetivos = () => {

    const classes = useStyles();

    return (
        <>
            {
                objetivo.map(obj => (
                    <Card className={classes.root} variant="outlined">
                        <CardContent key={obj.id}>
                            <Typography key={`${obj.id}_${obj.descricao}`} className={classes.title} gutterBottom>
                                {obj.descricao}
                            </Typography>
                            <Typography key={`${obj.id}_${obj.tag}`} color="textSecondary" gutterBottom>
                                Tag - {obj.tag}
                            </Typography>
                            <div key={`${obj.id}_${obj.objetivo}_classProgresso`} className={classes.progresso}>
                                <div key={`${obj.id}_${obj.objetivo}_classObjetivo`} className={classes.objetivo}>
                                    <Typography key={`${obj.id}_objetivo`} color="textSecondary" gutterBottom>
                                        Objetivo - 
                                    </Typography>
                                    <Typography key={`${obj.id}_${obj.objetivo}`} style={{fontWeight: 'bold', marginRight: '5px', marginLeft: '5px'}}>
                                       {formatBR(obj.objetivo)}
                                    </Typography>
                                </div>
                                <BarraDeProgresso value={(obj.atual / obj.objetivo )  * 100} />
                                <div key={`${obj.id}_${obj.objetivo}_classAtual`} className={classes.atual}>
                                    <Typography key={`${obj.id}_atual`} color="textSecondary" gutterBottom>
                                        Atual - 
                                    </Typography>
                                    <Typography key={`${obj.id}_${obj.atual}`} style={{fontWeight: 'bold', marginRight: '5px', marginLeft: '5px'}}>
                                        {formatBR(obj.atual)}
                                    </Typography>
                                </div>
                            </div>
                            {Motivacional.getFrase()}
                        </CardContent>
                    </Card>
                ))
            }
        </>
    );
}

export default CardObjetivos;