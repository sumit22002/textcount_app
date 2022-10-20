import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';

function App() {
  const [them,setThem] = useState("light")
  const [Text,setText] = useState("Enable Light Mode")
  const [alert,showAlert] = useState(null)

  //Show Alert 
  const setAlert = (msg,type)=>{
    showAlert({
      message:msg,
      type:type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);
  }

  //Enable Dark Mode
  const togalMode = ()=>{
    if(them==="light"){
      document.body.style.backgroundColor = "#0f054c"
      document.body.style.color = "white"
      setText("Enable Dark Mode")
      setThem("dark")
      setAlert("Enable Dark Mode","success")
    }
    else{
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setText("Enable Light Mode")
      setThem("light")
      setAlert("Enable Light Mode","success")

    }
  }


  return (
   <>
   <Navbar appName = {"TAXT COUNTER APP"} togalMode={togalMode} them = {them} Text={Text}/>
   <Alert alert={alert}/>
   <TextInput heading={"Enter The Text"} them={them} setAlert={setAlert}/>
   </>
  );
}

export default App;
