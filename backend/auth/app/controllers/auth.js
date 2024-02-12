/***********************************/
/*** Import des module nécessaires */
const jwt = require("jsonwebtoken");

const DB = require("../db.config");
const User = DB.User;

/**********************************/
/*** Routage de la ressource Auth */

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Validation des données reçues
    if (!email || !password) {
        return res.status(400).json({ message: "Bad email or password" });
    }

    try {
        // Vérification si l'utilisateur existe
        const user = await User.findOne({ where: { email: email }, raw: true });
        if (user === null) {
            return res.status(401).json({ message: "Bad email or password" });
        }

        // Vérification du mot de passe
        const test = await User.checkPassword(password, user.password);
        if (!test) {
            return res.status(401).json({ message: "Bad email or password" });
        }

        // Génération du token et envoi
        const token = jwt.sign(
            {
                id: user.id,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_DURING }
        );

        return res.json({ access_token: token });
    } catch (err) {
        if (err.name == "SequelizeDatabaseError") {
            res.status(500).json({ message: "Database Error", error: err });
        }
        res.status(500).json({ message: "Login process failed", error: err });
    }
};
