import { useState } from 'react'
import './App.css'

function App() {
  // const timeNow = Date.now() //timestamp in millisecond
  // // so will need to convert the date of retirement back in a timestamp format in order to subtract, find out how much millisecond to retirement
  
  // const displayDate = Date(timeNow)

  //or

  // const currentDate = new Date().toTimeString()


  

  return (
    <>
      <h1 style={{color: "red"}}>Retirement Countdown</h1>
      <h3>{currentDate}</h3>
      <div className="form-container">
        
      </div>
      <div className="display-container poppins-bold">
        <h1>Years</h1>
        <h1>Months</h1>
        <h1>Days</h1>
        <h1>Hours</h1>
        <h1>Minutes</h1>

      </div>
    </>
  )
}

export default App
