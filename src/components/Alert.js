import React from 'react'

export default function Alert(props) {
  let capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div style={{'height':'50px'}}>
     { props.alert && 
      <div className={`alert alert-${props.alert.type}`} role="alert">
      <span><b> {capitalizeFirstLetter(props.alert.type)} : </b></span>{props.alert.message}
    </div>}
    </div>
  )
}
