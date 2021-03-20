export const intialUserDataState = { user: null, toekn: "" };

const logInReducer = (userData, action) => {
    switch (action.type) {
        case "LOG-IN":
            return {
                user: { ...action.user },
                token: action.token,
            };
        case "LOG-OUT":
            return intialUserDataState;
        default:
            return userData;
    }
};

export default logInReducer;
