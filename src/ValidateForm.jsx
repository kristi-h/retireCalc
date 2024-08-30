import Joi from "joi-browser";
import React from "react"


export default function ValidateForm({calcBirthday, calcRetirement, isBirthday}){
    const [date, setDate] = React.useState({
        year: 0, 
        month: 0,
        day: 0,
    })

    const birthdaySchema = {
        year: Joi.number().integer().max(2024).min(1920),
        month: Joi.number().integer().max(12).min(1),
        day: Joi.number().integer().max(31).min(1)
    }

    const retirementSchema = {
        year: Joi.number().integer().max(2074).min(2024),
        month: Joi.number().integer().max(12).min(1),
        day: Joi.number().integer().max(31).min(1)
    }

    const validateProperty = (e) => {
        const { name, value } = e.target;
        const obj = { [name]: value };
        let subSchema;
        if (isBirthday) {
            subSchema = { [name]: birthdaySchema[name] };
        } else {
            subSchema = { [name]: retirementSchema[name] };
        };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
    };

    const clearForm = () => {
        setDate({
            year: "",
            month: "",
            day: ""
        });

    }

    function handleInput(e){
        const {name, value} = e.target
        let errorData = { ...errors };
        const errorMessage = validateProperty(e);
        if (errorMessage) {
            errorData[name] = errorMessage;
        } else {
            delete errorData[name];
        }
        setDate((prev)=>({
          ...prev,
          [name]: parseInt(value)  ///converting string type to number type, will show warning on ""input
        }))
        setErrors(errorData);
      }
    
    function handleSubmit(e){
        validateDate(e)
        if (isBirthday){
            calcBirthday(date)
        } else {
            calcRetirement(date)
        }
        clearForm()
    }
    
    const [errors, setErrors] = React.useState({});

    const validateDate = (e) => {
        e.preventDefault();
        let result
        if (isBirthday) {
            result = Joi.validate(date, birthdaySchema, {
                abortEarly: false,
            })
        } else {
            result = Joi.validate(date, retirementSchema, {
                abortEarly: false,
            })
        }

     
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
            <form className="form-container" onSubmit={handleSubmit}>
            <div className="date-app">
                <h3 className="input-title">{isBirthday ? "Birthday Date:" : "Desired Retirement Date"}</h3>
                
                <label htmlFor="day"> Day: </label>
                <input type="number" className="input-dimensions" id="day" name="day" value={date.day} onChange={handleInput}/>
                {errors.day && (
                    <div className="error">
                        {errors.day}
                    </div>
                )}
                <label htmlFor="month"> Month: </label>
                <input type="number" className="input-dimensions" id="month" name="month" value={date.month} onChange={handleInput}/>
                {errors.month && (
                    <div className="error">
                        {errors.month}
                    </div>
                )}
                <label htmlFor="year"> Year: </label>
                <input type="number" className="input-dimensions" id="year" name="year" value={date.year} onChange={handleInput}/>
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