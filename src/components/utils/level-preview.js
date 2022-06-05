import { Link } from 'react-router-dom';
const LevelPreview = ({location, name, preview, difficulty}) => {
  return (
    <Link to={location} className='level-box'>
      <img className='preview' src={preview} alt='level'></img>
      <div className='level-name'>
        {name} 
        <span className='difficulty'>{difficulty}</span>
      </div>
    </Link>
  )
}

export default LevelPreview;