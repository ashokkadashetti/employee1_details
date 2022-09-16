import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddNewEmployee from "./AddNewEmployee";
import EmployeeListTable from "./EmployeeListTable";
import DepartmentDetails from "./DepartmentDetails";
import { empCountAction } from "./employee/actions/UserAction";
import makeStyles from "../useStyleComponent/UseStyle";

const EmployeesList = () => {
  const dispatch = useDispatch();
  const classes = makeStyles();
  const [addEmpOpen, setAddEmpOpen] = useState(false);
  const { deptartmentId, data } = useSelector((state) => state);

  const depData = useMemo(
    () => data.find((data) => data.deptId === deptartmentId),
    [deptartmentId, data]
  );

  const { empDetails } = depData?.deptDetails || "";

  useEffect(() => {
    dispatch(empCountAction(empDetails?.length));
  }, [empDetails]);

  const handleOnClick = (event) => {
    setAddEmpOpen(event.flag);
  };

  return (
    <div>
      <div className={"emp-details"}>
        <DepartmentDetails depData={depData} />

        <h2>Employee List</h2>
        {addEmpOpen ? (
          <></>
        ) : (
          <Button
            className={classes.root}
            variant="contained"
            onClick={() => handleOnClick({ flag: true })}
          >
            Add Employee
          </Button>
        )}
        <br />
        <br />

        <EmployeeListTable
          empDetails={empDetails}
          handleOnClick={handleOnClick}
        />
      </div>
      <div>
        <Dialog open={addEmpOpen}>
          <DialogContent>
            <AddNewEmployee
              empDetails={empDetails}
              handleOnClick={handleOnClick}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmployeesList;
