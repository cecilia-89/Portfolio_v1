import './projects.scss'
import omni from './images/omni.png'
import chatt from './images/chatt.png'
import inventory from "./images/Inventory-website.png"

const Projects = () => {
    return (
        <section className="projects">
            <div>Projects</div>
            <div className="project-wrapper">
                <div>
                    <div>
                        <img src={chatt} alt='movie site for Nigerian movies'/>
                    </div>
                    <div className='logos'>
                     <ion-icon name="open-outline"></ion-icon>
                     <ion-icon name="logo-github"></ion-icon>
                    </div>

                    <div>
                        <h4>Chatt</h4>
                        <span>An instant messaging web app where you can chat with friends and loved ones.
                        For our final project in the ALX program, I and my partner decided to use a MERN stack to build
                        a real time messaging app. We chose the MERN stack because we wanted to use the technologies we learnt 
                        during the course of the program. However, we had to incoporate a third party service in other to make the 
                        database real time.</span>
                        <ul>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>Expess.js</li>
                            <li>Node.js</li>
                            <li>React.Js</li>
                            <li>React-redux</li>
                            <li>SCSS</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={inventory} alt='movie site for Nigerian movies'/>
                    </div>

                    <div className='logos'>
                     <ion-icon name="open-outline"></ion-icon>
                     <ion-icon name="logo-github"></ion-icon>
                    </div>

                    <div>
                        <h4> Inventory app</h4>
                        <span>This app is intended for business owners to keep track of their stock levels in real-time, which in avoiding stockouts and overstocking, and allows business owners to make informed decisions about restocking and ordering.</span>
                        <ul>
                            <li>Tailwind Css</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>GSAP</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={omni} alt='movie site for Nigerian movies'/>
                    </div>

                    <div className='logos'>
                     <ion-icon name="open-outline"></ion-icon>
                     <ion-icon name="logo-github"></ion-icon>
                    </div>

                    <div>
                        <h4> OMNI</h4>
                        <span>A movie streaming service for Nigerian Movies.
                            I dedicated a platform for streaming a few of my favourite Nigerian movies.

                        </span>
                        <ul>
                            <li>Flask</li>
                            <li>mySQL</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>python anywhere</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;