import { useState } from 'react';
import Input from '../../input/input';
import Button from '../../button/button';
import { useLocation, useNavigate } from 'react-router-dom';
import './form.css';
import { labels } from '../../../constants';

export default function Form(props) {
  const { addNewTask, enterName, label, onEdit, prevText } = props;
  const [inputValue, setInputValue] = useState(prevText);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;


  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (pathname === '/') {
      enterName(inputValue);
      navigate('/todo-list');
    } else if (pathname === '/todo-list') {
      if (label === labels.addNewTask) addNewTask(inputValue);
      if (label === labels.editTask) onEdit(inputValue);
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
