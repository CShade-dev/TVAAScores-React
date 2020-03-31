export const DEAUTH = 'DEAUTH'
export const AUTH = 'AUTH'

export function deauthenticate() {
    return { type: DEAUTH }
}

export function authenticate() {
    return { type: AUTH }
}

export const ADMINDEAUTH = 'ADMINDEAUTH'
export const ADMINAUTH = 'ADMINAUTH'

export function admindeauthenticate() {
    return { type: ADMINDEAUTH }
}

export function adminauthenticate() {
    return { type: ADMINAUTH }
}