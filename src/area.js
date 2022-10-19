import React, { useState } from "react";

function Area(props){
    const [note,setnote] = useState({
        title:"",
        content:""
    });

function changes(event){
   const {name,value} = event.target;
    setnote(prevnote => {
        return {
            ...prevnote,
            [name]:value
        };
    });
}

function submit(event){
    props.onadd(note)
    setnote({
        title:"",
        content:""
    })
    event.preventDefault();
}

    return(
<>
    <form>
        <input name="title" onChange={changes} value ={note.title} placeholder="Title"></input>
        <textarea 
        name ="content" onChange={changes}
        value = {note.content} 
        placeholder="Take a note..." rows="3">

        </textarea>
        <button onClick={submit}>+</button>
    </form>
</>

    );
}
export default Area;