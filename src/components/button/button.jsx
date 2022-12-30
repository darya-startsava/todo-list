import './button.css';
import { PropTypes } from 'prop-types';

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

Button.propTypes = {
  type: PropTypes.string,
  decoration: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};
