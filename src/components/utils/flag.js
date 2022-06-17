import PropTypes from 'prop-types'
import flagIcon from '../assets/flag.png';

const Flag = ({cord}) => {
  const flagStyle = {
    position: 'absolute',
    zIndex: 3,
    top: `${cord.posY - 64}px`,
    left: `${cord.posX}px`,
  }

  return (
    <img src={flagIcon} style={flagStyle} className='flag-icon' alt='flagged'></img>
  )
}

Flag.propTypes = {
  cord: PropTypes.object,
}

export default Flag;