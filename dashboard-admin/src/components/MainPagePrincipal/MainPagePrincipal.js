import backgroundImg from '../../assests/lojaVirtual.png';
import entregador from '../../assests/entrega.png';
import pagamento from '../../assests/pagamento.png';
import seguranca from '../../assests/seguranca.png';
import luva from '../../assests/luva.jpg';
import bola from '../../assests/bola.jpg';
import bombinha from '../../assests/bombinha.jpg';
import chuteira from '../../assests/chuteira.jpg';


import './style.css';

export function MainPagePrincipal() {
    return (
        <div className="Principal">
            <div className="Bg-Img">
                <img src={backgroundImg} alt="Background imagem" />
            </div>

            <div className="FormPagamentos">

                <div className="entrega">
                    <img src={entregador} alt="Entregador" />
                    <div className="text">
                        <h2>ENTREGA</h2>
                        <p>Enviamos para todo o Brasil.</p>
                    </div>
                </div>

                <div className="pagamento">
                    <img src={pagamento} alt="Pagemento" />
                    <div className="text">
                        <h2>PAGAMENTO</h2>
                        <p>Pague em até 12x no cartão de crédito sem juros!</p>
                    </div>
                </div>

                <div className="seguranca">
                    <img src={seguranca} alt="Segurança" />
                    <div className="text">
                        <h2>SEGURANÇA</h2>
                        <p>Compra criptografada 100% segura.</p>
                    </div>
                </div>

            </div>

            <div className="divOpçoes">
                <div className="opçoes">
                    <p className="active">ACESSÓRIOS</p>
                    <p>BOLAS</p>
                    <p>CHUTEIRAS</p>
                    <p>LUVAS</p>
                </div>
            </div>

            <div className="navOpçoes">

                <div className="acessorios">
                    <div className="desconto">-56%</div>
                    <img src={bombinha} alt="Bombinha de ar" />
                    <button>+</button>
                </div>

                <div className="bolas">
                    <div className="desconto">-34%</div>
                    <img src={bola} alt="Bola de dutebol" />
                    <button>+</button>
                </div>

                <div className="chuteiras">
                    <div className="desconto">-16%</div>
                    <img src={chuteira} alt="chuteiras" />
                    <button>+</button>
                </div>

                <div className="luvas">
                    <div className="desconto">-76%</div>
                    <img src={luva} alt="luvas de goleiro" />
                    <button>+</button>
                </div>
                
            </div>
        </div>
    )
}