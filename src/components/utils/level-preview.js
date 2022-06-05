import { Link } from 'react-router-dom';
const LevelPreview = ({location, name, preview, difficulty}) => {
  const getDifficulty = () => {
    switch (difficulty) {
      case 'ស្រួល':
        return 'easy difficulty';
      case 'មធ្យម':
        return 'medium difficulty';
      case 'ពិបាក':
        return 'hard difficulty';
      default:
        break;
    } 
  }

  return (
    <Link to={location} className='level-box'>
      <img className='preview' src={preview} alt='level'></img>
      <div className='level-name'>
        {name} 
        <span className={getDifficulty()}>{difficulty}</span>
      </div>
    </Link>
  )
}

export default LevelPreview;