import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {

  let [css, setCss]=useState(true)
  let [cls, setCls]=useState("redColor")

  useEffect(() => {
    if(css){
      setCls("redColor")
    }else{
      setCls("blueColor")
    }    
  }, [css])
  

  function change(){
    setCss(!css)
  }
//code here 

  return (
    <div id="main">
      <p className={cls} >Newton School</p>
      <button id='button' onClick={change}>Change Style</button>
    </div>
  )
}


export default App;

