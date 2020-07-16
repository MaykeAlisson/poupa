import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    lancCredInputValor: {
        marginTop: '15px',
        marginLeft: '5px',
        marginRight: '5px',
    },
    lancCredInputDesc: {
        marginTop: '15px',
        marginRight: '5px',
    },
    btnSalvar: {
        marginTop: 24,
        marginBottom: 24,
        marginLeft: '5px',
        color: 'white', 
        backgroundColor: '#028743 !important',
    },

}));