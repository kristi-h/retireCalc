import { useState } from 'react'
import './App.css'
// import {icon-arrow} from "../public/icon-arrow"

function App() {
  const [birthday, setBirthday] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })
  const [age, setAge] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })
  const [retirement, setRetirement] = useState({
    year: 0, 
    month: 0,
    day: 0,
  })
  const [retireCountdown, setRetireCountdown] = useState({
    years: 0,
    months: 0,
    days: 0, 
  })

  return (
    <div className="app">
      
      <div className="age-container">
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
          </form>
        </div>

        <div className="display-container poppins-bold">
          <div className="display-age">
            <h1>{age.year} Years</h1>
            <h1>{age.month} Months</h1>
            <h1>{age.day} Days</h1>
          </div>
        </div>
      </div>

     {/* <img src="icon-arrow" alt="divider" /> */}
     <div className="retirement-container">
      <div className="form-container">
          <form>
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

      <div className="display-container poppins-bold">
          <div className="display-retirement-countdown">
            <h1>{retireCountdown.years} Years</h1>
            <h1>{retireCountdown.months} Months</h1>
            <h1>{retireCountdown.days} Days</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
