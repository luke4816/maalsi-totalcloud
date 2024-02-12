import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@pages/public/PublicRouter";
import AdminRouter from "@pages/admin/AdminRouter";
import AuthRoute from "@helpers/AuthRoute";
import AuthRouter from "@pages/auth/AuthRouter";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PublicRouter />} />
                <Route
                    path="admin/*"
                    element={
                        <AuthRoute>
                            <AdminRouter />
                        </AuthRoute>
                    }
                />
                <Route path="auth/*" element={<AuthRouter />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
