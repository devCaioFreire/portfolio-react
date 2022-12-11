import './github.styles.css';
import gitImg from '../../assets/memoji-stop-white.png'
import { FaGithub } from "react-icons/fa";

function GitHub() {
    return (
        <section className='github' id='github'>
            <div className="wrap">
                <h1 className='title'>GitHub</h1>
                <div className="github-content">
                    <div className="column left">
                        <img src={gitImg} alt={gitImg} />
                    </div>
                    <div className="column right">
                        <div className="text-github">
                            Meus Repositórios
                        </div>
                        <p>
                            Não adianta criar projetos e não mostrar, não é mesmo?! Aqui estão alguns projetos que desenvolvi e publiquei no GitHub. Ao clicar no projeto você será redirecionado para o repositório no GitHub.
                        </p>
                        <button className='btn'>
                            <a target={'blank'} href="https://github.com/devCaioFreire">GitHub <FaGithub /></a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GitHub;