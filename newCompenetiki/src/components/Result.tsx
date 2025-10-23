import React from "react"

interface ResultProps {
children: React.ReactElement
}

export function Result (props: ResultProps){
   
    return (
        <div>
            <p>{props.children}</p> 
        </div>
    )
}