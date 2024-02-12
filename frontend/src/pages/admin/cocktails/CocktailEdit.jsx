import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CocktailForm from "@components/admin/cocktails/CocktailForm";
import { cocktailService } from "@services";

const CocktailEdit = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const onSubmit = async (cocktail) => {
        try {
            const res = await cocktailService.updateCocktail(cocktail);
            navigate("/admin/cocktails");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>Edit Cocktail</h1>
            <CocktailForm idCocktail={id} textButton="Modifier" onSubmit={onSubmit} />
        </>
    );
};

export default CocktailEdit;
