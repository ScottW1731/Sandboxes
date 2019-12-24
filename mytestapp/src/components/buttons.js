import React from "react";
import { Button } from "@material-ui/core";
import  DeleteIcon  from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => (
  {
    button: {color: "red"}
  }

)
// test
const SaveButton = ({classes})=> {
    return(        
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      )
}

const DeleteButton = ({classes})=> {
    return(
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
    )
}

export {DeleteButton,SaveButton,}

// export { withStyles(styles) (SaveButton, DeleteButton)}
/*
mike said something like this
const MyButton = withStyles(style)(({ classes}) => <button className = {classes.button}></button>)

export {MyButton}


*/


// export default function IconLabelButtons() {
//     const classes = useStyles();
  
//     return (
//       <div>
//         <Button
//           variant="contained"
//           color="secondary"
//           className={classes.button}
//           startIcon={<DeleteIcon />}
//         >
//           Delete
//         </Button>
//         {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           endIcon={<Icon>send</Icon>}
//         >
//           Save
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           className={classes.button}
//           startIcon={<SaveIcon />}
//         >
//           Save
//         </Button>
//       </div>
//     );
//   }
  