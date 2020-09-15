import React from "react"
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {useReducer} from "react"
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, "")

    const show = (text) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
    }

    const hide = () => {
        dispatch({
            type: HIDE_ALERT
        })
    }
    return (

        <AlertContext.Provider value={{
            show, hide, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}