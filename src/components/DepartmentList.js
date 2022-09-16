import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, DialogContent } from "@mui/material";

import { addDeptId } from "./employee/actions/UserAction";
import AddDepartment from "./AddDepartment";

function DeptDetails({ handleOnDepartmentChange }) {
  const dispatch = useDispatch();
  const { data, deptartmentId } = useSelector((state) => state);
  const [addDeptOpen, setAddDeptOPen] = useState(false);

  const handleOnClick = (deptId) => {
    dispatch(addDeptId(deptId));
    handleOnDepartmentChange(deptId);
  };

  const handleOnAddDepartmentClick = (event) => {
    setAddDeptOPen(event);
  };

  return (
    <div className="nav-bar">
      <h2 className="nav-text">Department List</h2>
      {addDeptOpen ? (
        <></>
      ) : (
        <div>
          <button className="add-dept" onClick={() => setAddDeptOPen(true)}>
            Add Department
          </button>
        </div>
      )}
      <div>
        {data?.map((item) => {
          return (
            <div key={item.deptId} className="nav-text">
              <a
                className={
                  deptartmentId == item.deptId ? "link-text" : "highlight"
                }
                href="#"
                onClick={() => handleOnClick(item.deptId)}
              >
                {item.deptId} {item.deptDetails.deptName}
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <Dialog open={addDeptOpen}>
          <DialogContent>
            <AddDepartment
              handleOnAddDepartmentClick={handleOnAddDepartmentClick}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default DeptDetails;
