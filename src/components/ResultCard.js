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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ResultPdf from "./ResultPdf";
import Button from "@material-ui/core/Button";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    minWidth: 800,
    minHeight: 800,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  reviewPDFButtonContainer: {
    margin: 10,
  },
}));

export default function ResultCard({
  handleCloseResultCard,
  characters,
  currentProfiles,
  userInfo,
}) {
  const classes = useStyles();

  const resultCounter = () => {
    let count = 0;
    let profilesWithChecking = cloneDeep(currentProfiles);
    characters.forEach((character, index) => {
      profilesWithChecking[index].character = character.name;
      if (character.profileId === currentProfiles[index].profileId) {
        count = count + 1;
        profilesWithChecking[index].checking = true;
      }
    });

    return { count, profilesWithChecking };
  };

  console.log(resultCounter());

  const handleClose = () => {
    handleCloseResultCard();
  };

  const result = resultCounter();

  const percentage = (result.count / characters.length) * 100;

  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
    handleClose();
  };

  const resultTimeStamp = `${moment().format("MMMM Do YYYY, h:mm:ss a")}`;
  const resultMessage = `Your score is ${percentage.toFixed(
    2
  )}% ! You answered ${result.count} of ${
    characters.length
  } questions correctly. `;

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          }
          title="Your Testing Result Down Below"
          subheader={resultTimeStamp}
        />

        <CardContent>
          <Typography variant="h6" color="error" component="p">
            {resultMessage}
          </Typography>
          <div>
            <Button
              className={classes.reviewPDFButtonContainer}
              variant="contained"
              color="secondary"
              onClick={handleModalOpen}
            >
              review the result in PDF
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleModalClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">Testing Result PDF</h2>
                  <p id="transition-modal-description">
                    Please move around your mouse to show the toolbar for
                    printing or downloading this PDF
                  </p>
                  <ResultPdf
                    userInfo={userInfo}
                    result={result}
                    resultTimeStamp={resultTimeStamp}
                    resultMessage={resultMessage}
                  />
                </div>
              </Fade>
            </Modal>
          </div>
          <Typography variant="body1" color="error" component="p">
            Once your click the button upward or leave (turn off) the result
            card all your test will be reset !!!
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
