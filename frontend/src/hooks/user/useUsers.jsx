import { useEffect, useState } from "react";
import { userService } from "@services";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await userService.getAllUsers();
                setUsers(res.data.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetch();
    }, []);

    return users;
};

export default useUsers;
