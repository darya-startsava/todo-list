import { useState } from 'react';
import Button from '../../button/button';
import Form from '../../form/container/form';
import './taskListItem.css';
import { labels } from '../../../constants';
import { ReactComponent as EditIcon } from '../../../assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/delete-icon.svg';
import { PropTypes } from 'prop-types';

export default function TaskListItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { children, index, status, editTask, deleteTask, changeStatus } = props;

  function handleEditing() {
    setIsEditing(true);
  }

  function handleSubmitEditing(text) {
    editTask(index, text);
    setIsEditing(false);
  }

  function handleDeletion() {
    deleteTask(index);
  }

  function changeTaskStatus() {
    changeStatus(index);
  }

  return (
    <li className="task-list-item">
      {isEditing ? (
        <Form label={labels.editTask} onEdit={handleSubmitEditing} index={index} />
      ) : (
        <>
          <p className={status ? '' : 'inactive'} onClick={changeTaskStatus}>
            {children}
          </p>
          <div className="task-list-item_button_wrapper">
            <Button type="button" handleClick={handleEditing}>
              <EditIcon />
              Edit task
            </Button>
            <Button type="button" handleClick={handleDeletion}>
              <DeleteIcon />
              Delete task
            </Button>
          </div>
        </>
      )}
    </li>
  );
}

TaskListItem.propTypes = {
  index: PropTypes.number,
  status: PropTypes.bool,
  children: PropTypes.node,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
  changeStatus: PropTypes.func,
};
