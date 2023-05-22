import { useState } from 'react';
import '../src/Navbar.css';
import { FaYoutube, FaGithub, FaFacebook, FaHamburger } from 'react-icons/fa';

const Navbar = () => {

    const [showMediaIcon, setshowMediaIcon] = useState(false);

    return (
        <>
            <nav className='main-nav'>
                <div className="logo">
                    <h2>
                        <span>A</span>sif
                        <span>M</span>untasir
                    </h2>
                </div>
                {/* 2nd part */}
                <div className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media */}
                <div className="social-media">
                    <ul className='social-media-desktop'>
                        <li><a href="https://www.youtube.com/" target='_asif'>
                            <FaYoutube className='youtube' />
                        </a></li>
                        <li><a href="https://www.facebook.com/">
                            <FaFacebook className='facebook' />
                        </a></li>
                        <li><a href="https://github.com/asifmuntasir/">
                            <FaGithub className='github' />
                        </a></li>
                    </ul>

                    {/* Hamburger menu start */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setshowMediaIcon(!showMediaIcon)}>
                            <FaHamburger />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section Start */}
            <section className='hero-section'>
                <p>Welcome To</p>
                <h1>Jerry Tech</h1>
            </section>
        </>
    );
}

export default Navbar;