import './style.scss'
import estrela from '../../assets/estrela.png'

const AvaliarPraia = ()=> {
    return (
        <section className='AvaliarPraia'>
            <div className='bg-avaliar-praia p-3 d-flex align-items-center'>
                <div className='d-flex justify-content-center align-items-center bg-estrela'>
                    <img src={estrela} alt="Lixeira" />
                </div>
                <div className='ps-3 pt-2'>
                    <h3>
                        Avaliar Praia
                    </h3> 
                    <p className='altura-linha'>
                        Escreva de forma anônima
                    </p>
                </div>
            </div>
            <div>
                <div class="p-3">
                    <textarea class="opniao p-3" id="" rows="3"></textarea>
                </div>
            </div>
            <div className='ps-3'>
                <input type="range" />
            </div>
            <div className='p-3'>
                <button className='p-3 btn-enviar'>
                    Enviar
                </button>
            </div>
        </section>
    )
}

export default AvaliarPraia