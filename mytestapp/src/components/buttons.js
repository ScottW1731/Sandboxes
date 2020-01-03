import React from "react";
import { Button } from "@material-ui/core";
import  DeleteIcon  from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';
import {withStyles} from '@material-ui/core/styles';

// https://material-ui.com/styles/basics/
// Hook API
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

// export default function Hook() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Styled with Hook API</Button>;
// }

// Styled components API
// import React from 'react';
// import { styled } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const MyButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });

// export default function StyledComponents() {
//   return <MyButton>Styled Components</MyButton>;
// }

// Higher-order component API
// AKA fancy wrapper passes props

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const styles = {
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// };

// function HigherOrderComponent(props) {
//   const { classes } = props;
//   return <Button className={classes.root}>Higher-order component</Button>;
// }

// HigherOrderComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(HigherOrderComponent);


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
  