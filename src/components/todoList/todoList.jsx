import Form from '../form/container/form';
import Header from '../header/container/header';
import Tabs from '../tabs/container/tabs';
import TaskList from '../taskList/container/taskList';
import { labels } from '../../constants';

export default function TodoList() {
  return (
    <>
      <Header />
      <Form label={labels.addNewTask} />
      <Tabs />
      <TaskList />
    </>
  );
}
