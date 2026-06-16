import { AddTodoForm } from './components/AddTodoForm';
import { FilterBar } from './components/FilterBar';
import { TodoList } from './components/TodoList';

export default function AppContent() {
  return (
    <section>
      <h1>Todo App</h1>

      <AddTodoForm />
      <FilterBar />
      <TodoList />
    </section>
  );
}