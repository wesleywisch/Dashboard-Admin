import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { Header } from '../components/Header/header';
import { MainPagePrincipal } from '../components/MainPagePrincipal/MainPagePrincipal';


export function Home() {
    const login = useSelector(state => state);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        let { from } = location.state || { from: { pathname: "/" } }
        if (login) {
            history.replace(from)
        }
    }, [login])


    return (
        <div>
            <Header />
            <MainPagePrincipal />
        </div>
    )
}