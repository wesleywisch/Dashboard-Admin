import { Link } from 'react-router-dom';

import avatar from '../../assests/avatarFoto.png';

import './navbar.css';


export function Navbar({ sidebarOpen, openSidebar }){
    return(
        <nav className="navbar">
            <div className="navIcon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbarLeft">
                <Link className="linkLeft" to="#">Produtos</Link>
                <Link className="linkLeft" to="#">Usuários</Link>
                <Link to="#" className=" linkLeft activeLink">Admin</Link>
            </div>

            <div className="navbarRight">
                <Link className="linkRight" to="#">
                    <i className="fa fa-search"></i>
                </Link>

                <Link className="linkRight" to="#">
                    <i className="fa fa-clock"></i>
                </Link>

                <Link className="linkRight" to="#">
                    <img className="avatar" width="40" src={avatar} alt="Avatar" />
                </Link>
            </div>

        </nav>
    )
}