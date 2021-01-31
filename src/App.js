import React,{useState} from 'react';
import './App.css';

function App() {
 const string = []
  const[value,setvalue]=useState('')

  const handleInputchange = (e)=>{
   // const htmltag = document.querySelector('htmltag')
    //htmltag.textContent=e.target.value
    setvalue(e.target.value)
  }

  const addnew = (e)=>{
    string.push("<div>"+value+"</div>")
    console.log("<div>"+value+"</div>")
  }

  return (
    <div className="App">
      <div><h1 contentEditable="true">Enter title here </h1>
      <h3 contentEditable="true">this is small description</h3>
      <div className="content" contentEditable="true">
        this or enteris content
      </div>
      </div>

      <button onClick={addnew}>Add</button>
      <textarea type="text" onChange={handleInputchange}></textarea>
      <label id="htmltag">{value}</label>
    </div>
    
  );
}

export default App;
