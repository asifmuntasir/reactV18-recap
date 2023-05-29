import { useState } from 'react';
import '../src/Navbar2.css';
import { FaHamburger } from 'react-icons/fa';


const Navbar2 = () => {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <>
            <nav>
                <div className="logo">
                    <h2>Asif Muntasir</h2>
                </div>

                <div className={showMenu ? "menu mobile-menu" : "menu"}>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Log In</a>
                        </li>
                    </ul>
                </div>

                <div className="ham-menu">
                    <a href="#" onClick={() => setShowMenu(!showMenu)}>
                        <FaHamburger />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar2;
