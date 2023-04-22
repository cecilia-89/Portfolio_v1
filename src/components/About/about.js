import './about.scss'
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import { useEffect } from 'react';
import IMG from '../About/images/IMG_8563.JPG'
import doodle from '../About/images/doodles.svg'
import dots from '../About/images/Dots.svg'

const About = ({visible}) => {

    useEffect(() => {
        if (visible) {
            document.body.style.overflowY = 'unset'
        } else {document.body.style.overflowY = 'hidden'}
    })
    return (
        <div className={visible ? 'container' : 'blur'}>
            <article>
                <div className='about'>
                    <div className='about-wrapper'>
                        <h1>Cecilia Atabong</h1>
                        <h2>Software Engineer</h2>
                        <p>I'm a full-stack developer with a passion that lies in creating extraordinary digital experiences that are not only functional 
                            but also aesthetically pleasing.
                        </p> 
                            {/* implementing great user experiences in an intuitive manner */}
                    </div>
                    <div className='image-wrapper'>
                        <img src={IMG} alt="cecilia"></img>
                    </div>
                </div>

                <div>
                    <div className='journey'>
                        My journey as a developer began with a love for technology and a curiosity for how things work.
                        I recently completed a one-year ALX program in software engineering and trust me it was an exhilarating experience.  The program challenged me to think critically and develop innovative solutions to complex problems, 
                        over the course of the program, I've honed my skills in Express.js, Redis,
                        React.js, Node.js, Flask, Django, JavaScript, Ruby on Rails and more.
                    </div>
                        
                    <p>
                        In my spare time, you can find me exploring new technologies, reading tech blogs or romance novels 🙈 (don't judge me).
                        It is with great enthusiasm and eagerness that I anticipate the prospect of continuing to develop and enhance my proficiency as a full-stack developer, 
                        while simultaneously making meaningful contributions to the dynamic and constantly evolving realm of web development.
                    </p>   
                </div>
            </article>
        <Projects />
        <Contact />
        </div>
     );
}

export default About;