import TaskListItem from '../../taskListItem/container/taskListItem';
import './taskList.css';
import { tabsItems } from '../../../constants';
import { PropTypes } from 'prop-types';

export default function TaskList(props) {
  const { data, selectedTab } = props;
  const tabs = Object.keys(tabsItems);
  return (
    <ul className="list">
      {data
        ?.filter((i) => {
          switch (selectedTab) {
            case tabs[0]:
              return i;
            case tabs[1]:
              return i.isActive;
            case tabs[2]:
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

TaskList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.number, text: PropTypes.string, isActive: PropTypes.bool })
  ),
  selectedTab: PropTypes.oneOf(Object.keys(tabsItems)),
};
