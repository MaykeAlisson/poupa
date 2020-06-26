import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

class BarraDeProgresso extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box display="flex" alignItems="center">
                <Box width="200px" mr={1}>
                <LinearProgress variant="determinate" {...this.props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${Math.round(
                        this.props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        );
    }
}

const styles = props => ({
    colorPrimary: {
        backgroundColor: '#B2DFDB',
    },
    barColorPrimary: {
        backgroundColor: '#008000',
    }
});

export default  withStyles(styles)(BarraDeProgresso);