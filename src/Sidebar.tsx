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
import './App.css';

export function Sidebar(props) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
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
              {['Usuários '].map((text, index) => (
                <ListItem
                  button
                  onClick={() => {
                    console.log('Clicked');
                  }}
                  key={text}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {props.children}
        </Box>
      </Box>
    </>
  );
}
