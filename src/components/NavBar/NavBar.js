import { NavBarLink } from '../NavBarLink/NavBarLink'
import './NavBar.css'

export const NavBar = ( { routes } ) => {
    return (
        <nav>
            {routes.map((route, index) => <NavBarLink key={index} route={route}/>)}
        </nav>
    )
}