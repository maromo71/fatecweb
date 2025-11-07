import {Link} from 'react-router-dom';
import './style.css';
function NavBar() {
    return (
        <nav>
            <Link to="/">Início</Link> | { ' ' }
            <Link to="/about">Sobre</Link>
        </nav>
    );
}
export default NavBar;  