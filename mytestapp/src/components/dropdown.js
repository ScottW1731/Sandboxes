import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [components, setcomponents] = React.useState("");
  const handleChange = event => {
    setcomponents(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">components</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={components}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
        {ComponentsArray.map(part=><option value ={part}>{part}</option>)}
        
          {/* <option value={"test"}></option> */}
          {/* <option value={"Motherboard"}>Motherboard</option>
          <option value={"Memory"}>Memory</option>
          <option value={"Storage"}>Storage</option>
          <option value={"VideoCard"}>VideoCard</option>
          <option value={"Case"}>Case</option>
          <option value={"PowerSupply"}>PowerSupply</option>
          <option value={"OpticalDrive(s)"}>OpticalDrive(s)</option>
          <option value={"Monitor"}>Monitor</option> */}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

const ComponentsArray = [
      "Cpu Cooler",
      "Motherboard",
      "Memory",
      "Storage",
      "Video Card",
      "Case",
      "Power Supply",
      "Optical drive(s)",
      "OS",
      "Software",
      "Case Fan(s)",
      "Monitor",
      "External Storage",
      "Epansion Cards/ Networking",
]

