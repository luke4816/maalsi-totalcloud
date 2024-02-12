import { useCocktails } from "@hooks/cocktails";
import Cocktail from "@/components/public/Cocktail";
import style from "./Cocktails.module.css";

const Cocktails = () => {
    const cocktails = useCocktails();

    return (
        <>
            <h1>Cocktails</h1>

            <div className={style.grid}>
                {cocktails.map((c) => (
                    <Cocktail key={c.id} cocktail={c} />
                ))}
            </div>
        </>
    );
};

export default Cocktails;
