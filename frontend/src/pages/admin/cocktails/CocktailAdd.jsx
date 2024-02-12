import React from "react";
import { useNavigate } from "react-router-dom";
import CocktailForm from "@components/admin/cocktails/CocktailForm";
import { cocktailService } from "@services";

const CocktailAdd = () => {
    const navigate = useNavigate();

    const onSubmit = async (cocktail) => {
        try {
            const res = await cocktailService.addCocktail(cocktail);
            navigate("/admin/cocktails");
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
            <h1>Cocktail Add</h1>
            <CocktailForm textButton="Ajouter" onSubmit={onSubmit} />
        </>
    );
};

export default CocktailAdd;
