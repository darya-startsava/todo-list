import { useState } from 'react';
import Button from '../../button/button';
import Form from '../../form/container/form';
import './taskListItem.css';

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
    <li>
      {isEditing ? (
        <Form label={'Edit task'} onEdit={handleSubmitEditing} />
      ) : (
        <>
          <p className={status ? '' : 'inactive'} onClick={changeTaskStatus}>
            {children}
          </p>
          <Button type="button" handleClick={handleEditing}>
            Edit
          </Button>
          <Button type="button" handleClick={handleDeletion}>
            Delete
          </Button>
        </>
      )}
    </li>
  );
}