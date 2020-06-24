import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";

class ColoredLinearProgress extends Component {
    render() {
        const { classes } = this.props;
        return <LinearProgress variant="determinate" {...this.props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>;
    }
}

const styles = props => ({
    colorPrimary: {
        backgroundColor: '#B2DFDB',
    },
    barColorPrimary: {
        backgroundColor: '#00695C',
    }
});

export default  withStyles(styles)(ColoredLinearProgress);