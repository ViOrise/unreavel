import React, {useContext, useEffect} from "react"
import {Image} from "../components/Image";
import {Input} from "../components/Input";
import {GithubContext} from "../context/github/githubContext";

export const Home = () =>{
    const arr = new Array(15).fill("").map((_,i)=>i)
    const {users, getUsers}= useContext(GithubContext)
    return(
        <>
            <Input/>
            <button onClick={getUsers}>button</button>

            <div className="cards">
                {users.map((obj, id)=>{
                    return <Image key={id} srr={obj.url}/>
                })}
            </div>
        </>
    )
}