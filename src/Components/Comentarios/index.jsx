import Slider from 'react-slick'

const Comentarios = ()=> {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
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
                            <h3 className='pt-4 usuario-anonimo'>Usuário Anônimo</h3>
                            <p className='altura-linha'>Lorem ipsum dolor sit amet.</p>
                            <p className='altura-linha'>Nota: 10 pontos</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Comentarios