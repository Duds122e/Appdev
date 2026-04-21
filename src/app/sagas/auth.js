

import { takeLatest, call, put } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_REQUEST, USER_LOGIN_COMPLETE, USER_LOGIN_ERROR } from '../actions';
import { userLogin as userLoginApi } from '../api/auth';

export function* userLoginAsync(action) {
  console.log('User login saga started: ', action);

  // #region agent log
  fetch('http://127.0.0.1:7821/ingest/6f6520a7-e4f2-4d1e-b5d6-ed47319b599c', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': '85f50d',
    },
    body: JSON.stringify({
      sessionId: '85f50d',
      runId: 'initial',
      hypothesisId: 'H4',
      location: 'src/app/sagas/auth.js:userLoginAsync:entry',
      message: 'userLoginAsync saga started',
      data: { hasPayload: !!action?.payload, keys: action?.payload ? Object.keys(action.payload) : [] },
      timestamp: Date.now(),
    }),
  }).catch(() => { });
  // #endregion

  try {
    // Step 1: Dispatch USER_LOGIN_REQUEST to set loading state in reducer
    // This updates auth.isLoading to true in the Redux store
    yield put({ type: USER_LOGIN_REQUEST });

    // Step 2: Call the login API with username and password
    // 'call' effect executes the API function and waits for result
    // If API fails, it throws an error that goes to catch block
    const data = yield call(userLoginApi, action.payload);

    // #region agent log
    fetch('http://127.0.0.1:7821/ingest/6f6520a7-e4f2-4d1e-b5d6-ed47319b599c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': '85f50d',
      },
      body: JSON.stringify({
        sessionId: '85f50d',
        runId: 'initial',
        hypothesisId: 'H5',
        location: 'src/app/sagas/auth.js:userLoginAsync:success',
        message: 'userLoginAsync saga completed successfully',
        data: { hasData: !!data },
        timestamp: Date.now(),
      }),
    }).catch(() => { });
    // #endregion

    // Step 3: API succeeded - dispatch USER_LOGIN_COMPLETE with token
    // This stores the JWT token in auth.data and sets isLoading to false
    yield put({
      type: USER_LOGIN_COMPLETE,
      payload: data,
    });
  } catch (error) {
    // Step 4: API failed or threw error - log and dispatch error action
    // This updates auth.isError to true and stores the error message
    console.log('User login saga error: ', error);

    // #region agent log
    fetch('http://127.0.0.1:7821/ingest/6f6520a7-e4f2-4d1e-b5d6-ed47319b599c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': '85f50d',
      },
      body: JSON.stringify({
        sessionId: '85f50d',
        runId: 'initial',
        hypothesisId: 'H6',
        location: 'src/app/sagas/auth.js:userLoginAsync:error',
        message: 'userLoginAsync saga caught error',
        data: { errorMessage: error?.message || null },
        timestamp: Date.now(),
      }),
    }).catch(() => { });
    // #endregion

    yield put({
      type: USER_LOGIN_ERROR,
      error: error?.message || 'Login failed',
    });
  }
}

// Generator function: userLogin (watcher saga)
// Purpose: Watches for USER_LOGIN actions and triggers userLoginAsync
// takeLatest: If multiple USER_LOGIN actions are dispatched, only the latest one runs
// Usage: Registered in root saga to listen for login requests from components
export function* userLogin() {
  yield takeLatest(USER_LOGIN, userLoginAsync);
}