import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center',
        },        
    },
    sessionRecomend:{
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    }

}));