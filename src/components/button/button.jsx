export default function Button(props) {
  const { type, children, handleClick } = props;
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
