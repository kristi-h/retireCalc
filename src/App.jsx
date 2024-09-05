import { useState } from 'react'
import './App.css'
// import {icon-arrow} from "../public/icon-arrow"
import ValidateForm from './ValidateForm'


function App() {
 
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

  const today = new Date()
  const todayMonth = today.getMonth() + 1
  const todayDay = today.getDate()
  const todayYear = today.getFullYear()


  function calcBirthday(birthday){
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

  function calcRetirement(retirement){
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
      <div className="age-container col-1">
        <ValidateForm isBirthday={true} calcBirthday={calcBirthday} calcRetirement={calcRetirement}/>
        <div className="display-container poppins-bold">
          <div className="display-age">
            <h1>{age.year} Years</h1>
            <h1>{age.month} Months</h1>
            <h1>{age.day} Days</h1>
          </div>
        </div>
      </div>


      {/* <img src="icon-arrow" alt="divider" /> */}
      <div className="retirement-container col-2">
        <ValidateForm isBirthday={false} calcBirthday={calcBirthday} calcRetirement={calcRetirement}/>
      <div className="display-container poppins-bold">
        <div className="display-retirement-countdown">
          <h1>{retirementCountdown.year} Years</h1>
          <h1>{retirementCountdown.month} Months</h1>
          <h1>{retirementCountdown.day} Days</h1>
        </div>
      </div>
      </div>

  </div>
  </>
  )
}

export default App
