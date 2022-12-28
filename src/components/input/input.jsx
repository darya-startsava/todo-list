export default function Input(props) {
  const { label, value, handleChange } = props;
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}
