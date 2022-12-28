import Form from '../../form/container/form';
import TaskList from '../../taskList/container/taskList';

export default function TodoList(props) {
  const { name, count } = props;
  return (
    <>
      <header>
        <p>Hi, {name} it&apos;s your TODO list</p>
        <p>You have {count} active tasks.</p>
      </header>
      <Form label="Add new task" />
      <TaskList />
    </>
  );
}
