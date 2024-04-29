
import NavBar from "./NavBar";
import './Footer.css';

// const a = NavBar.map((e)=>{
//     return e;
// });
// console.log(a);
console.log("Footer vala content");

function Footer(){

    return(
        <div className="footer">
        <h1>Stay Notified. Subscribe!!!</h1>
        <div className="form">
            <input id="email" type="text" placeholder="Enter email"></input>
            <button>Subscribe</button>
        </div>
        <div className="bottomNav-bottomConnect">

            <ul className="bottomNav">
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

            <div className="bottomConnect">
                <h2>Connect with Us</h2>
                <ul>
                <li>
                <a href="">
                <img src="https://durhamcollege.ca/wp-content/uploads/fb-white.svg" alt="Facebook icon" rel="noopener"/> Connect on Facebook
                </a>
                </li>
                <li>
                <a href="">
                <img src="https://durhamcollege.ca/wp-content/uploads/insta-white.svg" alt="Instagram icon" /> Follow on Instagram
                </a>
                </li>
                <li>
                <a href="">
                <img src="https://durhamcollege.ca/wp-content/uploads/linkedin-white.svg" alt="Linkedin icon" /> Connect on LinkedIn
                </a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
}


export default Footer;