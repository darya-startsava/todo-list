import { useState } from 'react';
import Button from '../../button/button';
import Form from '../../form/container/form';
import './taskListItem.css';
import { labels } from '../../../constants';

export default function TaskListItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { children, index, status, editTask, deleteTask, changeStatus} = props;

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
              Edit task
            </Button>
            <Button type="button" handleClick={handleDeletion}>
              Delete task
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
