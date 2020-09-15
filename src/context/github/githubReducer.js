import {SEARCH_USERS} from "../types";

const handlers = {
    [SEARCH_USERS]: (state, action) => ({...state, users: action.payload, loading: true}),
    DEFAULT: (state) => state
}

export const githubReducer = (state, action) =>{
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}