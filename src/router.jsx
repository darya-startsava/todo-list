import { Routes, Route } from 'react-router-dom';
import TodoList from './components/todoList/todoList';
import Home from './components/home/home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo-list" element={<TodoList />} />
    </Routes>
  );
}
