// Since strings are prone to typos and duplicates it’s better to have action types declared as constants. This approach helps avoiding errors that will be difficult to debug.

// src/js/constants/action-types.js
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";