import { DEAUTH, AUTH } from './actions';

const initialState = {
    authenticated: false
}

function authentication (state = initialState, action) {
    switch (action.type) {
        case DEAUTH:
            return Object.assign({}, state, {
                authenticated: false
            })
        case AUTH:
            return Object.assign({}, state, {
                authenticated: true
            })
        default:
            return state
    }
}

export default authentication