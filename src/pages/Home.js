import React from "react"
import {Image} from "../components/Image";
import {Input} from "../components/Input";

export const Home = () =>{
    const arr = new Array(15).fill("").map((_,i)=>i)
    return(
        <>
            <Input/>
            <div className="cards">
                {arr.map((num)=>{
                    return <Image key={num}/>
                })}
            </div>
        </>
    )
}