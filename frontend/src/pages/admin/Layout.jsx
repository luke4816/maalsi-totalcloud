import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/admin/Header";
import SideMenu from "@components/admin/SideMenu";
import style from "./Layout.module.css";

const Layout = () => {
    return (
        <>
            <Header />
            <div className={style.admin}>
                <SideMenu />

                <main className={style.body}>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Layout;
