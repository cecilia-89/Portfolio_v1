import './footer.scss'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
        <div>
           Designed and Created by Cecilia Atabong
        </div>
        <ul>
            <li><FontAwesomeIcon icon={faGithub} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>
    </footer>
     );
}

export default Footer;