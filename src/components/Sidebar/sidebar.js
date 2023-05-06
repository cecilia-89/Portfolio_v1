import gmail from './images/gmail.svg'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href='https://github.com/cecilia-89' rel="noreferrer" target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                </li>

                <li>
                    <a href="https://twitter.com/CAtabong" rel="noreferrer" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/cecilia-atabong" rel="noreferrer" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                </li>

                <li>
                    <a href="mailto:catabong89@gmail.com" rel="noreferrer" target='_blank'><img src={gmail} alt="gmail icon"></img></a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar ;