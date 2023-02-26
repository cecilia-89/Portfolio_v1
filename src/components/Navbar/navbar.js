import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import About from '../About/about.js'
import './navbar.scss'

const Navbar = () => {

    const [state, setState] = useState(() => {
        return true;
    })

    const isVisible = () => setState(!state);

    return (
        <>
            <header>
            <div className='wrapper'>
                <div className='logo'>
                    Logo
                </div>
                <nav>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </nav>
                <div className="resume">
                    <span>Resume</span>
                </div>
                <div className='hamburger' onClick={isVisible}>
                    <FontAwesomeIcon icon={faHamburger} />
                </div>
            </div>

            <div className={state ? 'dropdown' : 'hidden'}>
                <nav>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </nav>
                <div className="resume">
                    <span>Resume</span>
                </div>
            </div>
            </header>
            <About visible={state}/>
        </>
    )
}

export default Navbar;