import { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { swipe } from '../../actions/index.js';
import { play } from '../../actions/index.js';
import { animate } from '../../actions/index.js'
import gsap from 'gsap';
import logo from './images/logo.png'
import About from '../About/about.js'
import './navbar.scss'

const Navbar = () => {

    const dispatch = useDispatch()
    let [lastScroll, setScroll] = useState()
    const swipeRight = useSelector(state => state.Swipe)
    const nav = useRef()

    useEffect(() => {
        if (swipeRight) {
            gsap.fromTo(nav.current, {y: 0}, {y: origin})
        }

    }, [swipeRight])

    // hides navbar on scrollUp and displays on scrollDown
    useEffect(() => {

        setScroll(window.scrollY)
        window.addEventListener('scroll', () => {
            if (nav.current === null) return 

            if (lastScroll <= window.scrollY) {
                nav.current.style.top = '-80px'
            } else nav.current.style.top = '0px'

            setScroll(window.scrollY)
        })
    }, [lastScroll])


    return (
        <>
            <header ref={nav}>
                <div className='wrapper'>
                    <div className='logo' onClick={() => { 
                        dispatch(swipe()); 
                        dispatch(play()); 
                        dispatch(animate())}}>
                       <img src={logo} alt='logo' />
                    </div>
                    
                    <div className="resume" >
                        <a href='resume.pdf' target="_blank" rel="noreferrer"> Resume </a>
                    </div>
                </div>
            </header>
            <About /> 
        </>
    )
}

export default Navbar;