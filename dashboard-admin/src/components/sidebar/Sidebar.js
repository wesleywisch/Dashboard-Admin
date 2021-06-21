import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';
import Logo from './assests/avatarFoto.png'


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

            <div className="sidebarMenu">
                <div className="sidebarLink activeMenuLink">
                    <i className="fa fa-minus-square"></i>
                    <Link className="Link" to="#">Home</Link>
                </div>

                <h2>ADMIN</h2>

                <div className="sidebarLink">
                    <i className="fa fa-tachometer"></i>
                    <Link className="Link" to="#">Área administrativa</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-building"></i>
                    <Link className="Link" to="#">Lojas</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-archive"></i>
                    <Link className="Link" to="#">Produtos</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-bars"></i>
                    <Link className="Link" to="#">Categorias</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-utensils"></i>
                    <Link className="Link" to="#">Pedidos</Link>
                </div>

                <h2>PESSOAS</h2>

                <div className="sidebarLink">
                    <i className="fa fa-male"></i>
                    <Link className="Link" to="#">Administradores</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-user-circle"></i>
                    <Link className="Link" to="#">Usuários</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-money-bill-alt"></i>
                    <Link className="Link" to="#">Pagamentos e custos</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-tasks"></i>
                    <Link className="Link" to="#">Plataforma</Link>
                </div>

                <div className="sidebarLink">
                    <i className="fa fa-file-alt"></i>
                    <Link className="Link" to="#">Politica e privacidade</Link>
                </div>

                <div className="sidebarLogout">
                    <i className="fa fa-power-off"></i>
                    <Link className="Link" to="#">Logout</Link>
                </div>

            </div>

        </div>
    )
}