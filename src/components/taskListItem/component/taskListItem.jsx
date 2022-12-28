import { useState } from 'react';
import Button from '../../button/button';
import Form from '../../form/container/form';

export default function TaskListItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { children, index, editTask, deleteTask } = props;

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
  
  return (
    <li>
      {isEditing ? (
        <Form label={'Edit task'} onEdit={handleSubmitEditing} />
      ) : (
        <>
          <p>{children}</p>
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
