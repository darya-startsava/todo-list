import { useState } from 'react';
import Input from '../input/input';
import store from '../../store';
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    store.dispatch({ type: 'ENTER_NAME', text: inputValue });
    console.log(store.getState());
    navigate('/todo-list');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input handleChange={handleChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
