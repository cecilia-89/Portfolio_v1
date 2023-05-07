import './about.scss'
import { useState, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { swipe } from '../../actions';
import Projects from '../Projects/projects'
import  gsap from 'gsap';
import ME from '../About/images/cecilia.png'


const About = () => {

    const info = useRef(null);
    const about = useRef(null)
    const more = useRef(null)
    const dispatch = useDispatch()

    const [state, setState] = useState(false)
    const swipeRight = useSelector(state => state.Swipe)
    
    
    const handleChange = () => {
        setState(!state);
        gsap.fromTo(info.current, {y: 100}, {y: -20, duration: 1})
        gsap.fromTo(more.current, {opacity: 1}, {opacity: 0, transform: 'scale(0)', height: '0'})
    }

    useEffect(() => {

        if (swipeRight) {
            gsap.fromTo(about.current, {x: origin}, { x: '-100vw', display: 'none', duration: 1})
        } else {
            gsap.fromTo(about.current, {x: '-100vw'}, {x: 0, display: 'block', duration: 1})
        }

    }, [swipeRight])

    return (
        
        <div className='container'>
            <article ref={about}>
                <div className='about'>
                    <div className='about-wrapper'>
                        <div>Hey there &#128075;&#127998;, I'm</div>
                        <h1>Cecilia Atabong</h1>
                        <h2>Software Engineer <span>.</span></h2>
                        <p>I'm a proficient full-stack developer, 
                            whose primary source of motivation lies in the crafting of exceptional digital experiences that
                            strive to achieve both functionality and a level of aesthetic refinement that is capable of captivating users.
                        </p> 
                    </div>
                    
                    <div className='image-wrapper'>
                        <img src={ME} alt="cecilia"></img>
                    </div>
                </div>

                <div ref={more} className={'know-more'}>
                    <button onClick={handleChange}>Know more</button>
                </div>

                <div ref={info} className={state ? 'info': 'hide'}>
                    <p>
                        My journey as a developer began with a love for technology and a curiosity for how things work.
                        I recently completed a one-year ALX program in software engineering and trust me it was an exhilarating experience.  The program challenged me to think critically and develop innovative solutions to complex problems, 
                        over the course of the program, I've honed my skills in Express.js, Redis,
                        React.js, Node.js, Flask, Django, JavaScript, Ruby on Rails and more.
                    </p>
                        
                    <p>
                        In my spare time, you can find me exploring new technologies, reading tech blogs or romance novels 🙈 (don't judge me).
                        It is with great enthusiasm and eagerness that I anticipate the prospect of continuing to develop and enhance my proficiency as a full-stack developer, 
                        while simultaneously making meaningful contributions to the dynamic and constantly evolving realm of web development.
                    </p> 

                    <div onClick={() => dispatch(swipe())} className='my-projects'>
                        <div><button>Projects</button></div>
                        <div className='icon'><ion-icon name="arrow-forward"></ion-icon></div>
                    </div>
                    
                </div>
            </article>

            <Projects />
        </div>
     );
}

export default About;