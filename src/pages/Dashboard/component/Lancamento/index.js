import React, {useContext} from 'react';
import {useState} from "react";

import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import LancamentoCredito from "./components/LancamentoCredito";
import LancamentoDespesas from "./components/LancamentoDespesas";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={1}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Lancamento = (props) => {

    const classes = useStyles();
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab key={0} label="Credito" {...a11yProps(0)} />
                    <Tab key={1} label="Dispesas" {...a11yProps(1)} />
                    <Tab key={2} label="Recorrentes" disabled {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <div>
                <TabPanel value={value} index={0}>
                    <LancamentoCredito/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LancamentoDespesas/>
                </TabPanel>
            </div>
        </>
    );

};

export default Lancamento;