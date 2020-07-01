import React, {useContext} from 'react';
import {useState} from "react";

import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Contexto from '../../../../contexto'
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

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
            {value === index && <Box p={3}>{children}</Box>}
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

    const {usuario, numero} = useContext(Contexto);
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
                    <Tab label="Credito" {...a11yProps(0)} />
                    <Tab label="Dispesas" {...a11yProps(1)} />
                    <Tab label="Recorentes" disabled {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <div>
            <TabPanel value={value} index={0}>
                <Paper elevation={3} className="tabs-paper">
                <Typography>item1</Typography>
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper elevation={3} className="tabs-paper">
                <Typography>item2</Typography>
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Paper elevation={3} className="tabs-paper">
                <Typography>item3</Typography>
                </Paper>
            </TabPanel>
            </div>
        </>
    );

};

export default Lancamento;