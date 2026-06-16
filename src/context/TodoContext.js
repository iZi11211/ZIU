import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import React from 'react';
const TodoContext = createContext(undefined);
export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [filter, setFilter] = React.useState('all');
    return (_jsx(TodoContext.Provider, { value: { todos, dispatch, filter, setFilter }, children: children }));
};
export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context)
        throw new Error('useTodo must be used inside provider');
    return context;
};
