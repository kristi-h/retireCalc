import Joi from "joi-browser";
import React from "react"


export default function ValidateForm({calcBirthday}){
    const [birthday, setBirthday] = React.useState({
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
        setBirthday({
            year: "",
            month: "",
            day: ""
        });

    }

    function handleInputBirthday(e){
        const {name, value} = e.target
        let errorData = { ...errors };
        const errorMessage = validateProperty(e);
        if (errorMessage) {
            errorData[name] = errorMessage;
        } else {
            delete errorData[name];
        }
        setBirthday((prev)=>({
          ...prev,
          [name]: parseInt(value)  ///converting string type to number type, will show warning on ""input
        }))
        setErrors(errorData);
      }
    
      function handleBirthdaySubmit(e){
        console.log("bday", birthday)
        validateDate(e)
        calcBirthday(birthday)
        clearForm()
      }
    
    const [errors, setErrors] = React.useState({});
    const schema = {
        year: Joi.number().integer().max(2024).min(1920),
        month: Joi.number().integer().max(12).min(1),
        day: Joi.number().integer().max(31).min(1)
    }
    const validateDate = (e) => {
        e.preventDefault();
       
        const result = Joi.validate(birthday, schema, {
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
            <form className="form-container" onSubmit={handleBirthdaySubmit}>
            <div className="birthday">
                <h3 className="input-title">Birthday Date:</h3>
                
                <label htmlFor="birthday-day"> Day: </label>
                <input type="number" className="input-dimensions" id="birthday-day" name="day" value={birthday.day} onChange={handleInputBirthday}/>
                {errors.month && (
                    <div className="error">
                        {errors.month}
                    </div>
                )}
                <label htmlFor="birthday-month"> Month: </label>
                <input type="number" className="input-dimensions" id="birthday-month" name="month" value={birthday.month} onChange={handleInputBirthday}/>
                {errors.day && (
                    <div className="error">
                        {errors.day}
                    </div>
                )}
                <label htmlFor="birthday-year"> Year: </label>
                <input type="number" className="input-dimensions" id="birthday-year" name="year" value={birthday.year} onChange={handleInputBirthday}/>
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