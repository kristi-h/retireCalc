import { useState } from 'react'
import './App.css'

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
            <label> Birth year:
              <input type="text" />
            </label>
            <label> Birth month:
              <input type="text" />
            </label>
            <label> Birth date:
              <input type="text" />
            </label>
          </div>

          <div className="retirement-goal">
            <label> Desired retirement year:
              <input type="text" />
            </label>
            <label> Desired retirement month:
              <input type="text" />
            </label>
            <label> Desired retirement date:
              <input type="text" />
            </label>
          </div>
        </form>
        
      </div>
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
