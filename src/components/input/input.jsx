import './input.css';

export default function Input(props) {
  const { label, value, handleChange } = props;
  return (
    <label className="label">
      {label}
      <input className="input" type="text" value={value} onChange={handleChange} />
    </label>
  );
}
