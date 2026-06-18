// src/components/TodoList.tsx

import { Card, CardContent } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos, filter } = useTodo();

  const filtered = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const isEmpty = filtered.length === 0;

  return (
    <section aria-label="Lista zadań">

      
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {isEmpty && "Brak zadań"}
        {!isEmpty && `Liczba zadań: ${filtered.length}`}
      </div>

      
<Card>
  <CardContent>

    <div className="task-grid">
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>

  </CardContent>
</Card>

    </section>
  );
};

// tailwind version

/*//
import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos, filter } = useTodo();

  const filtered = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-4">
            Brak zadań
          </p>
        )}

        {filtered.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
//*/
