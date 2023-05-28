import '../src/Navbar2.css';

const Navbar2 = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h2>Asif Muntasir</h2>
                </div>

                <div className="menu">
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
            </nav>
        </>
    );
}

export default Navbar2;
