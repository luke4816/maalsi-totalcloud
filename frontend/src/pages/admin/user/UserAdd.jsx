import { useNavigate } from "react-router-dom";
import { userService } from "@services";
import UserForm from "@components/admin/user/UserForm";

const UserAdd = () => {
    const navigate = useNavigate();

    const onSubmit = async (user) => {
        try {
            const res = await userService.addUser(user);
            navigate("/admin/user");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>User Add</h1>
            <UserForm textButton="Ajouter" showPassword onSubmit={onSubmit} />
        </>
    );
};

export default UserAdd;
