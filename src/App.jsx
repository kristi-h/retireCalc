import { useState } from 'react'
import './App.css'
// import {icon-arrow} from "../public/icon-arrow"

function App() {
  const [birthday, setBirthday] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })

  const [retirement, setRetirement] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })

  function handleInputBirthday(e){
    const {name, value} = e.target
    setBirthday((prev)=>({
      ...prev,
      [name]: value,
    }))
  }


  function handleInputRetirement(e){
    const {name, value} = e.target
    setRetirement((prev) => ({
      ...prev, 
      [name]: value,
    }))
  }

  function handleBirthdaySubmit(e){
    e.preventDefault()
    console.log("bday", birthday)
    timeChange()
  }

  function handleRetirementSubmit(e){
    e.preventDefault()
    console.log("retirement", retirement)
  }

  function timeChange(){
    const today = new Date()
    let month = today.getMonth()+1
    let day = today.getDate()
    let year = today.getFullYear()
    
    if (month < parseInt(birthday.month)){
       year -= 1
       month = (month + 12) - birthday.month
    } 
      if (day < birthday.day){
        month -= 1
        day = (day +30) - birthday.day
      }
   
    else if (day < parseInt(birthday.day)){
      month -=1
      day = (day +30) - birthday.day
    } else {
      year = year - birthday.year
      month = month - birthday.month
      day = day - birthday.day
    }
 
    setBirthday(({
      year: year,
      month: month,
      day: day
    }))
  }


  return (
    <>
    <h2>Today's Date:  {today.toDateString()}</h2>

    <div className="app">
      <div className="age-container">
        <form className="form-container" onSubmit={handleBirthdaySubmit}>
          <div className="birthday">
            <h3 className="input-title">Birthday Date:</h3>

            <label htmlFor="birthday-day"> Day: </label>
            <input type="number" className="input-dimensions" id="birthday-day" name="day" value={birthday.day} onChange={handleInputBirthday}/>
              
            <label htmlFor="birthday-month"> Month: </label>
            <input type="number" className="input-dimensions" id="birthday-month" name="month" value={birthday.month} onChange={handleInputBirthday}/>
            
            <label htmlFor="birthday-year"> Year: </label>
            <input type="number" className="input-dimensions" id="birthday-year" name="year" value={birthday.year} onChange={handleInputBirthday}/>
          </div>
          <button>Submit</button>
        </form>
      </div>

      <div className="display-container poppins-bold">
        <div className="display-age">
          <h1>{birthday.year} Years</h1>
          <h1>{birthday.month} Months</h1>
          <h1>{birthday.day} Days</h1>
        </div>
      </div>

      {/* <img src="icon-arrow" alt="divider" /> */}
      <div className="retirement-container">
        <form className="form-container" onSubmit={handleRetirementSubmit}>
          <div className="retirement-goal">
            <h3 className="input-title">Desired Retirement Date</h3>

            <label htmlFor="retirement-day"> Day: </label>
            <input type="number" className="input-dimensions" id="retirement-day" name="day" value={retirement.day} onChange={handleInputRetirement} />
              
            <label htmlFor="retirement-month"> Month: </label>
            <input type="number" className="input-dimensions" id="retirement-month" name="month" value={retirement.month} onChange={handleInputRetirement} />

            <label htmlFor="retirement-year"> Year: </label>
            <input type="number" className="input-dimensions" id="retirement-year" name="year" value={retirement.year} onChange={handleInputRetirement} />
          </div>
          <button>Submit</button>
        </form>
      </div>

      <div className="display-container poppins-bold">
        <div className="display-retirement-countdown">
          <h1>{retirement.year} Years</h1>
          <h1>{retirement.month} Months</h1>
          <h1>{retirement.day} Days</h1>
        </div>
      </div>
  </div>
  </>
  )
}

export default App
