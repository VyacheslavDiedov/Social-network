import React from 'react';
import s from './NavbarMain.module.css';
import {NavLink} from "react-router-dom";


const NavbarMain = () => {
    return (
        <div >
            <div className={s.item}>
                <NavLink to = '/profile' activeClassName = {s.activeLink} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/dialogs' activeClassName = {s.activeLink}>Messeges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/news' activeClassName = {s.activeLink} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/music' activeClassName = {s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/setting' activeClassName = {s.activeLink} >Settings</NavLink>
            </div>
        </div>
    )
}

export default NavbarMain;