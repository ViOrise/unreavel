import React from "react"
import {Link} from "react-router-dom";
import "./Image.sass"

export const Image = (props) => (
    <>
        <div className="card">
            <img className="img" alt="" src={props.srr}/>
            <div className="bottom-card">
                <div className="title">react</div>
                <Link className="btn-card" to={"/Users/" + "react"}>Go</Link>
            </div>
        </div>

    </>

)
