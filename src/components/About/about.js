import './about.scss'
import { useState, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { swipe } from '../../actions';
import Footer from '../Footer/footer'
import { play } from '../../actions';
import Projects from '../Projects/projects'
import  gsap from 'gsap';
import ME from '../About/images/cecilia.JPG'

const About = () => {

    const info = useRef(null);
    const about = useRef(null)
    const more = useRef(null)
    const dispatch = useDispatch()

    const [state, setState] = useState(false)
    const swipeRight = useSelector(state => state.Swipe)
    
    const handleChange = () => {
        setState(!state);
        gsap.fromTo(info.current, {y: 100}, {y: -45, duration: 1})
        gsap.fromTo(more.current, {opacity: 1}, {opacity: 0, transform: 'scale(0)', height: '0'})
    }

    useEffect(() => {
        const isTop = window.pageYOffset === 0;
        const slideRight = { x: '-100vw', display: 'none', duration: 1}
        const slideLeft = {x: 0, display: 'block', duration: 1}

        if (!isTop) {
            slideRight.delay = .5
            slideLeft.delay = .8
        }

        if (swipeRight) {
            window.scrollTo(0,0)
            gsap.fromTo(about.current, {x: origin}, slideRight)

        } else {
            gsap.fromTo(about.current, {x: '-100vw'}, slideLeft)
        }

    }, [swipeRight])

    return (
        <div className='container'>
            <article ref={about}>
                <div className='about'>
                    <div className='about-wrapper'>
                        <div>Hey there &#128075;&#127998;, I'm</div>
                        <h1>Cecilia Atabong</h1>
                        <div>
                            <h2>Software Engineer</h2>
                        </div>
                        <p>I'm a full-stack developer, 
                            whose  motivation lies in the crafting of digital experiences that
                            strive to achieve both functionality and an aesthetic refinement that captivates users.
                        </p> 
                    </div>
                    
                    <div className='image-wrapper'>
                        <svg width="150" height="150" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="42" r="1" fill="#64e3ff"/>
                        </svg>

                        <svg width="150" height="150" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="1" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="11" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="22" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="32" r="1" fill="#64e3ff"/>
                        <circle cx="1" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="11" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="22" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="32" cy="42" r="1" fill="#64e3ff"/>
                        <circle cx="42" cy="42" r="1" fill="#64e3ff"/>
                        </svg>
                        <img src={ME} alt="cecilia"></img>
                    </div>
                </div>

                <div ref={more} className={'know-more'}>
                    <div className='icon'>
                        <ion-icon name="arrow-down"></ion-icon>
                    </div>
                    <button onClick={handleChange}><div>KNOW MORE</div></button>
                </div>

                <div ref={info} className={state ? 'info': 'hide'}>
                    <p>
                        My journey as a developer began with a love for technology and a curiosity for how things work.
                        I recently completed a one-year ALX program in software engineering and trust me it was an exhilarating experience.  The program challenged me to think critically and develop innovative solutions to complex problems, 
                        over the course of the program, I've honed my skills in Express.js, Redis,
                        React.js, Node.js, Flask, Django, JavaScript, Ruby on Rails and more.
                    </p>
                        
                    <p>
                        In my spare time, you can find me exploring new technologies, reading tech blogs or romance novels (don't judge me).
                        It is with great enthusiasm and eagerness that I anticipate the prospect of continuing to develop and enhance my proficiency as a full-stack developer, 
                        while simultaneously making meaningful contributions to the dynamic and constantly evolving realm of web development.
                    </p> 

                    <div onClick={() => {dispatch(swipe()); dispatch(play())}} className='my-projects'>
                        <div><button>PROJECTS</button></div>
                        <div className='icon'><ion-icon name="arrow-forward"></ion-icon></div>
                    </div>
                </div>
                <Footer />
            </article>

            <Projects />

        </div>
     );
}

export default About;