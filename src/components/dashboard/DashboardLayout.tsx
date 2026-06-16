// src/components/dashboard/DashboardLayout.tsx
import { Box } from '@mui/material';
import { Sidebar } from './Sidebar';
import { AppHeader } from './AppHeader';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <AppHeader />

        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};


