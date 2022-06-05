import PropTypes from 'prop-types';

const Timer = ({time}) => {
  function getTime() {
    let hours = 0, minutes = 0, seconds = 0;
    if ( time >= 3600) {
      hours = Math.floor(time / 3600);
      minutes = time - 3600 * hours;
      if (minutes >= 60) {
        minutes = Math.floor(minutes / 60);
        seconds = time - hours * 3600 - minutes * 60;
      } else {
        minutes = 0;
      }
    } else {
      if ( time >= 60) {
        hours = 0;
        minutes = Math.floor(time / 60);
        console.log(minutes);
        seconds = time - minutes * 60;
      } else {
        seconds = time;
      }
    }

    return `${hours}:${minutes}:${seconds}`
  }
  return (
    <div className='timer'>
      {getTime()}
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.number,
}

export default Timer;


