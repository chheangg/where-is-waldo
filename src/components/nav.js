import { Link } from 'react-router-dom';

const Nav = ({children}) => {
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <h1 className='logo-letter'>ស្វែងរក</h1>
      </Link>
      {children}
    </nav>
  )
}

export default Nav;