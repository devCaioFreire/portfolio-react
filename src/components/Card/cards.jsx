import './cards.styles.css';
import { BsBank2 } from 'react-icons/bs'
import { RxShadow } from 'react-icons/rx'
import { FaCalculator } from 'react-icons/fa'
import { MdOutlineQrCodeScanner } from 'react-icons/md'

export function Mybucks() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>My Bvcks </h1>
                <BsBank2 className='svg' />
                <p>Aplicativo para controlar despesas pessoaias</p>
                <button><a href="#"> Acessar</a></button>
            </div>
        </div>
    )
}

export function BoxShadow() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>Box Shadow</h1>
                <RxShadow className='svg' />
                <p>Aplicação WEB para facilitar a contrução de box-shadow</p>
                <button><a href="#"> Acessar</a></button>
            </div>
        </div>
    )
}

export function Calculator() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>Calculator</h1>
                <FaCalculator className='svg' />
                <p>Calculadora criada com HTML, CSS e JavaScript puro</p>
                <button><a href="#"> Acessar</a></button>
            </div>
        </div>
    )
}

export function QRCode() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>QR-Code</h1>
                <MdOutlineQrCodeScanner className='svg' />
                <p>QR-Code criado com JavaScript e utilizando API</p>
                <button><a href="#"> Acessar</a></button>
            </div>
        </div>
    )
}


