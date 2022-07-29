import './style.scss'
import seta from '../../assets/arrow-left.png'
import lixeira from '../../assets/lixeira.png'
import usuario from '../../assets/usuario.png'

import { GrExpand } from 'react-icons/gr'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import AvaliarPraia from '../../Components/AvaliarPraia'

const Praia = ()=> {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="Praia">
            <div className='container'>
                <header className="d-flex justify-content-between align-items-center Praias-header">
                    <a href='/praias'>
                        <img src={seta} alt="Seta Voltar"/>
                    </a>
                    <div>
                        <p className='pt-3'>PRAIA</p>
                    </div>
                    <div>
                        <div className="Praias-circle"></div>
                    </div>
                </header>
                <section className="Praia-lixeiras p-3 mt-3 mb-3">
                    {/* <a href="/mapa" className='text-decoration-none'> */}
                    <a href="https://www.google.com.br/maps/search/praia+boa+vista+roraima/@2.8656117,-60.8849733,11.44z" className='text-decoration-none'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-center align-items-center lixeira'>
                                <img src={lixeira} alt="Lixeira" />
                            </div>
                            <div className='pt-3'>
                                <h4 className='lixeiras-proximas'>
                                    Lixeiras próximas de você
                                </h4>
                                <p className='toque-no-mapa'>
                                    Toque para ver o mapa
                                </p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <GrExpand />
                                </div>
                            </div>
                        </div>
                    </a>
                </section>
                    <section className="Praia-lixeiras">
                        <p>Níveis de poluição</p>
                    </section>
                    <section className='pb-5'>
                        <h2 className='pt-3 pb-3'>
                            Avaliações
                        </h2>
                        <Slider {...settings}>
                            <div className='ps-2 pe-2'>
                                <div className='col-12 Praia-lixeiras pt-2 ps-3 pe-3 pb-3 d-flex align-items-center'>
                                    <div className='d-flex justify-content-center align-items-center lixeira'>
                                        <img src={usuario} alt="Lixeira" />
                                    </div>
                                    <div className='ms-3'>
                                        <h3 className='pt-4 usuario-anonimo'>Usuário Anônimo</h3>
                                        <p className='altura-linha'>Lorem ipsum dolor sit amet.</p>
                                        <p className='altura-linha'>Nota: 10 pontos</p>
                                    </div>
                                </div>
                            </div>
                            <div className='ps-2 pe-2'>
                                <div className='col-12 Praia-lixeiras pt-2 ps-3 pe-3 pb-3 d-flex align-items-center'>
                                    <div className='d-flex justify-content-center align-items-center lixeira'>
                                        <img src={usuario} alt="Lixeira" />
                                    </div>
                                    <div className='ms-3'>
                                        <h3 className='pt-4'>Usuário Anônimo</h3>
                                        <p className='altura-linha'>Lorem ipsum dolor sit amet.</p>
                                        <p className='altura-linha'>Nota: 10 pontos</p>
                                    </div>
                                </div>
                            </div>
                            <div className='ps-2 pe-2'>
                                <div className='col-12 Praia-lixeiras pt-2 ps-3 pe-3 pb-3 d-flex align-items-center'>
                                    <div className='d-flex justify-content-center align-items-center lixeira'>
                                        <img src={usuario} alt="Lixeira" />
                                    </div>
                                    <div className='ms-3'>
                                        <h3 className='pt-4 usuario-anonimo'>Usuário Anônimo</h3>
                                        <p className='altura-linha'>Lorem ipsum dolor sit amet.</p>
                                        <p className='altura-linha'>Nota: 10 pontos</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </section>
                    <AvaliarPraia />
            </div>
        </div>
  )
}

export default Praia