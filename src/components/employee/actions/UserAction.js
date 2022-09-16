import {
  ADD_DEPERTMENT,
  ADD_EMPLOYEE_ACTION,
  DELETE_EMPLOYEE,
  DELETE_MULTIPLE_EMP,
  DEPT_ID,
  EDIT_EMPLOYEE,
  EMP_COUNT,
} from "../types/UserType";

export const addEmployeeAction = (details = {}) => {
  return {
    type: ADD_EMPLOYEE_ACTION,
    payload: details,
  };
};

export const addDeptId = (deptId = 0) => {
  return {
    type: DEPT_ID,
    payload: deptId,
  };
};

export const empCountAction = (empCount = 0) => {
  return {
    type: EMP_COUNT,
    payload: empCount,
  };
};

export const editEmployeeAction = (editedEmployee = {}) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};

export const deleteEmployeeAction = (deleteEmp = {}) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: deleteEmp,
  };
};

export const addDepertmentAction = (addDept = {}) => {
  return {
    type: ADD_DEPERTMENT,
    payload: addDept,
  };
};

export const deleteMultiEmployeeAction = (ids = []) => {
  return {
    type: DELETE_MULTIPLE_EMP,
    payload: ids,
  };
};
