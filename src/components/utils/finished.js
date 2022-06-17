import { Link } from 'react-router-dom';
import Timer from './timer';

const Finished = ({time}) => {
  return (
    <div className='finished-wrapper'>
      <div className='finished-container'>
        <Timer time={time} />
        <p>ជោគជ័យ! ម៉ោងរបស់អ្នកត្រូវបានកត់ត្រាចូលតារាងពន្ទុរបស់យើង សូមអរគុណសម្រាប់ការលេង!</p>
        <Link to='/'>បន្ត</Link>
      </div>
    </div>
  )
}

export default Finished;