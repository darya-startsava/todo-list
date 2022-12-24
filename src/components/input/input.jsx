export default function Input(props) {
  const { handleChange } = props;
  return (
    <label>
      Enter your name
      <input type="text" onChange={handleChange} />
    </label>
  );
}