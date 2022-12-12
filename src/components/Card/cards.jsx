import './cards.styles.css';
import { BsBank2 } from 'react-icons/bs';
import { RxShadow } from 'react-icons/rx';
import { FaCalculator } from 'react-icons/fa';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { RiGasStationFill } from 'react-icons/ri';
import { GrCodepen } from 'react-icons/gr';

export function Portfolio() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>Portfólio</h1>
                <GrCodepen className='svg' />
                <button><a href="#">Acessar</a></button>
            </div>
        </div>
    )
}

export function Mybucks() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>My Bvcks </h1>
                <BsBank2 className='svg' />
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
                <button><a target={'blank'} href="https://qr-code-javascript.vercel.app"> Acessar</a></button>
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
                <button><a target={'blank'} href="https://box-shadow-generator-peach.vercel.app"> Acessar</a></button>
            </div>
        </div>
    )
}

export function GasApp() {
    return (
        <div className="container-card">
            <div className="card">
                <h1>GasApp</h1>
                <RiGasStationFill className='svg' />
                <button><a href="#">Acessar</a></button>
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
                <button><a target={'blank'} href="https://calculator-two-smoky.vercel.app"> Acessar</a></button>
            </div>
        </div>
    )
}