import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Todo, Action, Filter } from '../types/todo.types';
import { todoReducer } from '../reducers/todoReducer';
import React from 'react';

interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
  filter: Filter;
  setFilter: (f: Filter) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = React.useState<Filter>('all');

  return (
    <TodoContext.Provider value={{ todos, dispatch, filter, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used inside provider');
  return context;
};