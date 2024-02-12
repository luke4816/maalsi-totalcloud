import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonDelete from "@components/admin/user/ButtonDelete";
import { useCocktails } from "@hooks/cocktails";
import { cocktailService } from "@services";

const Cocktails = () => {
    const cocktails = useCocktails();
    const [cocktailsDisplayed, setCocktailsDisplayed] = useState([]);

    useEffect(() => {
        setCocktailsDisplayed(cocktails);
    }, [cocktails]);

    /**
     *
     * @param {str} id
     */
    const removeCocktailFromList = (id) => {
        setCocktailsDisplayed((prev) => prev.filter((c) => c.id !== id));
    };

    const deleteCocktail = async (id) => {
        try {
            const res = await cocktailService.deleteCocktail(id);
            removeCocktailFromList(id);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>Cocktails</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Id User</th>
                        <th>Description</th>
                        <th>Recette</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cocktailsDisplayed.map((c) => (
                        <tr key={c.id}>
                            <td>
                                <Link to={`/admin/cocktails/${c.id}`}>{c.id}</Link>
                            </td>
                            <td>{c.nom}</td>
                            <td>{c.user_id}</td>
                            <td>{c.description}</td>
                            <td>{c.recette}</td>
                            <td>
                                <ButtonDelete id={c.id} onClick={deleteCocktail} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Cocktails;
