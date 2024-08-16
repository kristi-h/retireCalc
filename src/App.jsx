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
  console.log("bday", birthday)

  function handleInputRetirement(e){
    const {name, value} = e.target
    setRetirement((prev) => ({
      ...prev, 
      [name]: value,
    }))
  }
  console.log("retirement", retirement)

  return (
    <div className="app">
      
      <div className="age-container">
        <div className="form-container">
          <form>
            <div className="birthday">
              <h3 className="input-title">Birthday</h3>
              <label> day:
                <input type="text" className="input-dimensions" name="day" value={birthday.day} onChange={e=>handleInputBirthday(e, name)}/>
              </label>
              <label> month:
                <input type="text" className="input-dimensions" name="month" value={birthday.month} onChange={e=>handleInputBirthday(e, name)}/>
              </label>
              <label> year:
                <input type="text" className="input-dimensions" name="year" value={birthday.year} onChange={e=>handleInputBirthday(e, name)}/>
              </label>
            </div>
          </form>
        </div>

        <div className="display-container poppins-bold">
          <div className="display-age">
            <h1>{birthday.year} Years</h1>
            <h1>{birthday.month} Months</h1>
            <h1>{birthday.day} Days</h1>
          </div>
        </div>
      </div>

     {/* <img src="icon-arrow" alt="divider" /> */}
     <div className="retirement-container">
      <div className="form-container">
            <div className="retirement-goal">
              <h3 className="input-title">Desired retirement</h3>
              <label>  day:
                <input type="text" className="input-dimensions" name="day" value={retirement.day} onChange={e=>handleInputRetirement(e, name)} />
              </label>
              <label> month:
                <input type="text" className="input-dimensions" name="month" value={retirement.month} onChange={e=>handleInputRetirement(e, name)} />
              </label>
              <label> year:
                <input type="text" className="input-dimensions" name="year" value={retirement.year} onChange={e=>handleInputRetirement(e, name)} />
              </label>
            </div>
          </form>
        </div>

      <div className="display-container poppins-bold">
          <div className="display-retirement-countdown">
            <h1>{retirement.years} Years</h1>
            <h1>{retirement.months} Months</h1>
            <h1>{retirement.days} Days</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
