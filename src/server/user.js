import Axios from "axios";

const signUpURL = `${process.env.REACT_APP_DB}/users/signup`;
const logInURL = `${process.env.REACT_APP_DB}/users/login`;

export const singUp = async ({ name, email, password }) => {
    try {
        const res = await Axios.post(signUpURL, { name, email, password });

        return {
            token: res.data.token,
            user: { name: res.data.user.name, email: res.data.user.email },
        };
    } catch (err) {
        if (err.message.includes(400)) {
            throw new Error("Email exist"); ///////
        }
    }
};

export const logIn = async ({ email, password }) => {
    try {
        const res = await Axios.post(logInURL, { email, password });

        return {
            token: res.data.token,
            user: { name: res.data.user.name, email: res.data.user.email },
            isAdmin: res.data.user.isAdmin,
        };
    } catch (err) {
        if (err.message.includes(400)) {
            throw new Error("Email or Password are invalid!");
        }
    }
};
