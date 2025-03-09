import { NavLink } from 'react-router-dom'

function NavBar({ userId }){
    return (
        <nav className='nav'>
            <NavLink exact to='/'>Welcome</NavLink>
            <NavLink to='/parks'>Browse</NavLink>
            <NavLink to={`/user/${userId}`}>MyParks</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    )
}
export default NavBar;