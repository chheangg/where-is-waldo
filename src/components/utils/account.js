import { GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const Account = ({auth, getName}) => {
  const [ isSignedIn, setIsSignedIn ] = useState(false);
  const [ accountInfo, setAccountInfo ] = useState(null);

  const onSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  const onSignOut = () => {
    signOut(auth);
  }

  const trackUser = (user) => {
    if (user) {
      setIsSignedIn(true);
      setAccountInfo({
        name: user.displayName,
        img: user.photoURL,
      })
      getName(user.displayName);
    } else {
      setIsSignedIn(false);
      setAccountInfo(null);
      getName(null);
    }
  }
  const initFirebaseAuth = () => {
    onAuthStateChanged(auth, trackUser)
  }

  return (
    <div className='account-container'>
      {initFirebaseAuth()}
      {isSignedIn ? 
      <>
        <img className='profile-img' src={accountInfo.img} alt='profile pic'></img>
        <div className='profile-name'>{accountInfo.name}</div>
        <button onClick={onSignOut} className='sign-out-container'>Sign Out</button>
      </>
      :
      <button onClick={onSignIn} className='sign-in-container'>
        Sign in
      </button>
      }
    </div>
  )
}

Account.propTypes = {
  auth: PropTypes.object,
}

export default Account;