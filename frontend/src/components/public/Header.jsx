import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cocktails">Cocktails</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
