import './NavBar.css';

function NavBar(){

    return(
        <nav>
            <div className="logo">
                <span>Back</span>
                <span>Roads</span>
            </div>
            <ul className="navigation">
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Services">Services</a>
                </li>
                <li>
                    <a href="#Connect">Connect</a>
                </li>
            </ul>
            <ul className="connect">
                <li>
                <a href="">
                <img src="https://durhamcollege.ca/wp-content/uploads/fb-white.svg" alt="Facebook icon" rel="noopener"/>
                </a>
                </li>
                <li>
                <a href="">
                <img src="https://durhamcollege.ca/wp-content/uploads/insta-white.svg" alt="Instagram icon" />
                </a>
                </li>
                <li>
                <a href="">
                <img src="https://durhamcollege.ca/wp-content/uploads/linkedin-white.svg" alt="Linkedin icon" />
                </a>
                </li>
            </ul>
        </nav>
    );
}



export default NavBar;