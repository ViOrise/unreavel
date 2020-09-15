import React, {useContext, useState} from "react"
import "./Input.sass"
import {AlertContext} from "../context/alert/alertContext";

export const Input = () => {

    const {show} = useContext(AlertContext)

    const [state, setState] = useState("")

    const Submit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        if (state.trim()){
            console.log(`make request:${state}`)
            setState("")
        }else(
            show("Please, input something to the form ")
        )

    }
    return (
        <>
            <div className="input-cont">
                <input
                    onKeyPress={Submit}
                    value={state}
                    onChange={event => setState(event.target.value)}
                    type="text"
                    placeholder="Input some text..."
                    className="input"/>
            </div>
        </>
    )
}