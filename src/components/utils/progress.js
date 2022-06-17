import { useState } from "react";
import progressIcon from '../assets/progress-alert.png';
import ProgressBox from "./progress-box";

const Progress = ({characters, selected}) => {
  const [ isClicked, setIsClicked ] = useState(false);

  const setClickStatus = () => {
    setIsClicked(!isClicked);
  }

  const isSelect = (character) => {
    return selected.some((obj) => {
      return character.name.toLowerCase() === obj.toLowerCase();
    })
  }
  return (
    <>
      <button onClick={setClickStatus} className='progress-btn'>
        <img src={progressIcon} alt='progress'></img>
      </button>
      { isClicked ? 
        <div className='objective-container'>
          {characters.map((character) => {
            if (!isSelect(character)) {
              return <ProgressBox key={character.name} character={character} found={false} />
            }
            return <ProgressBox key={character.name} character={character} found={true} />
          })}
        </div>
        :
        null
      }
    </>
  )
}

export default Progress;