import React from "react";

import acessoNegado from '../../assests/acessoNegado.png';

import './acesso.css';

export default function AcessoNegado(props){

    return(
        <div className="page">
            <div className="imagem">
                <img src={acessoNegado} alt="Acesso negado" />
            </div>
            <div className="acesso">
                <h2>Acesso Negado!</h2>
                <h3>Por favor, faça o login!</h3>
            </div>
        </div>
    )

}