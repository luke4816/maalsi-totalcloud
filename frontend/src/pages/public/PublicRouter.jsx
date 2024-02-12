import { Route, Routes } from "react-router-dom";
import { Layout, Home, Cocktails, Contact } from "@pages/public";
import Error from "@pages/Error";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="cocktails" element={<Cocktails />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
