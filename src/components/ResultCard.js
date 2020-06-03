import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CancelIcon from "@material-ui/icons/Cancel";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import NameContainer from "./NameContainer";
import ResultProfileContainer from "./ResultProfileContainer";
import { cloneDeep } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    margin: "50px auto 0 auto",
    height: "300px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ResultCard({
  handleCloseResultCard,
  characters,
  currentProfiles,
}) {
  const classes = useStyles();

  const resultCounter = () => {
    let count = 0;
    let profilesWithChecking = cloneDeep(currentProfiles);
    characters.forEach((character, index) => {
      if (character.profileId === currentProfiles[index].profileId) {
        count = count + 1;
        profilesWithChecking[index].checking = true;
      }
    });

    return { count, profilesWithChecking };
  };

  const handleClose = () => {
    handleCloseResultCard();
  };

  const result = resultCounter();

  const percentage = (result.count / characters.length) * 100;

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          }
          title="The Testing Result Down Below"
          subheader={`${moment().format("MMMM Do YYYY, h:mm:ss a")}`}
        />

        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {`Your score is ${percentage.toFixed(2)}% ! You answered ${
              result.count
            } of ${characters.length} questions correctly. `}
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div style={{ marginTop: "3rem" }}>
            <NameContainer characters={characters} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ marginTop: "3rem" }}>
            <ResultProfileContainer profiles={result.profilesWithChecking} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
