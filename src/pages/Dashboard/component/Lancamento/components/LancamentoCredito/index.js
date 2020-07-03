import React, {useContext} from 'react';
import {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Contexto from '../../../../../../contexto';

import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LancamentoCredito = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);
    const [value, setValue] = useState(0);


    return (
        <>
            <Paper elevation={3} className="tabs-paper">
                <TextField
                    label="Valor"
                    type="number"
                    // autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    label="Descrição"
                    type="text"
                    // autoComplete="current-password"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    // fullWidth
                    size="large"
                    style={{
                        marginTop: 24, marginBottom: 24, color: 'white', backgroundColor: '#028743',
                    }}
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