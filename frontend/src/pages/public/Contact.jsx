import { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState({});

    const onChange = (e) => {
        setMessage((prev) => {
            prev[e.target.name] = e.target.value;
            return prev;
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("message", message);
    };

    return (
        <>
            <h1>Contact</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="sujet">Sujet</label>
                    <input type="text" name="sujet" id="sujet" onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="contenu">Contenu</label>
                    <textarea name="contenu" id="contenu" cols="30" rows="10" onChange={onChange}></textarea>
                </div>
                <div>
                    <input type="submit" value="Envoyer" />
                </div>
            </form>
        </>
    );
};

export default Contact;
