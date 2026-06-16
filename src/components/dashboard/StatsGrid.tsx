import Grid from '@mui/material/Grid';
import { StatsCard } from './StatsCard';
import { useTodo } from '../../context/TodoContext';

export const StatsGrid = () => {
  const { todos } = useTodo();

  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = todos.filter(t => !t.completed).length;

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={4}>
        <StatsCard title="Wszystkie zadania" value={total} />
      </Grid>

      <Grid xs={12} md={4}>
        <StatsCard title="Ukończone" value={completed} />
      </Grid>

      <Grid xs={12} md={4}>
        <StatsCard title="Oczekujące" value={active} />
      </Grid>
    </Grid>
  );
};