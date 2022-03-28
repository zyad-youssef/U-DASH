import * as React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, Divider, Button, Drawer, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './ulogo.png';
import { Route, Routes, Link } from "react-router-dom";
import Menu from './Menu';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false
    });

    let routes = (
        <Routes>
            <Route exact path="/">
                <Menu />
            </Route>
        </Routes>
    );

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
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Menu'].map((text, index) => (
                    <ListItem button key={"Menu"}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem button key={"Orders"}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Orders"}/>
                </ListItem>
            </List>
        </Box>
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