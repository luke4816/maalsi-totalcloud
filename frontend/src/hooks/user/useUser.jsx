import { useEffect, useState } from "react";
import { userService } from "@services";

/**
 *
 * @param {str} id
 * @returns
 */
const useUser = (id) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await userService.getUser(id);
                setUser(res.data.data);
            } catch (e) {
                console.error(e);
            }
        };
        if (id) {
            fetch();
        }
    }, [id]);

    return user;
};

export default useUser;
