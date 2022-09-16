import React from "react";
import { useSelector } from "react-redux";

function DepartmentDetails({ depData }) {
  const { empCount } = useSelector((state) => state);

  return (
    <div>
      <div className="dept-details">
        <h2>Department Details</h2>
        <p>DeptName : {depData?.deptDetails?.deptName}</p>
        <p>NoOfEmp : {empCount}</p>
        <p>DeptManager : {depData?.deptDetails?.deptManager}</p>
      </div>
    </div>
  );
}

export default DepartmentDetails;
