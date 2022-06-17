import '../styles/level.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tutorial from './tutorial';
import Timer from './timer.js';
import Marker from './marker';
import Flag from './flag';

import Finished from './finished';
import Progress from './progress';

const Level = ({image, characters}) => {
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState([]);
  const [testMarker, setTestMarker] = useState(null);
  const [markerPos, setMarkerPos] = useState([]);
  const [isDoneTutorial, setIsDoneTutorial] = useState(false);
  const [timer, setTimer] = useState(0);

  const setDoneTutorial = () => {
    setIsDoneTutorial(!isDoneTutorial);
  }

  const addMarker = (event) => {
    const ratio = {
      ratioX: event.target.width / event.target.naturalWidth,
      ratioY: event.target.height / event.target.naturalHeight,
    }
    const cord = {
      posX: event.pageX,
      posY: event.pageY - 70,
    }
    setTestMarker({cord: cord, ratio: ratio});
  }

  const addCharacter = (target, cord) => {
    const doesCharacterExist = selected.some((character) => target.toLowerCase() === character.toLowerCase());
    if (doesCharacterExist === false) {
      setSelected((prevProp) => [...prevProp, target]);
      setMarkerPos((prevProp) => [...prevProp, cord]);
    }
  }

  const comparePos = (markerInfo, character) => {
    const ratio = markerInfo.ratio;
    const markerPos = markerInfo.cord;

    const targetX1 = character.posX1 * ratio.ratioX;
    const targetY1 = character.posY1 * ratio.ratioY;
    const targetX2 = character.posX2 * ratio.ratioX;
    const targetY2 = character.posY2 * ratio.ratioY;

    const testX = markerPos.posX + 16 > targetX1 && markerPos.posX - 16 < targetX2;
    const testY = markerPos.posY + 16 > targetY1 && markerPos.posY - 16 < targetY2;

    if ( testX && testY ) {
        return true;
    }
    return false;
  }

  useEffect(() => {
    if (selected.length === characters.length) {
      setFinished(true);
    }
  }, [selected]);

  useEffect(() => {
    if (isDoneTutorial === true) {
    const changeInterval = setInterval(() => {
        setTimer((prevProp) => prevProp + 1);
      }, 1000)
  
    return () => clearInterval(changeInterval);
    }
  }, [isDoneTutorial])

  useEffect(() => {
    setTime(timer);
  }, [finished])
  return (
    <>
      <div className='utility-wrapper'>
        <Timer time={timer} />
        <Progress characters={characters} selected={selected} />
      </div>
      {isDoneTutorial ? null : <Tutorial  characters={characters} func={setDoneTutorial} />}
      {finished ? <Finished time={time} />  : null}
      <div className='level-img-wrapper'>
        {markerPos.length > 0 ? markerPos.map((cord) => <Flag key={`${cord.posX}-${cord.posY}`} cord={cord} />) : null }
        {testMarker ? <Marker utils={{comparePos, addCharacter}} markerInfo={testMarker} characters={characters.map((character) => character.name)} /> : null} 
        <img onClick={(event) => { addMarker(event)}} className="level-img" alt='level' src={image}></img>
      </div>
    </>
  );
}

Level.propTypes = {
  image: PropTypes.string,
  characters: PropTypes.array,
}

export default Level;