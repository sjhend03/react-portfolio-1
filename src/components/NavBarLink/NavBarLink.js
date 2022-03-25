import './NavBarLink.css'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export const NavBarLink = ( { route } ) => {

    const handleClick = (event) => {
        event.target.style.paddingTop = 20
        console.log(event.target)
    }

    return <NavLink to={route.path} className='NavLink' onClick={handleClick}>{route.name}</NavLink>
}
