import React, {useContext} from 'react';
import {useState} from "react";


import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LancamentoCredito = () => {

    const classes = useStyles();
    
    const [value, setValue] = useState(0);


    return (
        <>
            <Paper elevation={3} className={classes.container}>
                <TextField
                    className={classes.lancCredInputValor}
                    label="Valor"
                    type="number"
                    // autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    className={classes.lancCredInputDesc}
                    label="Descrição"
                    type="text"
                    // autoComplete="current-password"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    // fullWidth
                    size="large"
                    className={classes.btnSalvar}
                    onClick={() => {
                        
                    }}
                >
                    Salvar
                </Button>
            </Paper>
        </>
    );

};

export default LancamentoCredito;