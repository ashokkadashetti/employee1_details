import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  deleteEmployeeAction,
  deleteMultiEmployeeAction,
  empCountAction,
} from "./employee/actions/UserAction";
import EditEmployee from "./EditEmployee";
import DeleteConfirmPopup from "./DeleteConfirmPopup";
import makeStyles from "../useStyleComponent/UseStyle";

import { checkBoxHandler } from "../service/CheckBoxHandler";

function EmployeeListTable({ empDetails }) {
  const { deptartmentId } = useSelector((state) => state);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    setChecked([]);
  }, [deptartmentId]);

  const dispatch = useDispatch();
  const classes = makeStyles();
  const [editOpen, setEditOpen] = useState(false);
  const [data, setData] = useState({});
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleEditClick = (event) => {
    setEditOpen(event.flag);
    setData(event.data);
  };

  const handleOnDeleteClick = (event) => {
    setData(event?.data ? event.data : data);
    setDeleteOpen(event.flag);
    if (event.deleteFlag) {
      dispatch(deleteEmployeeAction(data));
      dispatch(empCountAction(empDetails.length));
    }
  };

  const handleOnCheckBoxClick = (event) => {
    const checkBoxValues = checkBoxHandler(event, checked);
    setChecked(checkBoxValues);
  };

  const handleOnMultiDeleteClick = () => {
    dispatch(deleteMultiEmployeeAction(checked));
    dispatch(empCountAction(empDetails.length));
    setChecked([]);
  };

  return (
    <div>
      {checked?.length > 0 ? (
        <div>
          <Button className={classes.root} onClick={handleOnMultiDeleteClick}>
            Delete Selected Emp
          </Button>
          <br />
          <br />
        </div>
      ) : (
        <></>
      )}
      <div>
        {empDetails?.length > 0 ? (
          <TableContainer>
            <Table className={classes.table} size="small">
              <TableHead className={classes.throot}>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>EmpId</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>DOJ(mm/dd/yyyy)</TableCell>
                  {empDetails[0].tech ? <TableCell>Tech</TableCell> : <></>}
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {empDetails?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <input
                        type="checkbox"
                        value={row.empId}
                        checked={checked.includes(row.empId.toString())}
                        onChange={handleOnCheckBoxClick}
                      />
                    </TableCell>
                    <TableCell>{row.empId}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.doj}</TableCell>
                    {empDetails[0]?.tech ? (
                      <TableCell>{row.tech}</TableCell>
                    ) : (
                      <></>
                    )}
                    <TableCell>
                      <button
                        disabled={checked.includes(row.empId.toString())}
                        className="edit-button"
                        onClick={() =>
                          handleEditClick({ flag: true, data: row })
                        }
                      >
                        <EditIcon color={checked.includes(row.empId.toString())? "warning" : "action"} />
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                      className="delete-button"
                        disabled={checked.includes(row.empId.toString())}
                        onClick={() =>
                          handleOnDeleteClick({ flag: true, data: row })
                        }
                      >
                        <DeleteIcon color={checked.includes(row.empId.toString())? "warning" : "action"} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h3>No Employees to show</h3>
        )}
      </div>
      <div>
        <Dialog open={editOpen}>
          <DialogContent>
            <EditEmployee handleEditClick={handleEditClick} data={data} />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Dialog open={deleteOpen}>
          <DialogContent>
            <DeleteConfirmPopup handleOnDeleteClick={handleOnDeleteClick} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default EmployeeListTable;
