import { DEAUTH, AUTH, ADMINAUTH, ADMINDEAUTH } from './actions';


function authentication (state = {authenticated: false, adminauthenticated: false}, action) {
    switch (action.type) {
        case DEAUTH:
            return Object.assign({}, state, {
                authenticated: false,
                adminauthenticated: false
            })
        case AUTH:
            return Object.assign({}, state, {
                authenticated: true,
                adminauthenticated: false
            })
        case ADMINDEAUTH:
            return Object.assign({}, state, {
                authenticated: false,
                adminauthenticated: false
            })
        case ADMINAUTH:
            return Object.assign({}, state, {
                authenticated: true,
                adminauthenticated: true
            })
        default:
            return state
    }
}

export default authentication