import api from '../api'
import { userLoggedIn } from './auth';


export const signup = user => dispatch => 
        api.user.signup(user).then(user => user.dispatch(userLoggedIn(user)))