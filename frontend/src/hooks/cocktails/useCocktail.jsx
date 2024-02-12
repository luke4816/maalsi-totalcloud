import { useEffect, useState } from "react";
import { cocktailService } from "@services";

/**
 *
 * @param {str} id
 * @returns
 */
const useCocktail = (id) => {
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await cocktailService.getCocktail(id);
                setCocktail(res.data.data);
            } catch (e) {
                console.error(e);
            }
        };
        if (id) {
            fetch();
        }
    }, [id]);

    return cocktail;
};

export default useCocktail;
