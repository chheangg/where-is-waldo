import '../styles/level.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tutorial from './tutorial';
import Timer from './timer.js';
import Marker from './marker';
import Finished from './finished';

const Level = ({image, characters}) => {
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
    const doesCharacterExist = selected.some((character) => target === character);
    if (doesCharacterExist === false) {
      console.log(target, cord);
      setSelected((prevProp) => [...prevProp, target]);
      setMarkerPos((prevProp) => [...prevProp, cord]);
      console.log(selected, markerPos);
    }
  }

  const comparePos = (markerInfo, character) => {
    const ratio = markerInfo.ratio;
    const markerPos = markerInfo.cord;

    const targetX1 = character.posX1 * ratio.ratioX;
    const targetY1 = character.posY1 * ratio.ratioY;
    const targetX2 = character.posX2 * ratio.ratioX;
    const targetY2 = character.posY2 * ratio.ratioY;

    const testX = markerPos.posX + 32 > targetX1 || markerPos.posX - 32 < targetX2;
    const testY = markerPos.posY + 32 > targetY1 || markerPos.posY - 32 < targetY2;

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

  return (
    <>
      <Timer time={timer} />
      {isDoneTutorial ? null : <Tutorial  characters={characters} func={setDoneTutorial} />}
      {finished ? <Finished />  : null}
      <div className='level-img-wrapper'>
        {markerPos.length > 0 ? console.log('true', selected, markerPos) : console.log('false')}
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