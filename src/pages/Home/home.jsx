import './home.styles.css';
import imgBackground from '../../assets/astronaut1.jpg';

function Home() {
    return (
        <div className="home" id='home' style={{ backgroundImage: `url(${imgBackground})` }}>
            <div className="wrap">
                <div className="home-container">
                    <div className='text-1'>
                        Olá, me chamo <span>Caio Freire</span>
                    </div>
                    <div className='text-2'>
                        <span>Sou desenvolvedor</span> Front-End
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
