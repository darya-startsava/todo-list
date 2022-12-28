import store from '../../store';
import Form from '../form/container/form';
import TaskList from '../taskList/container/taskList';

export default function TodoList() {
  const { name } = store.getState();
  return (
    <>
      <header>Hi, {name} it&apos;s your TODO list</header>
      <Form label="Add new task" />
      <TaskList />
    </>
  );
}
