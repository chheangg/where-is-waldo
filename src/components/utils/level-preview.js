import { Link } from 'react-router-dom';
import { useState } from 'react';
import LeaderBoard from './leaderboard';
import lbIcon from '../assets/poll.png';
import PropTypes from 'prop-types';

const LevelPreview = ({location, name, preview, difficulty, db}) => {
  const [ showLb, setShowLb ] = useState(false);

  const changeLbStatus = (event) => {
    event.preventDefault();
    setShowLb(!showLb);
  }
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
        <button onClick={changeLbStatus} className='leaderboard-btn'><img src={lbIcon} alt='leaderboard'></img></button>
        { showLb ? <LeaderBoard location={location} db={db} /> : null}
        <span className={getDifficulty()}>{difficulty}</span>
      </div>
    </Link>
  )
}

LevelPreview.propTypes = {
  location: PropTypes.string,
  name: PropTypes.string,
  preview: PropTypes.string,
  difficulty: PropTypes.string,
  db: PropTypes.object,
}

export default LevelPreview;