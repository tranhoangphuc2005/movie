import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const Movies = (props) => {
  console.log(props);

  return (
    <>
      {props.movies.map((movie) => (
        // <div> {movie.Title} </div>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={movie.Title}
            subheader={movie.Year}
          />
          <CardMedia
            image={movie.Poster}
            style={{
              width: "200px",
              height: "100px",
            }}
            title="Paella dish"
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              test1
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>test 6</Typography>
              <Typography paragraph>test 2</Typography>
              <Typography paragraph>Htest 3</Typography>
              <Typography paragraph>test 4</Typography>
              <Typography>test 5</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
};

export default Movies;
