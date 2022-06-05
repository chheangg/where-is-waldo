import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <h1 className='logo-letter'>ស្វែងរក</h1>
      </Link>
    </nav>
  )
}

export default Nav;