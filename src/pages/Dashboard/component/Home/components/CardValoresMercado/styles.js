import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    cards: {
        boxShadow: '5px 10px 18px #888888',
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            width: '220px',
            height: '120px',
        },
    },

}));