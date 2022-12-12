import './contact.styles.css';
import { ContactUs } from '../../components/EmailJs/emailjs';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h1 className='title'>
                    Contato
                </h1>
                <div className="container">
                    <div className="form" autocomplete="off">
                        <ContactUs />
                    </div>
                </div>
            </div>
        </section >
    )
}


