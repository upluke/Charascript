import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import initialData from "../database/allData";
import DraftsIcon from "@material-ui/icons/Drafts";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const StyledButton = styled(Button)`
  height: 58px;

  margin: 20px auto 0 auto;
`;
const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 270,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: "#fff",
    background: "#A8A7A7",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  selected: {
    backgroundColor: "#FF847C !important", // "!important" is used to overide styles
    color: "#2A363B",
    fontWeight: 600,
  },
}));

const LeftNav = ({
  open,
  handleDrawerClose,
  getCollectionNamesAndProfiles,
  userInfo,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedListItem, setSelectedListItem] = React.useState(0);
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <ListItem>
          <ListItemText>Literature</ListItemText>
        </ListItem>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>

      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary={userInfo?.userName} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary={userInfo?.userEmail} />
        </ListItem>
      </List>

      <Divider />
      <List>
        {initialData.collections.map((collection, index) => {
          const text = collection.collectionName;
          return (
            <ListItem
              classes={{ selected: classes.selected }} //overide styles w/ "!important"
              button
              key={text}
              selected={index === selectedListItem}
              onClick={() => {
                getCollectionNamesAndProfiles(collection.characters);
                setSelectedListItem(index);
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <StyledButton variant="contained" color="secondary">
        Submit Your Answer
      </StyledButton>
    </Drawer>
  );
};

export default LeftNav;
