import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
        },
    },
    cards: {
        boxShadow: '5px 10px 18px #888888',
        [theme.breakpoints.up('md')]: {
            width: '220px',
            height: '120px',
            margin: '10px',
        },
    },

}));