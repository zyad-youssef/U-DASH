import logo from './logo.svg';
import './App.css';
import Message from './components/Messages';
import { makeStyles, IconButton, Typography, CssBaseline, AppBar, Toolbar, Container, Button, Menu as MenuIcon } from '@material-ui/core';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      {/* <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            U-Dash
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div> <Container maxWidth="sm">
          <Typography variant="h7" allign="center" color="textPrimary" gutterBottom>
            TEST TEXT
          </Typography>
        </Container></div>
      </main>
      <Message /> */}
      <Header></Header>  
    </div>
  );
}

export default App;
