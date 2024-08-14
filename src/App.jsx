import { useState } from 'react'
import './App.css'
// import {icon-arrow} from "../public/icon-arrow"

function App() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0, 
    hours: 0, 
    minutes: 0
  })

  return (
    <>
      <div className="form-container">
        <form>
          <div className="birthday">
            <h3 className="input-title">Birthday</h3>
            <label> day:
              <input type="text" className="input-dimensions" />
            </label>
            <label> month:
              <input type="text" className="input-dimensions" />
            </label>
            <label> year:
              <input type="text" className="input-dimensions" />
            </label>
          </div>

          <div className="retirement-goal">
            <h3 className="input-title">Desired retirement</h3>
            <label>  day:
              <input type="text" className="input-dimensions" />
            </label>
            <label> month:
              <input type="text" className="input-dimensions" />
            </label>
            <label> year:
              <input type="text" className="input-dimensions" />
            </label>
          </div>
        </form>
      </div>

     {/* <img src="icon-arrow" alt="divider" /> */}

      <div className="display-container poppins-bold">
        <h1>{timeLeft.years} Years</h1>
        <h1>{timeLeft.months} Months</h1>
        <h1>{timeLeft.days} Days</h1>
        <h1>{timeLeft.hours} Hours</h1>
        <h1>{timeLeft.minutes} Minutes</h1>

      </div>
    </>
  )
}

export default App
