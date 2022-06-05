import PropTypes from 'prop-types';

const TargetCheck = ({characters}) => {
  return (
    <div className='target-mark-container'>
      <img alt='cursor' className='target-icon' data-testid='target-marker'>
      </img>
      <div className='target-list'>
        <ul>
          {characters.map((character) => <li key={character}>{character}</li>)}
        </ul>
      </div>
    </div>
  )
}

TargetCheck.propTypes = {
  characters: PropTypes.array,
}

export default TargetCheck;