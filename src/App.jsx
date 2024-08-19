import { useState, useEffect } from 'react'
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
 
  const [age, setAge] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })
  
  const [retirementCountdown, setRetirementCoutdown] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })

  const [errors, setErrors] = useState({error: null})

  const today = new Date()
  const todayMonth = today.getMonth() + 1
  const todayDay = today.getDate()
  const todayYear = today.getFullYear()


  function handleInputBirthday(e){
    const {name, value} = e.target
    setBirthday((prev)=>({
      ...prev,
      [name]: parseInt(value),  ///converting string type to number type, will show warning on ""input
    }))
  }

  function handleInputRetirement(e){
    const {name, value} = e.target
    setRetirement((prev) => ({
      ...prev, 
      [name]: parseInt(value),
    }))
  }

  function validateDate(dateObj) {
    if ((0 > dateObj.day > 31) || (0 > dateObj.month > 12) || (`${dateObj.year}`.length !== 4)) {
      console.log(dateObj)
      setErrors({error :"Please input a valid date."})
    } 
    // else {
    //   setErrors({error: null})
    // }
  }


  function handleBirthdaySubmit(e){
    e.preventDefault()
    console.log("bday", birthday)
    validateDate(birthday)
    console.log(errors)
    // const newErrors = validateDate(birthday)
    // console.log("return", newErrors)
    // setErrors(newErrors)
    console.log("state error", errors)
    if (errors.error === null) {
      alert("Submit successfully")
      calcBirthday()
    } else {
      alert("Failed. Check validation rules")
    }
  }

  function handleRetirementSubmit(e){
    e.preventDefault()
    console.log("retirement", retirement)
    calcRetirement()
  }


  function calcBirthday(){
    let yearDiff = todayYear - birthday.year
    let monthDiff = 0;
    let dayDiff = 0;

    if (todayMonth < birthday.month){
      yearDiff -= 1;
      monthDiff = 12;
    }
      
    if (todayDay < birthday.day){
      monthDiff -= 1;
      dayDiff = 30;
    }

    monthDiff = monthDiff + todayMonth - birthday.month
    dayDiff = dayDiff + todayDay - birthday.day

    setAge(({
      year: yearDiff,
      month: monthDiff,
      day: dayDiff
    }))
  }

  function calcRetirement(){
    let yearDiff = retirement.year - todayYear
    let monthDiff = 0;
    let dayDiff = 0;

    if (retirement.month < todayMonth){
      yearDiff -= 1;
      monthDiff = 12;
    }
      
    if (retirement.day < todayDay){
      monthDiff -= 1;
      dayDiff = 30;
    }

    monthDiff = monthDiff + retirement.month - todayMonth;
    dayDiff = dayDiff + retirement.day - todayDay;

    setRetirementCoutdown(({
      year: yearDiff,
      month: monthDiff,
      day: dayDiff
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
          {/* {Object.keys(errors).length > 0 ? <p>{errors.error}</p> : <p>Submitted successfully</p>} */}
          <button>Submit</button>
        </form>
      </div>

      <div className="display-container poppins-bold">
        <div className="display-age">
          <h1>{age.year} Years</h1>
          <h1>{age.month} Months</h1>
          <h1>{age.day} Days</h1>
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
          <h1>{retirementCountdown.year} Years</h1>
          <h1>{retirementCountdown.month} Months</h1>
          <h1>{retirementCountdown.day} Days</h1>
        </div>
      </div>
  </div>
  </>
  )
}

export default App
