export const logInAction = ({ user, token }) => ({
    type: "LOG-IN",
    user,
    token,
});

export const logOutAction = () => ({
    type: "LOG-OUT",
});
