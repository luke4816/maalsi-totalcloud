import { Navigate } from "react-router-dom";
import { accountService } from "@services";

const AuthRoute = ({ children }) => {
    if (!accountService.isLogged()) {
        return <Navigate to="/auth/login" />;
    }
    return children;
};

export default AuthRoute;
