import LoginModel from "../Model/loginModel.js";
import jwt from "jsonwebtoken";


const adminLoginController = async (req, res) => {
    try {
        const data = await LoginModel.findOne({ f_userName: req.body.name, f_pwd: req.body.password }).select({ _id: 0, f_pwd: 0 });

        if (data != null) {
            jwt.sign({ ...data }, process.env.JWTSECRETKEY, { algorithm: "HS256", expiresIn: "15m" }, (err, token) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send({ message: "Login successful", token })
                }
            });

        } else {
            res.send({ message: "user not found" })
        }

    } catch (e) {
        res.status(500).send({ message: "internal server error", e })
    }
}

export default adminLoginController;