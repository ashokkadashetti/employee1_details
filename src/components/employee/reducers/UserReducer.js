import {
  ADD_DEPERTMENT,
  ADD_EMPLOYEE_ACTION,
  DELETE_EMPLOYEE,
  DELETE_MULTIPLE_EMP,
  DEPT_ID,
  EDIT_EMPLOYEE,
  EMP_COUNT,
} from "../types/UserType";
import Data from "../../../constants/DataComponent";

const initialState = {
  data: Data,
  deptartmentId: "",
  empCount: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_ACTION:
      const countEmp = addEmpData(state, action.payload);
      return {
        ...state,
        empCount: countEmp,
      };
    case DEPT_ID:
      return {
        ...state,
        deptartmentId: action.payload,
      };
    case EMP_COUNT:
      return {
        ...state,
        empCount: action.payload,
      };
    case EDIT_EMPLOYEE:
      updateEmployee(state, action.payload);
      return {
        ...state,
      };
    case DELETE_EMPLOYEE:
      deleteEmployee(state, action.payload);
      return {
        ...state,
      };
    case ADD_DEPERTMENT:
      addDepartment(state, action.payload);
      return {
        ...state,
      };
    case DELETE_MULTIPLE_EMP:
      deleteMultipleEmployee(state, action.payload);
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

function addEmpData(department, payload) {
  const deptRecord = department.data.find(
    (dept) => dept.deptId === department.deptartmentId
  );
  const { empDetails } = deptRecord.deptDetails;
  empDetails.push(payload);
  return empDetails.length;
}

function updateEmployee(state, payload) {
  const empData = state.data.find(
    (dept) => dept.deptId === state.deptartmentId
  );
  const { empDetails } = empData.deptDetails;
  const index = empDetails.findIndex((object) => {
    return object.empId === payload.empId;
  });
  empDetails.splice(index,1, payload);
}

function deleteEmployee(state, payload) {
  const empData = state.data.find(
    (dept) => dept.deptId === state.deptartmentId
  );
  const { empDetails } = empData.deptDetails;
  const index = empDetails.findIndex((object) => {
    return object.empId === payload.empId;
  });
  empDetails.splice(index, 1);
}

function addDepartment(state, payload) {
  const { data } = state;
  data.push(payload);
}

function deleteMultipleEmployee(state, payload) {
  const ids = payload;
  const empData = state.data.find(
    (dept) => dept.deptId === state.deptartmentId
  );
  const { empDetails } = empData.deptDetails;
  ids.map((id) => {
    const index = empDetails.findIndex((object) => {
      return object.empId === parseInt(id);
    });
    empDetails.splice(index, 1);
  });
}

export default userReducer;
