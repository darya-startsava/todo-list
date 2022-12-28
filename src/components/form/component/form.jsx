import { useState } from 'react';
import Input from '../../input/input';
import Button from '../../button/button';
import { useLocation, useNavigate } from 'react-router-dom';
import './form.css';

export default function Form(props) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { addNewTask, enterName, label, onEdit } = props;

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (pathname === '/') {
      enterName(inputValue);
      navigate('/todo-list');
    } else if (pathname === '/todo-list') {
      if (label === 'Add new task:') addNewTask(inputValue);
      if (label === 'Edit task:') onEdit(inputValue);
    }
    setInputValue('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input label={label} handleChange={handleChange} value={inputValue} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
