import './contact.scss'
import { useRef } from 'react'
import gsap from 'gsap'
import { useForm } from '@formspree/react';
const send = new Audio('mixkit-arcade-game-jump-coin-216.wav')
send.volume = 0.5

const Contact = () => {
    const contact = useRef(null)
    const form = useRef(null)
    const message = useRef(null)
    const [state, handleSubmit] = useForm("xeqwndln");
   
    if (state.submitting) {
        form.current.reset();
        
        gsap.fromTo(message.current, {display: 'none', opacity: 0, y: 15}, {display: 'block', opacity: 1, y: origin, duration: 1})

        setTimeout(() => {
            gsap.fromTo(message.current, {opacity: 1, y: origin, display: 'block'}, {duration: 1, opacity: 0, y:15, display: 'none'})
        }, 1500)
    }

    const play = () => {
        if (state.submitting) send.play()
    }

    return (
        <section ref={contact} className="contact-wrapper">
            <div>
                <span>Send a quick message</span>
                <p>Always ready to take new projects and 
                   work on new collaborations</p>
            </div>

            <div className='form'>
                <form onSubmit={handleSubmit} ref={form}>
                    <div className='inputs'>
                        <div>
                            <ion-icon name="person"></ion-icon>
                            <input placeholder='Name' name='name' required></input>
                        </div>
                        <div>
                            <ion-icon name="mail"></ion-icon>
                            <input placeholder='Email' name="email" required></input>
                        </div>
                    </div>

                    <div>
                        <textarea placeholder='Enter your message' name='message' required></textarea>
                    </div>

                    <div><button type="submit" disabled={state.submitting} onClick={play()}>Send</button></div>
                </form>
            </div>

            <div ref={message}>
                <div>
                    <span>Message sent 🤗</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;