import yes from '../assets/accept.png';
import no from '../assets/delete-button.png';

const ProgressBox = ({character, found}) => {
  return (
    <div className='character-box'>
      <img className='character-img' src={character.image} alt='character'></img>
      <div className='character-name'>{character.name}</div>
      <div className='status'>{found === true ? 
          <img src={yes} alt='Founded'></img> 
          : 
          <img src={no} alt='Not founded'></img>
        }</div>
    </div>
  )
}

export default ProgressBox;