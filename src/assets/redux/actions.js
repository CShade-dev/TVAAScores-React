export const DEAUTH = 'DEAUTH'
export const AUTH = 'AUTH'

export function deauthenticate() {
    return { type: DEAUTH }
}

export function authenticate() {
    return { type: AUTH }
}