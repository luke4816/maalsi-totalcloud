import style from "./ButtonDelete.module.css";

const ButtonDelete = ({ id, onClick }) => {
    const onclick = () => {
        onClick(id);
    };

    return (
        <button className={style.button} onClick={onclick}>
            X
        </button>
    );
};

export default ButtonDelete;
