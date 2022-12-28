import Form from '../form/container/form';
import Header from '../header/container/header';
import Tabs from '../tabs/container/tabs';
import TaskList from '../taskList/container/taskList';

export default function TodoList() {
  return (
    <>
      <Header />
      <Form label="Add new task" />
      <Tabs />
      <TaskList />
    </>
  );
}
