import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar-menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tunes'>Tunes</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
