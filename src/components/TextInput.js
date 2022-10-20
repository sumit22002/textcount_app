import React, { useState } from 'react'

export default function TextInput(props) {
  const [txt,setTxt] = useState('')
  const changeval = (e)=>{
    setTxt(e.target.value) 
  }


  const UpClick = ()=>{
    const newText = txt
    setTxt(newText.toUpperCase())
    props.setAlert("Convert to UpperCase","success")
  }
  const lowClick = ()=>{
    const newText = txt
    setTxt(newText.toLocaleLowerCase())
    props.setAlert("Convert to LowerCase","success")
  }
  const copyClick = ()=>{
    const select = document.getElementById('exampleFormControlTextarea1')
    navigator.clipboard.writeText(select.value)  
    props.setAlert("Copy Successfully","success")
  }
  const removeClick = ()=>{
    const newText = txt
    setTxt(newText.trim())
    props.setAlert("Trim Your Spaces","success")
    
  }
  const clearClick = ()=>{
    setTxt('')
    props.setAlert("Remove Your Text","success")
  }


  return (
  <>
    <div className='container my-3'>
        <h1 className='my-3'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" style={props.them!=='light'?{backgroundColor:'#0f054c',color:'white'}:{backgroundColor:'white',color:'black'}} value={txt} onChange={changeval}></textarea>
</div>
<div className="container text-center my-3">
<button type="button" className="btn btn-primary mx-2" onClick={UpClick} disabled={txt.length===0}>CONVERT UPPERCASE</button>
<button type="button" className="btn btn-secondary " onClick={lowClick} disabled={txt.length===0}>CONVERT LOWERCASE</button>
<button type="button" className="btn btn-success mx-2" disabled={txt.length===0} onClick={copyClick}>COPY TEXT</button>
<button type="button" className="btn btn-warning mx-2" onClick={removeClick} disabled={txt.length===0}>Trim EXTRA SPACES</button>
<button type="button" className="btn btn-danger " onClick={clearClick} disabled={txt.length===0}>CLERA TEXT</button>
</div>
<hr />
<div className="container my-3 text-center">
<b>CHARACTERS :- </b><span>{txt.length}</span> | <b>WORDS :- </b><span>{txt.split(/\s+/).filter((elm)=>{return elm.length!==0}).length}</span> | <b>SPACES :- </b><span>{txt.split(" ").length-1}</span>
</div>
<hr />
<div className="container my-3" style={{'minWidth':'200px'}}>
    <h2>Preview</h2>
    <p>{txt.length===0?"Nothing to preview":txt}</p>
</div>
</div>
  </>
  )
}
