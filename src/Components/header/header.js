import react from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className="header__container">
            <h1 className="header__title">
            <Link to={"/"} text-decoration="none">
                CRUD para SignaturIt
            </Link>
            </h1>
        </div>
    )
}

export default Header;