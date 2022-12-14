import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_igdbc3n', 'template_qjrjf11', form.current, 'ZECmWx8aHtXePXLEF')
            .then((result) => {
                toast.success('Mensagem enviada :)')
            }, (error) => {
                toast.warn('Ops, parece que tem algo errado :(');
            });
        e.target.reset();

        if (fisrtName == '' || lastName == '') {
            toast.warn('Preencha todos os campos.')
        }
    };



    return (
        <form ref={form} onSubmit={sendEmail} autoComplete='off' >

            <div className="input-group">
                <div className="input-box">
                    <label htmlFor="fisrtName">Nome</label>
                    <input id='fisrtName' type="text" name='name' placeholder='Ex: Caio' autoComplete='nope' required />
                </div>

                <div className="input-box">
                    <label htmlFor="lastName">Sobrenome</label>
                    <input id='lastName' type="text" name='lastname' placeholder='Ex: Freire' autoComplete='nope' required />
                </div>

                <div className="input-box">
                    <label htmlFor="email">E-mail</label>
                    <input id='email' type="email" name='email' placeholder='Ex: seu@email.com' autoComplete='nope' required />
                </div>

                <div className="input-box">
                    <label htmlFor="number">WhatsApp</label>
                    <input id='number' type="tel" name='phone' placeholder='Ex: (xx) xxxxx-xxxx' autoComplete='false' required />
                </div>

            </div>
            <div className="input-message">
                <div className="input-box-m">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id='message' placeholder='Digite sua mensagem...' name='message' />
                </div>
            </div>

            <div className="input-button">
                <div className="input-box-b">
                    <input className='btn' type='submit' value='Enviar' />
                </div>
            </div>

        </form>
    );
};