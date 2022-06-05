import Character from "./character";
import Button from "./Button";
import PropTypes from 'prop-types';
import '../styles/tutorial.scss';

const Tutorial = ({characters, func}) => {
 return (
   <div className='tutorial-wrapper'>
    <div className='tutorial-container'>
      <h1 className='welcoming-text'>សូមស្វាគមន៍!</h1>
      <p className='welcoming-guide'>ចូលស្វែងរកតួអង្គ ឬ វត្ថុខាងក្រោមក្នុងរយៈពេលខ្លីបំផុត</p>
      <div className='character-container'>
        {characters.map((char) => <Character key={char.name} name={char.name} image={char.image} />)}
      </div>
      <Button func={func} text='ចាប់ ផ្តើម' />
    </div>
   </div>
 ) 
}

Tutorial.propTypes = {
  characters: PropTypes.array,
  func: PropTypes.func,
}

export default Tutorial;