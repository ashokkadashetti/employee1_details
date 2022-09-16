import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/AddEmp.css";
import { addEmployeeAction } from "./employee/actions/UserAction";
import { dateFormatConvert } from "../service/DateFormatConvert";
import makeStyles from "../useStyleComponent/UseStyle";

function AddEmployeeComponent({ handleOnClick, empDetails }) {
  const classes = makeStyles();
  const dispatch = useDispatch();

  const [addEmployee, setAddEmployee] = useState({
    empId: "",
    name: "",
    doj: dateFormatConvert(new Date()),
    dojInput: new Date(),
    tech: "",
  });

  const handleOnClose = () => {
    handleOnClick({ flag: false });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleOnClick({ flag: false });
    empDetails[0]?.tech
      ? dispatch(
          addEmployeeAction({
            empId: addEmployee.empId,
            name: addEmployee.name,
            doj: addEmployee.doj,
            tech: addEmployee.tech,
          })
        )
      : dispatch(
          addEmployeeAction({
            empId: addEmployee.empId,
            name: addEmployee.name,
            doj: addEmployee.doj,
          })
        );
  };

  const handleDatePicker = (event) => {
    setAddEmployee({
      ...addEmployee,
      doj: dateFormatConvert(event ? event : addEmployee.dojInput),
      dojInput: event,
    });
  };

  return (
    <div className="popup">
      <div className="modal-content">
        <Button
          variant="text"
          className={classes.close}
          onClick={handleOnClose}
        >
          close
        </Button>
        <form className="form-class" onSubmit={handleOnSubmit}>
          <h2>Add Employee</h2>
          <div>
            <TextField
              required
              id="outlined-required"
              label="EmpId"
              InputProps={{ inputProps: { style: { height: 0 } } }}
              onChange={(event) =>
                setAddEmployee({ ...addEmployee, empId: event.target.value })
              }
            />
          </div>
          <br />

          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              InputProps={{ inputProps: { style: { height: 0 } } }}
              onChange={(event) =>
                setAddEmployee({ ...addEmployee, name: event.target.value })
              }
            />
          </div>
          <br />

          {empDetails[0]?.tech ? (
            <div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Tech"
                  InputProps={{ inputProps: { style: { height: 0 } } }}
                  onChange={(event) =>
                    setAddEmployee({ ...addEmployee, tech: event.target.value })
                  }
                />
              </div>
              <br />
            </div>
          ) : (
            <></>
          )}

          <div>
            <label>Date Of Joining : </label>
            <DatePicker
              selected={addEmployee.dojInput}
              onChange={handleDatePicker}
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <Button type="submit" variant="contained" className={classes.root}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeeComponent;
