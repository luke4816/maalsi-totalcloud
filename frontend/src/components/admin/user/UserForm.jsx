import { useEffect, useState } from "react";
import { useUser } from "@hooks/user";
import style from "./UserForm.module.css";

const UserForm = ({ idUser = undefined, textButton, showPassword = false, onSubmit }) => {
    const userDB = useUser(idUser);
    const [user, setUser] = useState({ nom: "", prenom: "", pseudo: "", email: "", password: "" });

    useEffect(() => {
        if (userDB) {
            setUser(userDB);
        }
    }, [userDB]);

    const onChange = (e) => {
        setUser((prev) => {
            prev[e.target.name] = e.target.value;
            return prev;
        });
    };

    const onsubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <form onSubmit={onsubmit}>
            <div className={style.group}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" defaultValue={user.nom} onChange={onChange} />
            </div>
            <div className={style.group}>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" name="prenom" defaultValue={user.prenom} onChange={onChange} />
            </div>
            <div className={style.group}>
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" id="pseudo" name="pseudo" defaultValue={user.pseudo} onChange={onChange} />
            </div>
            <div className={style.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" defaultValue={user.email} onChange={onChange} />
            </div>
            {showPassword && (
                <div className={style.group}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue={user.password}
                        onChange={onChange}
                    />
                </div>
            )}
            <div className={style.group}>
                <input type="submit" value={textButton} />
            </div>
        </form>
    );
};

export default UserForm;
