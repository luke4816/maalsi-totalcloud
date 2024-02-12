import style from "./Cocktail.module.css";

const Cocktail = ({ cocktail }) => {
    return (
        <figure className={style.cocktail}>
            <img src="https://picsum.photos/500" alt={cocktail.nom} />
            <figcaption>
                <h2>{cocktail.nom}</h2>
            </figcaption>
        </figure>
    );
};

export default Cocktail;
