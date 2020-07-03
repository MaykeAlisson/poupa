import React, {useContext} from 'react';
import {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Contexto from '../../../../../../contexto';

import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const LancamentoDespesas = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);
    const [conta, setConta] = useState(0);

    const handleChange = (event) => {
        setConta(event.target.value);
    };


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
                <FormControl variant="outlined" required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={conta}
                        onChange={handleChange}
                        label="Conta"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Tag"
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

export default LancamentoDespesas;