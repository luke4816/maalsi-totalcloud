import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Dashboard } from "@pages/admin";
import Error from "@pages/Error";
import { User, UserAdd, UserEdit } from "@pages/admin/user";
import { CocktailAdd, CocktailEdit, Cocktails } from "@pages/admin/cocktails";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="user">
                    <Route index element={<User />} />
                    <Route path=":id" element={<UserEdit />} />
                    <Route path="add" element={<UserAdd />} />
                </Route>

                <Route path="cocktails">
                    <Route index element={<Cocktails />} />
                    <Route path=":id" element={<CocktailEdit />} />
                    <Route path="add" element={<CocktailAdd />} />
                </Route>

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;
