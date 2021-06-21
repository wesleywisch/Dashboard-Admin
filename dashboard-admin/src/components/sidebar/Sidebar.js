import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';
import Logo from './assests/Logo.png'


export default function Sidebar({ sidebarOpen, closeSidebar }){
    return(
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <div className="sidebarTitle">
                <div className="sidebarImg">
                    <img src={Logo} alt="Logo" />
                    <h1>Dashboard-admin</h1>
                </div>

                <i 
                onClick={ () => {  }}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>

            <div className="SidebarMenu">
                <div className="sidebarLink activeMenuLink">
                    <i className="fa fa-minus-square"></i>
                    <Link to="#">Home</Link>
                </div>

                <h2>ADMIN</h2>

                <div className="sidebarLink">
                    <i className="fa fa-tachometer"></i>
                    <Link to="#">Área administrativa</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-building"></i>
                    <Link to="#">Lojas</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-archive"></i>
                    <Link to="#">Produtos</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-bars"></i>
                    <Link to="#">Categorias</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-utensils"></i>
                    <Link to="#">Pedidos</Link>
                </div>

                <h2>PESSOAS</h2>

                <div className="sidebarLink">
                    <i className="fa fa-male"></i>
                    <Link to="#">Administradores</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-user-circle"></i>
                    <Link to="#">Usuários</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-money-bill-alt"></i>
                    <Link to="#">Pagamentos e custos</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-tasks"></i>
                    <Link to="#">Plataforma</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-file-alt"></i>
                    <Link to="#">Politica e privacidade</Link>
                </div>

                <div className="sidebarLogout">
                    <i className="fa fa-power-off"></i>
                    <Link to="#">Logout</Link>
                </div>

            </div>

        </div>
    )
}