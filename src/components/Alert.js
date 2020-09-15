import React, {useContext} from "react"
import "./Alert.sass"
import {AlertContext} from "../context/alert/alertContext";

export const Alert = (props) => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert) return null
    return (
        <>
            <div className="cont-alert">
                <div className="alert">{alert}
                    <button onClick= {hide} className="btn-close">X</button>
                </div>
            </div>

        </>

    )
}