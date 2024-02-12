import { useEffect, useState } from "react";
import { useCocktail } from "@hooks/cocktails";

const CocktailForm = ({ idCocktail = undefined, textButton, onSubmit }) => {
    const cocktailDB = useCocktail(idCocktail);
    const [cocktail, setCocktail] = useState({ id: "", user_id: "", nom: "", description: "", recette: "" });

    useEffect(() => {
        if (cocktailDB) {
            setCocktail(cocktailDB);
        }
    }, [cocktailDB]);

    const onChange = (e) => {
        setCocktail((prev) => {
            prev[e.target.name] = e.target.value;
            return prev;
        });
    };

    const onsubmit = (e) => {
        e.preventDefault();
        onSubmit(cocktail);
    };

    return (
        <form onSubmit={onsubmit}>
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" defaultValue={cocktail.nom} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    defaultValue={cocktail.description}
                    onChange={onChange}
                ></textarea>
            </div>
            <div>
                <label htmlFor="recette">Recette</label>
                <textarea name="recette" id="recette" defaultValue={cocktail.recette} onChange={onChange}></textarea>
            </div>
            <div>
                <input type="submit" value={textButton} />
            </div>
        </form>
    );
};

export default CocktailForm;
