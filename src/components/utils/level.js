import '../styles/level.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tutorial from './tutorial';
import Timer from './timer.js';

const Level = ({image, characters}) => {
  const [selected, setSelected] = useState(null);
  const [isDoneTutorial, setIsDoneTutorial] = useState(false);
  const [timer, setTimer] = useState(0);

  const setDoneTutorial = () => {
    setIsDoneTutorial(!isDoneTutorial);
  }

  useEffect(() => {
    if (isDoneTutorial === true) {
    const changeInterval = setInterval(() => {
        setTimer((prevProp) => prevProp + 1);
      }, 1000)
  
    return () => clearInterval(changeInterval);
    }
  }, [isDoneTutorial])

  return (
    <div className='level-img-wrapper'>
      {isDoneTutorial ? null : <Tutorial 
      characters={characters} 
      func={setDoneTutorial} 
      />}
      <Timer time={timer} />
      <img className="level-img" alt='level' src={image}></img>
    </div>
  );
}

Level.propTypes = {
  image: PropTypes.string,
  characters: PropTypes.array,
}

export default Level;

  // const checkCharacter = (event, character) => {
  //   const ratioX = event.target.width / 1920;
  //   const ratioY = event.target.height / 4740;

  //   const targetX = character * ratioX;
  //   const targetY = 4250 * ratioY;

  //   if (event.pageX > targetX && event.pageY > targetY) {
  //     console.log('ji');
  //   }
  //   console.log(ratioX , ratioY)
  // }