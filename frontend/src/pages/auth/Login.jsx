import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "@services";
import style from "./Login.module.css";

const Login = () => {
    const inputEmail = useRef();
    const inputPassword = useRef();

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = inputEmail.current.value;
        const password = inputPassword.current.value;
        try {
            const res = await accountService.login({ email, password });
            const token = res.data.access_token;
            accountService.saveToken(token);
            navigate("/admin", { replace: true });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={style.group}>
                <label htmlFor="email">Identifiant</label>
                <input type="text" id="email" name="email" ref={inputEmail} />
            </div>
            <div className={style.group}>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" ref={inputPassword} />
            </div>
            <div className={style.group}>
                <input type="submit" value="Connexion" />
            </div>
        </form>
    );
};

export default Login;
