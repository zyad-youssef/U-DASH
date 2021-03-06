import * as React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, Divider, Button, Drawer, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './ulogo.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
    Link,
} from "react-router-dom";



export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false
    });

    // let routes = (
    //     <Routes>
    //         <Route exact path="/">
    //             <Menu />
    //         </Route>
    //     </Routes>
    // );

    const AdapterLink = React.forwardRef((props, ref) => (
        <Link innerRef={ref} {...props} />
    ));

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Router>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <Link to="/menu"  >
                        {['Menu'].map((text, index) => (
                            <ListItem button key={"Menu"} onClick={() => { window.location.href = "/menu" }}>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/orders"  >
                        <ListItem button key={"Orders"} onClick={() => { window.location.href = "/orders" }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={"Orders"} />
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link to="/Maps"  >
                        <ListItem button key={"Map"} onClick={() => { window.location.href = "/map" }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={"Map"} />
                        </ListItem>
                    </Link>
                    <Link to="/controls"  >
                        <ListItem button key={"Controls"} onClick={() => { window.location.href = "/controls" }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={"Controls"} />
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Router>
    );

    return (
        <div>
            {['DASHBOARD'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        onClick={toggleDrawer(anchor, true)} style={{ float: 'left' }}
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none', }, }}>
                        <MenuIcon />
                    </IconButton>
                    {/* TODO This block was added for naming and logo integration
                    CHANGE ONCE NEW LOGO IS MADE TODO*/}
                    <Typography variant="h4" style={{ textAlign: 'left' }}>
                        <img src={logo} width="30" height="26" alt="Logo" />Dash
                    </Typography>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>

            ))}
        </div>
    );
}