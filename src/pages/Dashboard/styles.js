import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        background: "#9932CC",
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    iconeUser:{
        // display: 'flex',
        justifyContent: 'flex-end',
    },
    nomeUsuario:{
        // display: 'flex',
        // justifyContent: 'flex-end',
    },
    iconeSair: {
        // display: 'flex',
        justifyContent: 'flex-end',
    },
    grow: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'flex',
        // [theme.breakpoints.up('md')]: {
        //     display: 'flex',
        // },
    },
}));