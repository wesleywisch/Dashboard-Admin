import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

import AuthButton from '../components/Button/authButton';

export function Home(){
    const login = useSelector(state=>state);

    const history = useHistory();
    const location = useLocation();

    useEffect( () =>{
        let { from } = location.state || { from: { pathname: "/" } }
        if(login){
            history.replace(from)
        }
    }, [login])


    return(
        <nav className="nav">
            <h1>Wesley</h1>
            <div>
                <ul className="nav-links">
                    <AuthButton></AuthButton>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/admin">Admin</Link> </li> 
                    {/* sempre usamos o Link e não o (a) mesmo do html para evitar que a página toda seja recaregada */}
                </ul>
            </div>
        </nav>
    )
}