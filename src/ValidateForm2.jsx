import Joi from "joi-browser";
import React from "react"


export default function ValidateForm2({calcRetirement}){
      const [retirement, setRetirement] = React.useState({
        year: 0, 
        month: 0,
        day: 0,
      })

    const validateProperty = (e) => {
        const { name, value } = e.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
    };

    const clearForm = () => {
        setRetirement({
            year: "",
            month: "",
            day: ""
        });

    }

    function handleInputRetirement(e){
        const {name, value} = e.target
        let errorData = { ...errors };
        const errorMessage = validateProperty(e);
        if (errorMessage) {
            errorData[name] = errorMessage;
        } else {
            delete errorData[name];
        }
        setRetirement((prev)=>({
          ...prev,
          [name]: parseInt(value)  ///converting string type to number type, will show warning on ""input
        }))
        setErrors(errorData);
      }
 
      function handleRetirementSubmit(e){
        console.log("retirement", retirement)
        validateDate(e)
        calcRetirement(retirement)
        clearForm()
      }

    const [errors, setErrors] = React.useState({});
    const schema = {
        year: Joi.number().integer().max(2074).min(2024),
        month: Joi.number().integer().max(12).min(1),
        day: Joi.number().integer().max(31).min(1)
    }
    const validateDate = (e) => {
        e.preventDefault();
       
        const result = Joi.validate(retirement, schema, {
            abortEarly: false,
        })
     
        console.log(result);

        const { error } = result;
        if (!error) {
            return alert("data saved");
        } else {
            const errorData = {};
            for (let item of error.details) {
                const name = item.path[0];
                const message = item.message;
                errorData[name] = message;
            }
            console.log(errors);
            setErrors(errorData);
            return errorData;
        }
    }

    return(
        <div>
            
            <form className="form-container" onSubmit={handleRetirementSubmit}>
                <div className="retirement-goal">
                <h3 className="input-title">Desired Retirement Date</h3>
               
                <label htmlFor="retirement-day"> Day: </label>
                <input type="number" className="input-dimensions" id="retirement-day" name="day" value={retirement.day} onChange={handleInputRetirement} />
                {errors.day && (
                <div className="error">
                    {errors.day}
                </div>
                 )}
                <label htmlFor="retirement-month"> Month: </label>
                <input type="number" className="input-dimensions" id="retirement-month" name="month" value={retirement.month} onChange={handleInputRetirement} />
                {errors.month && (
                <div className="error">
                    {errors.month}
                </div>
                 )}
                <label htmlFor="retirement-year"> Year: </label>
                <input type="number" className="input-dimensions" id="retirement-year" name="year" value={retirement.year} onChange={handleInputRetirement} />
                {errors.year && (
                <div className="error">
                    {errors.year}
                </div>
                 )}
                </div>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}