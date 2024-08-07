import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

function NavBar() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logOut = ()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div className='navigation-bar'>
        <ul className='nav-ul'>
            <li><Link to={'/'}>Products</Link></li>
            <li><Link to={'/add'}>Add Products</Link></li>
            <li><Link to={'/update'}>Update Products</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
            {/* <li>{auth? <Link onClick={logOut} to={'/signup'}>Logout</Link>: <Link to={'/signup'}>Sign Up</Link>}</li>
            <li><Link to={'/login'}>Login</Link></li> */}
            {
            auth ?(<li><Link onClick={logOut} to={'/signup'}>logout</Link></li>
            ):(<>
             <li><Link to={'/signup'}>Sign Up</Link></li>
             <li><Link to={'/login'}>Login</Link></li>
             </>
            )}
        </ul>
    </div>
  )
}

export default NavBar