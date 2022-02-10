import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export function App() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 100,
          border: '100px',
          backgroundColor: 'white',
          borderWidth: '100px',
        }}
      >
        <Toolbar>
          <Typography variant="h6" color={'black'} noWrap component="div">
            Aula React
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            zIndex: 1,
            backgroundColor: 'white',
            borderColor: 'grey',
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Usuários'].map((text, index) => (
              <ListItem component={Link} to={'/view2'} button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default App;
