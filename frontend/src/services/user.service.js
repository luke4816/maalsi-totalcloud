import Axios from "./caller.service";

const getAllUsers = () => {
    return Axios.get("users");
};

/**
 *
 * @param {str} id
 * @returns
 */
const getUser = (id) => {
    return Axios.get(`users/${id}`);
};

/**
 *
 * @param {{email: string, nom: string, prenom: string, pseudo: string, password: string}} user
 * @returns
 */
const addUser = (user) => {
    return Axios.put("users", user);
};

/**
 *
 * @param {{email: string, nom: string, prenom: string, pseudo: string, password: string}} user
 * @returns
 */
const updateUser = (user) => {
    return Axios.patch(`users/${user.id}`, user);
};

const deleteUser = (id) => {
    return Axios.delete(`users/${id}`);
};

export const userService = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
};
