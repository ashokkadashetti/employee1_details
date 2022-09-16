import React from "react";
import Button from "@mui/material/Button";

import makeStyles from '../useStyleComponent/UseStyle'

function DeleteConfirmPopup({ handleOnDeleteClick }) {
  const classes = makeStyles();

  return (
    <div>
      <p>You wanna delete ?</p>
      <Button
        variant="text"
        className={classes.cancle}
        onClick={() => handleOnDeleteClick({ flag: false })}
      >
        Cancel
      </Button>
      <Button
        variant="text"
        className={classes.confirm}
        onClick={() => handleOnDeleteClick({ flag: false, deleteFlag: true })}
      >
        Confirm
      </Button>
    </div>
  );
}

export default DeleteConfirmPopup;
