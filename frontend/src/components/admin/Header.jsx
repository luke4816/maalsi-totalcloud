import React from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "@services";
import style from "./Header.module.css";

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        accountService.logout();
        navigate("/");
    };

    return (
        <header className={style.header}>
            Header
            <button onClick={logout}>Logout</button>
        </header>
    );
};

export default Header;
