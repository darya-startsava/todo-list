import { useState } from 'react';
import Input from '../../input/input';
import Button from '../../button/button';
import { useLocation, useNavigate } from 'react-router-dom';
import './form.css';
import { labels } from '../../../constants';
import { PropTypes } from 'prop-types';

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
      navigate('/list');
    } else if (pathname === '/list') {
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

Form.propTypes = {
  label: PropTypes.string,
  prevText: PropTypes.string,
  enterName: PropTypes.func,
  onEdit: PropTypes.func,
  addNewTask: PropTypes.func,
};
