import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const StyledButton = styled(Button)`
  height: 58px;
  width: 100px;
  margin: 15px;
`;
const useStyles = makeStyles({
  root: {
    margin: "3rem",
    maxWidth: 800,
    // height: `calc(100vh - 176px)`,
  },
  title: {
    fontSize: 15,
  },
  textField: {
    marginLeft: 0,
    marginRight: 10,
    width: 250,
  },

  cssLabel: {
    color: "white",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `white !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
});

const Introduction = ({ handleUserInfoChange, handleDrawerOpen, userInfo }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">Introduction</Typography>
      <Typography variant="h6">
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </Typography>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={(e) => {
          handleUserInfoChange("userName", e.target.value);
        }}
        value={userInfo?.userName}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          inputMode: "numeric",
        }}
      />
      <TextField
        id="standard-email"
        label="Email"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={(e) => {
          handleUserInfoChange("userEmail", e.target.value);
        }}
        value={userInfo?.userEmail}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          inputMode: "numeric",
        }}
      />{" "}
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleDrawerOpen}
      >
        Start
      </StyledButton>
    </div>
  );
};

export default Introduction;
