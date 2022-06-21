import PropTypes from 'prop-types';
import defaultIcon from '../assets/map-marker-circle.png';
import { useState, useEffect } from 'react';
import '../styles/marker.scss';

const Marker = ({characters, markerInfo, utils}) => {
  const [isRight, setRight] = useState(null);

  useEffect(() => {
    const halfX = ( markerInfo.ratio.ratioX * 1920 ) / 2;
    if (markerInfo.cord.posX > halfX) {
      setRight(false);
    } else {
      setRight(true);
    }
  }, [markerInfo])

  const markerStyle = {
    top: `${markerInfo.cord.posY - 32}px`,
    left: `${markerInfo.cord.posX - 32}px`,
  }

  const characterListener = (event) => {
    const getCharacter = utils.getCharacterPos(event.target.textContent.toLowerCase());
    getCharacter.then((character) => {
      const result = utils.comparePos(markerInfo, character.pos);
      if (result === true) {
        utils.addCharacter(character.name, markerInfo.cord);
      }
    })
  }

  return (
    <div className='target-mark-container' style={markerStyle}>
      { isRight ? 
        <>
          <img alt='cursor' src={defaultIcon} className='target-icon' data-testid='target-marker'>
          </img>
          <div className='target-list right'>
            <ul>
              {characters.map((character) => {
                return <li key={character}><button onClick={characterListener}>{character}</button></li>;
              }
              )}
            </ul>
          </div>
        </>
        :
        <>
          <div className='target-list left'>
            <ul>
              {characters.map((character) => {
                return <li key={character}><button onClick={characterListener}>{character}</button></li>;
              }
              )}
            </ul>
          </div>
          <img alt='cursor' src={defaultIcon} className='target-icon' data-testid='target-marker'>
          </img>
        </>
    }

    </div>
  )
}

Marker.propTypes = {
  characters: PropTypes.array,
  markersInfo: PropTypes.object,
  utils: PropTypes.object,
}

export default Marker;