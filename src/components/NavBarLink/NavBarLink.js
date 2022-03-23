import './NavBarLink.css'
import { NavLink } from 'react-router-dom'

export const NavBarLink = ( { route } ) => {
    return <NavLink to={route.path} style={({isActive}) => {
        return {
            color: isActive ? "red" : "black"
        }
    }}>{route.name}</NavLink>
}