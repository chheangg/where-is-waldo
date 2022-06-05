import '../styles/level.scss';

const Level = ({image}) => {
  return (
    <img className="level-img" alt='level' src={image}></img>
  );
}

export default Level;