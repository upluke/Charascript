import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import initialData from "../database/allData";
import NameContainer from "./NameContainer";
import ProfileContainer from "./ProfileContainer";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import Introduction from "./Introduction";
import Grid from "@material-ui/core/Grid";
import ResultCard from "./ResultCard";
import Countdown from "react-countdown";
import Typography from "@material-ui/core/Typography";
const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#2A363B",
    color: "#fff",
    minHeight: "100vh",
    maxHeight: "auto",
  },
  content: {
    padding: theme.spacing(5),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nameAndProfileContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  countDownContainer: {
    marginTop: 50,
  },
  resultContainer: {
    height: "72px",
    width: "100%",
    textAlign: "center",
    margin: "50px auto 0 auto",
  },
}));

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [characters, setCharacters] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const { userName, userEmail } = userInfo;
  const [isResultShown, setResultShown] = useState(false);
  const [currentProfiles, setCurrentProfiles] = useState([]);

  const handleCloseResultCard = () => {
    setResultShown(false);
    setTimeout(() => {
      resetQuestions();
    }, 100);
  };

  const handleUserInfoChange = (inputKey, value) => {
    let userInfoCopy = { ...userInfo };
    userInfoCopy[inputKey] = value;
    setUserInfo(userInfoCopy);
  };

  // get names from colections
  const getCollectionNamesAndProfiles = (chosenCharacters) => {
    let tmpChas = initialData.names.reduce((accumulator, name) => {
      if (chosenCharacters.includes(name.profileId)) {
        accumulator.push(name);
      }
      return accumulator;
    }, []);

    setCharacters(shuffle(tmpChas));

    let tmpProfs = initialData.profiles.reduce((accumulator, profile) => {
      if (chosenCharacters.includes(profile.profileId)) {
        accumulator.push(profile);
      }
      return accumulator;
    }, []);

    setProfiles(tmpProfs);
    setCurrentProfiles(tmpProfs);
  };

  React.useEffect(() => {
    if (characters.length < 1) {
      getCollectionNamesAndProfiles(initialData.collections[0].characters);
    }
  }, [characters.length]);

  // styling functions
  const handleDrawerOpen = () => {
    if (userName && userEmail) setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleShowResult = () => {
    setResultShown(true);
  };

  const resetQuestions = () => {
    getCollectionNamesAndProfiles(initialData.collections[0].characters);
  };

  console.log("char: ", characters);
  console.log("profle: ", profiles);

  const countDownRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      handleShowResult();
      return null;
    } else {
      // Render a countdown
      return (
        <Grid item xs={12} className={classes.countDownContainer}>
          <Typography variant="h6">
            {`Your still have ${minutes} minutes and ${seconds} seconds to complete the test below`}
          </Typography>
          <Typography variant="body1" color="error">
            You will be automatically redirect to "Result Page" after this !!!
          </Typography>
        </Grid>
      );
    }
  };

  const countDownTimer = characters.length * 30 * 1000;

  const renderResult = () => {
    return isResultShown && open ? (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ResultCard
            handleCloseResultCard={handleCloseResultCard}
            characters={characters}
            currentProfiles={currentProfiles}
            setCurrentProfiles={setCurrentProfiles}
          />
        </Grid>
      </Grid>
    ) : null;
  };

  const renderContent = () => {
    if (open) {
      if (!isResultShown) {
        return (
          <Grid container spacing={2}>
            <Countdown
              date={Date.now() + countDownTimer}
              renderer={countDownRenderer}
            />
            <Grid item xs={4}>
              <div style={{ marginTop: "3rem" }}>
                <NameContainer characters={characters} />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div style={{ marginTop: "3rem" }}>
                <ProfileContainer
                  profiles={profiles}
                  setCurrentProfiles={setCurrentProfiles}
                />
              </div>
            </Grid>
          </Grid>
        );
      }
    } else {
      return (
        <Introduction
          handleUserInfoChange={handleUserInfoChange}
          handleDrawerOpen={handleDrawerOpen}
          userInfo={userInfo}
        />
      );
    }
  };

  console.log("profiles: ", profiles);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* header component */}
      <TopNav open={open} handleDrawerOpen={handleDrawerOpen} />
      {/* drawer component */}
      <LeftNav
        open={open}
        handleDrawerClose={handleDrawerClose}
        getCollectionNamesAndProfiles={getCollectionNamesAndProfiles}
        userInfo={userInfo}
        handleShowResult={handleShowResult}
        handleCloseResultCard={handleCloseResultCard}
        isResultShown={isResultShown}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {renderResult()}
        <div className={classes.nameAndProfileContainer}>{renderContent()}</div>
      </main>
    </div>
  );
};
