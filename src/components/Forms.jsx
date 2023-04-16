import React, { useState } from "react";
import "./Forms.css";
import Alert from "./custom alerts/Alert";
import Card from "./UI/Card";

const Forms = ({ newRecord }) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [showEmptyInputAlert, setshowEmptyInputAlert] = useState(false);
  const [showWorngInputAlert, setshowWorngInputAlert] = useState(false);

  const nameHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputName === "" || inputAge === "") {
      setshowEmptyInputAlert(true);
    } else if(inputAge<1){
      setshowWorngInputAlert(true);
    }
    
    else{
      const newData = {
        id: Math.round((Math.random()*99999999)).toString(),
        name: inputName,
        age: inputAge,
      };
      newRecord(newData);
      setInputName("");
      setInputAge("");
    }
  };

  const handleAlertClose = () => {
    setshowEmptyInputAlert(false);
    setshowWorngInputAlert(false);
  };

  return (
    <>
      {showEmptyInputAlert && <Alert message="Please enter both Name and Age." onClose={handleAlertClose} />}
      {showWorngInputAlert && <Alert message="Please enter a valid Age (>0)." onClose={handleAlertClose} />}
      <Card >
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="username">
          <label htmlFor="">Username:</label>
          <input type="text" className="form-input" onChange={nameHandler} value={inputName} />
        </div>
        <div className="age">
          <label htmlFor="">Age(years):</label>
          <input type="number" className="form-input" onChange={ageHandler} value={inputAge} />
        </div>
        <div className="submit">
          <input type="submit" />
        </div>
      </form>
     </Card>
    </>
  );
};

export default Forms;
