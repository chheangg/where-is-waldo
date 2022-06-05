import PropTypes from 'prop-types';

const Button = ({text, func}) => {
  return (
    <button onClick={() => {
      func()
    }} className='btn'>{text} </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
}

export default Button;