import './contact.scss'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const Contact = (props) => {
    const contact = useRef(null)
    useEffect(() => {
       
        if (props.contact) {
            gsap.fromTo(contact.current, {y: 1000}, {y: origin, duration: 1})
        }

    }, [props.contact]) 
    return (
        <section ref={contact} className="contact-wrapper">
            <div>
                <span>Send a quick message</span>
                <p>Always ready to take new projects and 
                   work on new collaborations</p>
            </div>

            <div className='form'>
                <form>
                    <div className='inputs'>
                        <div>
                            <ion-icon name="person"></ion-icon>
                            <input placeholder='Name'></input>
                        </div>
                        <div>
                            <ion-icon name="mail"></ion-icon>
                            <input placeholder='Email'></input>
                        </div>
                    </div>

                    <div>
                        <textarea placeholder='Enter your message'></textarea>
                    </div>

                    <div><button>Send</button></div>
                </form>
            </div>

        </section>
    );
}

export default Contact;