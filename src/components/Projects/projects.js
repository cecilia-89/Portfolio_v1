import './projects.scss'
import omni from './images/omni.png'
import Contact from '../Contact/contact'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'
import chatt from './images/chatt.png'
import inventory from "./images/Inventory-website.png"

const Projects = () => {

    const projects = useRef(null)
    const swipeRight = useSelector(state => state.Swipe)
    useEffect(() => {
       
        if (swipeRight) {
            gsap.fromTo(projects.current, {x: '100vw'}, {x:'0',  display: 'block', duration: 1})
        } else {
            gsap.fromTo(projects.current, {x: '0'}, {x:'100vw', display: 'none', duration: 1})
        }

    }, [swipeRight]) 

    return (
        <section ref={projects} className={"projects"}>
            <div>Projects</div>
            <div>A few projects I've worked on this past year <span>.</span></div>
            <div className="project-wrapper">
                <div>
                    <div className='app-image'>
                        <img src={chatt} alt='movie site for Nigerian movies'/>
                    </div>

                    <div className='description'>
                        <p>Chatt</p>
                        <div>
                            An instant messaging web app where you can chat with friends and loved ones.
                            For our final project in the ALX program, I and my partner decided to use a MERN stack to build
                            a real time messaging app, with socket.io as a third party service.
                        </div>
                        <ul>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>Expess.js</li>
                            <li>Node.js</li>
                            <li>React.Js</li>
                            <li>Redux</li>
                            <li>SCSS</li>
                            <li>Socket.io</li>
                        </ul>
                        <div className='logos'>
                            <a href="https://chatt-zeta.vercel.app/login" target='_blank' rel="noreferrer">
                                <ion-icon name="open-outline"></ion-icon>
                            </a>
                            <a href="https://github.com/Aphrotee/chatt" target='_blank' rel="noreferrer">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='app-image'>
                        <img src={inventory} alt='movie site for Nigerian movies'/>
                    </div>
                    
                    <div className='description'>
                        <p>Inventory app</p>
                        <div>This app is intended for business owners to keep track of their stock levels in real-time, which in avoiding stockouts and overstocking, and allows business owners to make informed decisions about restocking and ordering.</div>
                        <ul>
                            <li>Tailwind CSS</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>GSAP</li>
                            <li>SCSS</li>
                            <li>Heroku</li>
                    
                        </ul>

                        <div className='logos'>
                            <a href="https://github.com/Balogunolalere/inventoryProject/tree/master/Inventory-frontend" target='_blank' rel="noreferrer">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='app-image'>
                        <img src={omni} alt='movie site for Nigerian movies'/>
                    </div>

                    <div className='description'>
                        <p>Omni</p>
                        <div>
                            A movie streaming service for Nigerian Movies. For my ALX foundations project I decided to build a platform
                            dedicated to streaming a few of my favourite Nigerian movies.
                        </div>
                        <ul>
                            <li>Flask</li>
                            <li>mySQL</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python anywhere</li>
        
                        </ul>

                        <div className='logos'>
                            <a href="https://cecilia89.pythonanywhere.com/home" target='_blank' rel="noreferrer">
                                <ion-icon name="open-outline"></ion-icon>
                            </a>
                            <a href="https://github.com/cecilia-89/omni" target='_blank' rel="noreferrer">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            
        </section>
    );
}

export default Projects;