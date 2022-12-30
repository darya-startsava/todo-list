import './input.css';
import { PropTypes } from 'prop-types';

export default function Input(props) {
  const { label, value, handleChange } = props;
  return (
    <label className="label">
      {label}
      <input className="input" type="text" value={value} onChange={handleChange} />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
