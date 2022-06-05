import PropTypes from 'prop-types';

const Character = ({image, name}) => {
  return (
    <div className='character-box'>
      <img className='character-icon' src={image} alt={name}></img>
      <p data-testid='characters' className='character-name'>{name}</p>
    </div>
  )
}

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}

export default Character;