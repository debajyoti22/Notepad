import React from "react";
function Note(props){
    function clicked(){
        props.onDelete(props.id);
    }

    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={clicked}>-</button>
    </div>);
}
export default Note;