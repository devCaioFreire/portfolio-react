import './projects.styles.css';
import codeImg from '../../assets/memoji-mac.png'
import { Slider, Slide } from '../../components/Slider/';

import { BoxShadow, Calculator, Mybucks, QRCode } from '../../components/Card/cards';

function Projects() {

    const settings = {
        spaceBetween: 10,
        slidesPerView: 2,
        navigation: true,
        pagination: {
            type: 'progressbar',
        },
    }

    return (
        <section className='projects' id='projects'>
            <div className="wrap">
                <div className="title">
                    Projetos
                </div>
                <div className="projects-content">
                    <div className="column left">
                        <img src={codeImg} alt={codeImg} width={''} />
                    </div>
                    <div className="column right">
                        <div className="text-title">
                            Projetos WEB e Mobile
                        </div>
                        <p>Como desenvolvedor front-end, grande parte dos meus projetos eu utilizo React Js e React Native</p>
                    </div>
                </div>

                <Slider settings={settings}>
                    <Slide>
                        <Mybucks />
                    </Slide>
                    <Slide>
                        <BoxShadow />
                    </Slide>
                    <Slide>
                        <Calculator />
                    </Slide>
                    <Slide>
                        <QRCode />
                    </Slide>
                </Slider>

            </div>
        </section>
    )
}

export default Projects;