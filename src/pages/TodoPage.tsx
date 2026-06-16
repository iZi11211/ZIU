// src/pages/TodoPage.tsx

import { Typography, Stack, Paper } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import { AddTodoForm } from '../components/AddTodoForm';
import { FilterBar } from '../components/FilterBar';
import { TodoList } from '../components/TodoList';

const Stats = () => {
  const { todos } = useTodo();
  const active = todos.filter(t => !t.completed).length;

  return (
    <Typography variant="body2">
      {active} / {todos.length} aktywnych
    </Typography>
  );
};

export default function TodoPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3}>
          <Typography variant="h4">Todo App</Typography>
          <Stats />
          <AddTodoForm />
          <FilterBar />
          <TodoList />
        </Stack>
      </Paper>
    </div>
  );
}