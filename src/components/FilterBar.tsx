// src/components/FilterBar.tsx
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import { Filter } from '../types/todo.types';

export const FilterBar = () => {
  const { filter, setFilter } = useTodo();

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={(_, value: Filter) => value && setFilter(value)}
    >
      <ToggleButton value="all">Wszystkie</ToggleButton>
      <ToggleButton value="active">Aktywne</ToggleButton>
      <ToggleButton value="completed">Ukończone</ToggleButton>
    </ToggleButtonGroup>
  );
};