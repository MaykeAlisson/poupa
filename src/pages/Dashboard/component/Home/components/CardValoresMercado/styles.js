import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    cards: {
        [theme.breakpoints.up('md')]: {
            width: '220px',
            height: '120px',
            marginRight: '10px',
        },
    },

}));