// src/components/dashboard/StatsCard.tsx
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  title: string;
  value: number;
}

export const StatsCard = ({ title, value }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};