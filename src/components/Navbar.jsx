import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><i class="fa-sharp fa-solid fa-house-user"></i> Home</Link>
                    </li>

                    <li>
                        <Link to="/Contact"><i className="fa-regular fa-address-book"></i> Contact</Link>
                    </li>
                </ul>
            </nav>

            <Link to="/" className="logo">
                <h2><i class="fa-solid fa-cake-candles"></i>Happy Cake</h2>
            </Link>
        </header>
    )

}

export default Navbar