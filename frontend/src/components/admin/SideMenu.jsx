import React from "react";
import { Link } from "react-router-dom";
import style from "./SideMenu.module.css";

const SideMenu = () => {
    return (
        <nav className={style.menu}>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>&nbsp;</li>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    User
                    <ul>
                        <li>
                            <Link to="/admin/user">Liste</Link>
                        </li>
                        <li>
                            <Link to="/admin/user/add">Ajouter</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Cocktails
                    <ul>
                        <li>
                            <Link to="/admin/cocktails">Liste</Link>
                        </li>
                        <li>
                            <Link to="/admin/cocktails/add">Ajouter</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default SideMenu;
