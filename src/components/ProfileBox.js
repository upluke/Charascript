import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";

const style = {
  marginBottom: ".5rem",
  cursor: "move",
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "800px",
    minHeight: "72px",
    marginBottom: 20,
    textAlign: "center",
    cursor: "pointer",
  },
  title: {
    fontSize: 15,
  },

  avatar: {
    backgroundColor: "#FF847C",
  },
}));

export default ({
  id,
  profile,
  index,
  moveCard,
  order,
  closeAll,
  setCloseAll,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setCloseAll(false);
  };

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  const width="800px"
  
  drag(drop(ref));

  React.useEffect(() => {
    if (closeAll && expanded === true) {
      setExpanded(!expanded);
    }
    if (isDragging) {
      setCloseAll(true);
    }
  }, [closeAll, expanded, isDragging, setCloseAll]);

  return (
    <div ref={ref} style={{ ...style, opacity,width }}>
      <Card className={classes.root}>
        <CardHeader
          onClick={handleExpandClick}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {Number(order) + 1}
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
    </div>
  );
};
