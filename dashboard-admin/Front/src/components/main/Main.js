import hello from '../../assests/hello.png';

import { Chart } from '../charts/Chart';
import './main.css';


export function Main(){
    return(
        <main>
            <div className="mainContainer">

                <div className="mainTitle">
                    <img src={hello} alt="hello" />

                    <div className="mainGreeting">
                        <h1>Olá administrador</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>

                <div className="mainCards">

                    <div className="card">
                        <i className="fa fa-file-alt fa-2x text-lightblue"></i>
                        <div className="cardInner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money-bill-alt fa-2x text-red"></i>
                        <div className="cardInner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$ 2.467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="cardInner">
                            <p className="text-primary-p">Número de produtos</p>
                            <span className="font-bold text-title">670</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="cardInner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>
                </div>



                <div className="charts">
                    <div className="chartsLeft">
                        <div className="chartsLeftTitle">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Rio de Janeiro, Rio de Janeiro, BR</p>
                            </div>
                            <i className="fa fa-dollar-sign"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="chartsRight">
                        <div className="chartsRightTitle">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Rio de Janeiro, Rio de Janeiro, BR</p>
                            </div>
                            <i className="fa fa-chart-area"></i>
                        </div>

                        <div className="chartsRightCards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$250,00</p>
                            </div>

                            <div className="card3">
                                <h1>Custos e hospedagem</h1>
                                <p>R$150,00</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$190,00</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}