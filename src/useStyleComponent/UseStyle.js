import { makeStyles } from "@mui/styles";

export default makeStyles({
    table: {
        maxWidth: 200,
        minWidth: 650,
      },
      throot: {
        backgroundColor: "gray",
      },
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 30,
        padding: "0 30px",
      },
      close: {
        height: 25,
        maxWidth: "10px",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      },
      confirm: {
        height: 25,
        width: 100,
      },
      cancle: {
        height: 25,
        maxWidth: "10px",
      },
})
