import React from 'react';
import NavbarMain from "./NavberMain/NavbarMain";
import s from "./Navbar.module.css";
import NavbarFriends from "./NavberFriends/NavbarFriends";


const Navbar = (props) => {

    return (
       <nav className={s.nav}>
            <NavbarMain/>
           {/*<NavbarFriends friends={props.stage}/>*/}
       </nav>
    )
}

export default Navbar;