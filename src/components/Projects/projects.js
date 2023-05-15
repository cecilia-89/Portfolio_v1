import './projects.scss'
import Contact from '../Contact/contact'
import { work }from '../../utils/projects'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'

const Projects = () => {
    gsap.registerPlugin()
    const wrapper = useRef(null)
    const projects = []
    const swipeRight = useSelector(state => state.Swipe)


    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         const intersecting = entry.isIntersecting
    //         if (intersecting) {
    //             gsap.fromTo(entry.target, {opacity: 0, y: 50}, {opacity: 1, y:origin, duration: 1, delay: 1})
    //         }
    //     })
    // })

    // projects.forEach(project => {
    //     observer.observe(project)
    // })



    useEffect(() => {
        const isTop = window.pageYOffset === 0;
        const slideRight = {x:'0',  display: 'block', duration: 1}
        const slideLeft = {x:'100vw', display: 'none', duration: 1}

        console.log(window.pageYOffset)

        if (!isTop) {
            slideRight.delay = .5
            slideLeft.delay = .8
        }

        if (swipeRight) {
            gsap.fromTo(wrapper.current, {x: '100vw'}, slideRight)
        } else {
            window.scrollTo(0,0)
            gsap.fromTo(wrapper.current, {x: '0'}, slideLeft)
        }

    }, [swipeRight]) 

    return (
        <section ref={wrapper} className={"projects"}>
            <div>Projects</div>
            <div>Few projects I've worked on this past year <span>.</span></div>

            <div className="project-wrapper">
                {work.map((project) => {
                return  <div ref={el => projects.push(el)}>
                    <div className='app-image'>
                        <img src={project.image} alt='movie site for Nigerian movies'/>
                    </div>

                    <div className='description'>
                        <p>{project.title}</p>
                        <div>{project.summary}</div>

                        <ul>
                            {project.skills.map((skill) => {
                                return <li>{skill}</li>
                            })}
                        </ul>

                        <div className='logos'>
                            {project.links.map((link) => {
                                return  <a href={link.url} target='_blank' rel="noreferrer">
                                            <ion-icon name={link.logo}></ion-icon>
                                        </a>
                            })}
                        
                        </div>
                    </div>
                        </div>
                })}
            </div>
            <Contact /> 
        </section>
    );
}

export default Projects;