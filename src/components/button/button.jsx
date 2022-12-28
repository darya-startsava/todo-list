import './button.css'

export default function Button(props) {
  const { type, children, handleClick, decoration } = props;
  let buttonClass = 'button';
  if (decoration) {
    buttonClass += decoration;
  }
  return (
    <button className={buttonClass} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
