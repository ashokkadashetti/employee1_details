import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

import { addDepertmentAction } from "./employee/actions/UserAction";
import makeStyles from "../useStyleComponent/UseStyle";

function AddDepartment({ handleOnAddDepartmentClick }) {
  const dispatch = useDispatch();
  const classes = makeStyles();
  const [deptId, setDeptId] = useState("");
  const [deptName, setDeptName] = useState("");
  const [deptManager, setDeptManager] = useState("");

  const handleOnClick = () => {
    handleOnAddDepartmentClick(false);
  };

  const handleOnSubmit = () => {
    const data = {
      deptId: deptId,
      deptDetails: {
        deptName: deptName,
        deptManager: deptManager,
        empDetails: [],
      },
    };
    dispatch(addDepertmentAction(data));
    handleOnAddDepartmentClick(false);
  };

  return (
    <div>
      <form className="form-class" onSubmit={handleOnSubmit}>
        <Button
          className={classes.close}
          variant="contained"
          onClick={handleOnClick}
        >
          close
        </Button>
        <h2>Add Department</h2>
        <div>
          <TextField
            required
            id="outlined-required"
            label="DeptId"
            InputProps={{ inputProps: { style: { height: 0 } } }}
            onChange={(e) => setDeptId(e.target.value)}
          />
        </div>
        <br />

        <div>
          <TextField
            required
            id="outlined-required"
            label="DeptName"
            InputProps={{ inputProps: { style: { height: 0 } } }}
            onChange={(e) => setDeptName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <TextField
            required
            id="outlined-required"
            label="DeptManager"
            InputProps={{ inputProps: { style: { height: 0 } } }}
            onChange={(e) => setDeptManager(e.target.value)}
          />
        </div>
        <br />

        <Button className={classes.root} type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddDepartment;
