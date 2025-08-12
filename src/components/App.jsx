import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[state,setState]=useState([]);

  function addNote(mainarray){
    
    setState((prev)=>[...prev,mainarray])
  }

  function deleteNow(id){
    setState((prev)=>prev.filter((_,index)=>index!=id))
  }
 
  
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {state.map((single,index)=>
         <Note
          key={index} 
          id={index}
          title={single.title} 
          content={single.content} 
          deleteNow={deleteNow}/>)}
      
      <Footer />
    </div>
  );
}

export default App;
