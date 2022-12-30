import TaskListItem from '../../taskListItem/container/taskListItem';
import './taskList.css'

export default function TaskList(props) {
  const { data, selectedTab } = props;
  return (
    <ul className='list'>
      {data
        ?.filter((i) => {
          switch (selectedTab) {
            case 'all':
              return i;
            case 'active':
              return i.isActive;
            case 'inactive':
              return !i.isActive;
            default:
              return i;
          }
        })
        .map((i) => (
          <TaskListItem key={i.key} index={i.key} status={i.isActive}>
            {i.text}
          </TaskListItem>
        ))}
    </ul>
  );
}
