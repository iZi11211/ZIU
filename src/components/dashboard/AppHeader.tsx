// src/components/dashboard/AppHeader.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const AppHeader = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5">Dashboard</Typography>

        <Stack direction="row" spacing={1}>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};