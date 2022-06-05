import '../styles/level.scss';

const Level = ({image}) => {
  return (
    <div className='level-img-wrapper'>
      <img className="level-img" alt='level' src={image}></img>
    </div>
  );
}

export default Level;