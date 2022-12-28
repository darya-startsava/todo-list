import TaskListItem from '../../taskListItem/container/taskListItem';

export default function TaskList(props) {
  const { data } = props;
  return (
    <ul>
      {data?.map((i) => (
        <TaskListItem key={i.key} index={i.key} status={i.isActive}>
          {i.text}
        </TaskListItem>
      ))}
    </ul>
  );
}
