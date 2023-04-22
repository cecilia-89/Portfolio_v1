import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><ion-icon name="mail-outline"></ion-icon></li>
            </ul>
        </div>
    );
}

export default Sidebar ;