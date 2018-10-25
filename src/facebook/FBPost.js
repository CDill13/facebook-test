import React from 'react'
import "./FB.css"

export default function FBPost(props){
    return(
        <div className="post">
            <p>{props.post.message}</p>
            <div className="postImg">

                <img alt={props.post.message} src={props.post.picture} />
            </div>
        </div>
    )
}