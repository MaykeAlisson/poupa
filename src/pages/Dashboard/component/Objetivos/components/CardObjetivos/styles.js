import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        boxShadow: '5px 10px 18px #888888',
        maxWidth: 600,
        margin: '10px',
    },
    title: {
        fontWeight: 'bold',
    },
    progresso: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            // justifyContent: 'center',
        },
    },
    objetivo: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            // justifyContent: 'center',
        },
    },
    atual: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            // justifyContent: 'center',
        },
    },
}));