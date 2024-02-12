import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "@hooks/user";
import ButtonDelete from "@components/admin/user/ButtonDelete";
import { userService } from "@services";

const User = () => {
    const users = useUsers();
    const [usersDisplayed, setUsersDisplayed] = useState([]);

    useEffect(() => {
        setUsersDisplayed(users);
    }, [users]);

    /**
     *
     * @param {str} id
     */
    const removeUserFromList = (id) => {
        setUsersDisplayed((prev) => prev.filter((u) => u.id !== id));
    };

    /**
     *
     * @param {str} id
     */
    const deleteUser = async (id) => {
        try {
            const res = await userService.deleteUser(id);
            removeUserFromList(id);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>User list</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usersDisplayed.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/admin/user/${user.id}`}>{user.id}</Link>
                            </td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toLocaleString()}</td>
                            <td>
                                <ButtonDelete id={user.id} onClick={deleteUser} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default User;
