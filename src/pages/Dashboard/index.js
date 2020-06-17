import React from 'react';
import {Route, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useTheme from "@material-ui/core/styles/useTheme";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './styles';
import Home from "./component/Home";
import Profile from "./component/Profile";

function ResponsiveDrawer(props) {
    const classes = useStyles();
    let history = useHistory();

    const {window} = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{backgroundColor: '#F8F8FF'}}>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem button key={1} onClick={() => {
                    history.push("/");
                }}>
                    <ListItemIcon> <InboxIcon/> </ListItemIcon>
                    <ListItemText primary='Home'/>
                </ListItem>
                <ListItem button key={2} onClick={() => {
                    history.push("/profile");
                }}>
                    <ListItemIcon> <MailIcon/> </ListItemIcon>
                    <ListItemText primary='Profile'/>
                </ListItem>
                <ListItem button key={3} onClick={() => {
                    history.push("/objetivos");
                }}>
                    <ListItemIcon> <InboxIcon/> </ListItemIcon>
                    <ListItemText primary='Objetivos'/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="abrir Menu"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Poupa Grana
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="Usuario">
                            <AccountCircle/>
                        </IconButton>
                        <p>Usuario</p>
                        <IconButton aria-label="Sair" onClick={() => {alert('sair')}}>
                            <ExitToAppIcon  className={classes.iconeSair}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/profile' exact component={Profile}/>
                    <Route component={Home}/>
                </Switch>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
