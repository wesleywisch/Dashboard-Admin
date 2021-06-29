import { Link } from 'react-router-dom';

import './header.css';

import AuthButton from '../Button/authButton';


export function Header() {
    return (
        <header>
            <nav>
                <div class="container">
                    <h1>Loja Virtual</h1>

                    <div class="menu">
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/admin">Admin</Link> </li>
                            <AuthButton></AuthButton>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}