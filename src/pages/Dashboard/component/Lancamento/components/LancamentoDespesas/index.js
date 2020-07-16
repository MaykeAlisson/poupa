import React from 'react';
import {useState} from "react";

import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const LancamentoDespesas = () => {

    const classes = useStyles();

    const [conta, setConta] = useState(0);

    const handleChange = (event) => {
        setConta(event.target.value);
    };


    return (
        <>
            <Paper elevation={3}>
                <div>
                    <TextField
                        className={classes.lancDispInputValor}
                        label="Valor"
                        type="number"
                        // autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField
                        className={classes.lancDispInputDesc}
                        label="Descrição"
                        type="text"
                        // autoComplete="current-password"
                        variant="outlined"
                    />
                </div>
                <div>
                    <FormControl variant="outlined" required className={classes.formControl}>
                        <InputLabel>Conta</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={conta}
                            onChange={handleChange}
                            label="Conta"
                        >
                            <MenuItem value={10}>Necessidades Basica</MenuItem>
                            <MenuItem value={20}>Investimento</MenuItem>
                            <MenuItem value={30}>Educação</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        className={classes.lancDispInputTag}
                        label="Tag"
                        type="text"
                        variant="outlined"
                    />
                </div>
                <Button
                    className={classes.btnSalvar}
                    variant="contained"
                    size="large"
                    onClick={() => {

                    }}
                >
                    Salvar
                </Button>
            </Paper>
        </>
    );

};

export default LancamentoDespesas;