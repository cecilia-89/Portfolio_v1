import { useState, useEffect, useRef} from 'react';
import About from '../About/about.js'
import './navbar.scss'

const Navbar = () => {

    // const [state, setState] = useState(() => { return true;})
    let [lastScroll, setScroll] = useState()

    // const isVisible = () => setState(!state);
    const nav = useRef()

    // hides navbar on scrollUp and displays on scrollDown
    useEffect(() => {

        setScroll(window.scrollY)
        window.addEventListener('scroll', () => {
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
                <div className='logo'>
                    Logo
                </div>
               
                <div className="resume">
                    <span> My Resume</span>
                </div>
                {/* <div className='hamburger' onClick={isVisible}>
                    <ion-icon  name="menu-sharp"></ion-icon>
                </div> */}
            </div>

            {/* <div className={state ? 'dropdown' : 'hidden'}>
                <div onClick={() => setState(!state)}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
                <nav>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                    <div className="resume">Resume</div>
                </nav>
               
            </div> */}
        </header>
            {/* visible={state} */}
            <About /> 
        </>
    )
}

export default Navbar;