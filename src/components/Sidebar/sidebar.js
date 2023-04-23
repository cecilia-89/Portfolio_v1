import gmail from './images/gmail.svg'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><ion-icon name="logo-github"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-linkedin"></ion-icon></li>
                <li><img src={gmail}></img></li>
            </ul>
        </div>
    );
}

export default Sidebar ;