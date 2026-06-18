import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import {
  Checkbox,
  IconButton,
  TextField,
  ListItem,
  ListItemText,
  Stack,
  Button,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import { Todo } from '../types/todo.types';
import { useTodo } from '../context/TodoContext';
import { FocusTrap } from './FocusTrap';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { dispatch } = useTodo();

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const deleteBtnRef = useRef<HTMLButtonElement>(null);

  const handleSave = () => {
    if (!text.trim()) return;

    dispatch({
      type: 'EDIT',
      payload: { id: todo.id, title: text },
    });

    setEditing(false);
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE',
      payload: { id: todo.id },
    });

    setConfirmOpen(false);
  };

  return (
    <>
      {/* ================= ITEM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ListItem
          className="todo-item"
          secondaryAction={
            <IconButton
              ref={deleteBtnRef}
              edge="end"
              onClick={() => setConfirmOpen(true)}
              aria-label="Usuń zadanie"
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Stack direction="row" alignItems="center" spacing={2} width="100%">

            {/* CHECKBOX */}
            <Checkbox
              checked={todo.completed}
              onChange={() =>
                dispatch({
                  type: 'TOGGLE',
                  payload: { id: todo.id },
                })
              }
              aria-label="Oznacz jako wykonane"
            />

            {/* EDIT / VIEW */}
            {editing ? (
              <TextField
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlur={handleSave}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                autoFocus
              />
            ) : (
              <ListItemText
                primary={todo.title}
                onDoubleClick={() => setEditing(true)}
                sx={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  opacity: todo.completed ? 0.6 : 1,
                  cursor: 'pointer',
                  transition: '0.2s',
                }}
              />
            )}

          </Stack>
        </ListItem>
      </motion.div>

      {/* ================= MODAL DELETE ================= */}
      {confirmOpen && (
        <div
          className="modal-overlay"
          onClick={() => setConfirmOpen(false)}
        >
          <FocusTrap
            onEscape={() => setConfirmOpen(false)}
            triggerRef={deleteBtnRef}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="delete-title"
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="delete-title">Usunąć zadanie?</h2>

              <p>{todo.title}</p>

              <div className="flex gap-2 mt-4">
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  Usuń
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => setConfirmOpen(false)}
                >
                  Anuluj
                </Button>
              </div>
            </div>
          </FocusTrap>
        </div>
      )}
    </>
  );
};

/*//
// tailwind version
import { useTodo } from '../context/TodoContext';

export const TodoItem = ({ todo }: any) => {
  const { dispatch } = useTodo();

  return (
    <div className="flex items-center justify-between p-3 border rounded-md bg-white">

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch({
              type: 'TOGGLE_TODO',
              payload: todo.id,
            })
          }
        />

        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </label>

      <button
        onClick={() =>
          dispatch({
            type: 'DELETE_TODO',
            payload: todo.id,
          })
        }
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Usuń
      </button>
    </div>
  );
};
//*/