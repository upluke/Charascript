import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CardHeader from "@material-ui/core/CardHeader";

import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import { red } from "@material-ui/core/colors";
import DoneIcon from "@material-ui/icons/Done";

export default ({ profile, checking, index }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "800px",
      minHeight: "72px",
      marginBottom: 20,
      textAlign: "center",
      cursor: "pointer",
      backgroundColor: `${checking ? "white" : "grey"}`,
    },
    title: {
      fontSize: 15,
    },

    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        onClick={handleExpandClick}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {checking ? <DoneIcon /> : <CloseIcon />}
          </Avatar>
        }
        title={`${profile.substring(0, 25)}...`}
        subheader={expanded ? "Click again to close it" : "Click to see more"}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent onClick={handleExpandClick}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {profile}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
