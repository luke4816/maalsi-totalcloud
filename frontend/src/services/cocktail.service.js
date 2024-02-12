import Axios from "./caller.service";
import { accountService } from "./account.service";

const getCocktails = () => {
    return Axios.get("cocktails");
};

const getCocktail = (id) => {
    return Axios.get(`cocktails/${id}`);
};

const addCocktail = (cocktail) => {
    const userID = accountService.getUserID();
    cocktail.user_id = userID;
    return Axios.put("cocktails", cocktail);
};

const updateCocktail = (cocktail) => {
    const userID = accountService.getUserID();
    cocktail.user_id = userID;
    return Axios.patch(`cocktails/${cocktail.id}`, cocktail);
};

const deleteCocktail = (id) => {
    return Axios.delete(`cocktails/${id}`);
};

export const cocktailService = {
    getCocktails,
    getCocktail,
    addCocktail,
    updateCocktail,
    deleteCocktail,
};
