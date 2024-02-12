import { useNavigate, useParams } from "react-router-dom";
import { userService } from "@services";
import UserForm from "@components/admin/user/UserForm";

const UserEdit = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const onSubmit = async (user) => {
        try {
            const res = await userService.updateUser(user);
            navigate("/admin/user");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>Edit User</h1>
            <UserForm idUser={id} textButton="Modifier" onSubmit={onSubmit} />
        </>
    );
};

export default UserEdit;
