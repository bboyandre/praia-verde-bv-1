import './style.scss'
import logo from '../../assets/brasao-prefeitura-municipal-de-boa-vista-rr 1.png'

const Start = ()=> {
    return (
        <div className="Start">
            <a href="/praias" className='text-decoration-none'>
                <header className="Start-header d-flex justify-content-center align-items-center flex-column">
                    <img src={logo}></img>
                    <p>PRAIA VERDE BV</p>
                </header>
            </a>
        </div>
  )
}

export default Start