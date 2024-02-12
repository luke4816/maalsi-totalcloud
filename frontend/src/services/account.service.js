import Axios from "./caller.service";

/**
 *
 * @param {{email: str, password: str}} credentials
 */
const login = (credentials) => {
    return Axios.post("auth/login", credentials);
};

/**
 *
 * @param {str} token
 */
const saveToken = (token) => {
    localStorage.setItem("token", token);
};

const getToken = () => {
    return localStorage.getItem("token");
};

const getUserID = () => {
    const token = getToken();

    const data = JSON.parse(atob(token.split(".")[1]));

    return data.id;
};

/**
 *
 * @returns {boolean}
 */
const isLogged = () => {
    const token = localStorage.getItem("token");

    return !!token;
};

const logout = () => {
    localStorage.removeItem("token");
};

export const accountService = {
    login,
    saveToken,
    getToken,
    getUserID,
    isLogged,
    logout,
};
