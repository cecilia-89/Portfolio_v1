import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss'

const Navbar = () => {
    return (
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
                <div className='hamburger'>
                    <FontAwesomeIcon icon={faHamburger} />
                </div>
            </div>

            <div className='dropdown'>
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
    )
}

export default Navbar;