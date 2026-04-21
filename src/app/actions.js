
export const USER_LOGIN = 'USER_LOGIN';           // Initiates login saga
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';   // Sets loading state
export const USER_LOGIN_COMPLETE = 'USER_LOGIN_COMPLETE'; // Login successful, stores user data
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';       // Login failed, stores error
export const RESET_USER_LOGIN = 'RESET_USER_LOGIN';       // Logout - resets auth state

// Action creator: authLogin
// Purpose: Initiates the login process by dispatching USER_LOGIN
// Usage: dispatch(authLogin({ username, password }))
// Flow: Triggers userLoginSaga which calls the API
export const authLogin = payload => ({
    type: USER_LOGIN,
    payload,
});

// Action creator: authLogout
// Purpose: Logs out the user by resetting auth state
// Usage: dispatch(authLogout())
// Flow: Dispatches RESET_USER_LOGIN to reducer, clears auth.data
export const authLogout = () => ({
    type: RESET_USER_LOGIN,
});