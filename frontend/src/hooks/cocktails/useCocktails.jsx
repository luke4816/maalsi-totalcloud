import { useEffect, useState } from "react";
import { cocktailService } from "@services";

const useCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await cocktailService.getCocktails();
                setCocktails(res.data.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetch();
    }, []);

    return cocktails;
};

export default useCocktails;
