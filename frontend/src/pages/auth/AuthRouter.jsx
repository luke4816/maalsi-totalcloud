import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@pages/auth/Login";
import Error from "@pages/Error";

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AuthRouter;
