import api, { loginApi } from '../api'
export const userLoggedIn = user => ({
    type: "USER_LOGGED_IN",
    user
});

export const userLoggedOut = () => ({
    type: "USER_LOGGED_OUT"
});

export const login = credentials => dispatch => api.user.login(credentials).then(user => {
        localStorage.barbershopJWT = user.token;
        dispatch(userLoggedIn(user));
    });