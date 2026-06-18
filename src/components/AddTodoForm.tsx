import { useState } from 'react';
import {
  TextField,
  Button,
  Stack,
} from '@mui/material';

import { useTodo } from '../context/TodoContext';

import { trackCTA } from '../analytics';

export const AddTodoForm = () => {
  const [text, setText] = useState('');

  const { dispatch } = useTodo();

  const handleAdd = () => {
    if (!text.trim()) return;

    // ANALITYKA — kliknięcie CTA
    trackCTA('todo_add');

    dispatch({
      type: 'ADD',
      payload: {
        title: text,
      },
    });

    setText('');
  };

  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <TextField
        fullWidth
        label="Nowe zadanie"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
      />

<Button
  variant="contained"
  onClick={handleAdd}
  className="add-todo-btn"
>
  Dodaj
</Button>
    </Stack>
  );
};