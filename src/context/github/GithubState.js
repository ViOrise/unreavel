import React, {useReducer} from "react"
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";
import {GET_USER, SEARCH_USERS} from "../types";
import axios from "axios"


export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const getUsers = async users => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        console.log(response.data)

        dispatch({
            type: SEARCH_USERS,
            payload: response.data
        })
    }

    const [state, dispatch] = useReducer(githubReducer,initialState)
    const {user, users, loading, repos} = state
    return(
        <GithubContext.Provider value={{
            users, getUsers
        }}>
            {children}
        </GithubContext.Provider>

    )
}