import './projects.scss'
import Contact from '../Contact/contact'
import Footer from '../Footer/footer'
import { work }from '../../utils/projects'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'

const Projects = () => {
    gsap.registerPlugin()
    const wrapper = useRef(null)
    const refs = useRef([])
    const swipeRight = useSelector(state => state.Swipe)

    useEffect(() => {
        const isTop = window.pageYOffset === 0;
        const slideRight = {x:'0',  display: 'block', duration: 1}
        const slideLeft = {x:'100vw', display: 'none', duration: 1}

        if (!isTop) {
            slideRight.delay = .8
            slideLeft.delay = .8
        }

        if (swipeRight) {
            gsap.fromTo(wrapper.current, {x: '100vw'}, slideRight)
        } else {
            window.scrollTo(0,0)
            gsap.fromTo(wrapper.current, {x: '0'}, slideLeft)
        }

    }, [swipeRight]) 

    useEffect(() => {

        const observerFunc = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {opacity: 1, duration: .9, delay: 1, y:'20px'})
                }
            })
        }

        const observer = new IntersectionObserver(observerFunc)
        refs.current.forEach(ref => {
            observer.observe(ref)
        })
    }, [])

    return (
        <section ref={wrapper} className={"projects"}>
            <div>Projects</div>
            <div>Few projects I've worked on this past year.</div>

            <div className="project-wrapper">
                {work.map((project, index) => (
                <div key={index}
                     ref={el => refs.current.push(el)}>

                    <div className='description'>
                        <p>{project.title}</p>
                        <div>{project.summary}</div>
                        <ul>
                            {project.skills.map((skill) => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                        <div className='logos'>
                            {project.links.map((link) => {
                                return  <a key={link.url} href={link.url} target='_blank' rel="noreferrer">
                                            <ion-icon name={link.logo}></ion-icon>
                                        </a>
                            })}
                        </div>
                    </div>

                    <div className='app-image'>
                        <img src={project.image} alt='movie site for Nigerian movies'/>
                    </div>
                </div>
                ))}
            </div>
            <Contact /> 
            <Footer />
        </section>
    );
}

export default Projects;