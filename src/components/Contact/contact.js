import './contact.scss'
import { useRef } from 'react'
import gsap from 'gsap'
import { useForm } from '@formspree/react';

const Contact = () => {
    const contact = useRef(null)
    const form = useRef(null)
    const message = useRef(null)
    const [state, handleSubmit] = useForm("xeqwndln");
   
    if (state.submitting) {
        form.current.reset();
        
        gsap.fromTo(message.current, {opacity: 0, y: 15}, {opacity: 1, y: origin, duration: 1})

        setTimeout(() => {
            gsap.fromTo(message.current, {opacity: 1, y: origin}, {duration: 1, opacity: 0, y:15})
        }, 1500)
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
                        <textarea placeholder='Enter your message' name='message'></textarea>
                    </div>

                    <div><button  type="submit" disabled={state.submitting} >Send</button></div>
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