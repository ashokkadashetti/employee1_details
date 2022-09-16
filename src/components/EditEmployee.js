import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";

import { editEmployeeAction } from "./employee/actions/UserAction";
import makeStyles from "../useStyleComponent/UseStyle";
import { dateFormatConvert } from "../service/DateFormatConvert";
import "../styles/AddEmp.css";

function EditEmployee({ handleEditClick, data }) {
  const dispatch = useDispatch();
  const classes = makeStyles();
  const [month, day, year] = data ? data.doj.split("/") : "";
  const date = new Date(year, month - 1, day);

  const [empId, setEmpId] = useState(data ? data.empId : "");
  const [name, setName] = useState(data ? data.name : "");
  const [doj, setDoj] = useState(data ? new Date(date) : new Date());
  const [tech, setTech] = useState(data?.tech ? data.tech : "");

  const handleOnClick = (event) => {
    handleEditClick(event);
  };

  const handleOnSubmitClick = (event) => {
    handleEditClick(event);
  };

  const handleOnSubmit = (event) => {
    const data = {
      flag: false,
      data: { empId: empId, name: name, doj: dateFormatConvert(doj) },
    };
    const data1 = {
      flag: false,
      data: {
        empId: empId,
        name: name,
        doj: dateFormatConvert(doj),
        tech: tech,
      },
    };
    const emp = tech.length > 0 ? data1 : data;
    handleEditClick(emp);
    dispatch(editEmployeeAction(emp.data));
    event.preventDefault();
  };

  return (
    <div className="popup">
      <div className="modal-content">
        <Button
          className={classes.close}
          variant="text"
          onClick={() => handleOnClick({ flag: false })}
        >
          close
        </Button>
        <form className="form-class" onSubmit={handleOnSubmit}>
          <h2>Edit Employee</h2>
          <div>
            <TextField
              value={empId}
              required
              id="outlined-required"
              label="empId"
              InputProps={{ inputProps: { style: { height: 0 } } }}
              onChange={(e) => setEmpId(e.target.value)}
            />
          </div>
          <br />

          <div>
            <TextField
              value={name}
              required
              id="outlined-required"
              label="name"
              InputProps={{ inputProps: { style: { height: 0 } } }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          {data?.tech ? (
            <div>
              <div>
                <TextField
                  value={tech}
                  required
                  id="outlined-required"
                  label="tech"
                  InputProps={{ inputProps: { style: { height: 0 } } }}
                  onChange={(e) => setTech(e.target.value)}
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
              selected={doj}
              onChange={(e) => setDoj(e)}
              name="startDate"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <Button
            className={classes.root}
            type="submit"
            variant="contained"
            onClick={() => handleOnSubmitClick({ flag: false })}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
