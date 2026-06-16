// src/components/dashboard/Sidebar.tsx
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Avatar,
  Box,
  Typography,
} from '@mui/material';

const drawerWidth = 240;

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">TodoApp</Typography>
      </Box>

      <List>
        <ListItemButton>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Zadania" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Ustawienia" />
        </ListItemButton>
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Avatar>U</Avatar>
      </Box>
    </Drawer>
  );
};
