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
                    <a href="mailto:catabong89@gmail.com" rel="noreferrer" target='_blank'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 643 465">
                            <path fill="#d4dcf8" d="M39 3.4C31.6 5.1 27.5 7 21.4 11.6 11.2 19.3 5 29.2 3 41.1c-.8 4.5-1 61.4-.8 195.9.3 185.8.3 189.6 2.3 195 4.5 12.6 15.8 24.2 28.2 29.1 5 1.9 8.2 2.3 23.1 2.7l17.2.4V292.6c0-94.4.3-171.6.6-171.6.4 0 56.5 39.8 124.6 88.5l124 88.6 123.6-88.3c67.9-48.6 123.9-88.5 124.4-88.6.4-.2.8 76.8.8 171.2V464h15.3c16.2 0 21.9-1 30.3-5.1 11.3-5.6 21.7-19.2 24.3-31.7.8-3.8 1.1-59.8 1.1-194.5 0-166.8-.2-190-1.5-195.2-4.7-17.7-19.3-31.2-37.6-34.6-5.4-1-7-.9-9.2.2-1.4.8-62.9 44.7-136.6 97.6-73.7 53-134.5 96.3-135 96.3-.6 0-60.8-42.8-133.8-95.2C115.2 49.4 54 5.6 52.1 4.3c-3.8-2.6-5.2-2.7-13.1-.9z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar ;