import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            // display: 'flex',
        },
    },
    card: {
        [theme.breakpoints.up('md')]: {
            width: '300px',
            height: '400px',
        },
    },

}));