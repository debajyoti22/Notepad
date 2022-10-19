import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
/*import data from "./data";*/
/*function note(props)
{
   return( <Note 
        title={props.title}
        content={props.content}           
        />
        );
}
function App(){
    return (<div>
        <Header></Header>
        {data.map(note)}
        <Footer></Footer>
    </div>);
}
export default App;*/

import Area from "./area";

function App(){

    const [notes,setnotes]=useState([]);


    function addnote(newnote){
        setnotes(prevnotes => {
            return [...prevnotes,newnote];
        })
    }

    function deletenote(id){
        setnotes(prevnotes => {
            return prevnotes.filter((noteitem,index)=> {
                return index !== id;
            });
        });
    }

    return (<div>
        <Header></Header>
        <Area onadd={addnote}></Area>

       { notes.map((noteitem,index) => {
        return (
        <Note 
        key ={index}
        id ={index}
        title={noteitem.title}
        content={noteitem.content} 
        onDelete={deletenote}          
        />);        
    })}
        <Footer></Footer>
    </div>);
}
export default App;