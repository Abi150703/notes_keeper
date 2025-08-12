import React,{useState,useEffect} from "react";

function CreateArea(props) {
 
  const[mainarray, setMainArray]=useState({title:"",content:""})
  

  function onHandle(e){
   const{name,value}= e.target
    setMainArray((prev)=>({...prev,[name]:value}));
    
  }

  function nowClick(e){
    e.preventDefault();
    setMainArray({title:"",content:""})
    props.addNote(mainarray) 
  }

 

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={onHandle} value={mainarray.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={onHandle}  value={mainarray.content} />
        <button  onClick={nowClick}>Add</button>
      </form>
      
    </div>
  );
}

export default CreateArea;
