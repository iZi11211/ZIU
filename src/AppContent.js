import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AddTodoForm } from './components/AddTodoForm';
import { FilterBar } from './components/FilterBar';
import { TodoList } from './components/TodoList';
export default function AppContent() {
    return (_jsxs("section", { children: [_jsx("h1", { children: "Todo App" }), _jsx(AddTodoForm, {}), _jsx(FilterBar, {}), _jsx(TodoList, {})] }));
}
