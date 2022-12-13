import './about.styles.css';
import aboutImg from '../../assets/memoji-hi-white.png';
import { FaLinkedin } from "react-icons/fa";


function About() {
    return (
        <section className="about" id="about">
            <div className="wrap">
                <h1 className="title">Sobre Mim</h1>
                <div className="about-content">
                    <div className="column left">
                        <img className='me-logo' src={aboutImg} />
                    </div>
                    <div className="column right">
                        <div className="text-about">
                            Me chamo Caio e sou programador
                        </div>
                        <p>Sempre fui curioso, o que me levou a me tornar um programador! Com 12 anos, criei meu primeiro
                            game, foi extremamente básico seguindo a linha plataforma 2D. Acabei me apaixonando pelo
                            desenvolvimento e isso fez com que eu me interessasse ainda mais na área de Front-end e Mobile.
                        </p>
                        <button className='btn'>
                            <a target={'blank'} href="https://www.linkedin.com/in/caiofreire/">Linkedin <FaLinkedin /></a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;