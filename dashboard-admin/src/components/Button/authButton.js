import React from 'react';

import { loginAction, logoutAction } from '../../contexts/loginAction';
import { useSelector, useDispatch  } from 'react-redux';

import './button.css';


export default function Auth(){

    const login = useSelector(state => state);
    const dispatch = useDispatch();


    return(login ?
        <button onClick={ () => { dispatch(logoutAction()) }}>Logout</button> 
        :
        <button onClick={ () => { dispatch(loginAction()) }}>Login</button>
    )
}