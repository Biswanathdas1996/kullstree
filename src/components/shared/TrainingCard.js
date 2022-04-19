import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ data, height, assesment }) {
  let history = useNavigate();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={data?.title}
        subheader={data?.publishDate}
      />
      <iframe
        width="100%"
        height={height ? height : `230`}
        src={data?.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>

      {assesment ? (
        <button
          className="btn btn-default btn-secondary"
          style={{ margin: 15, width: "10rem !important" }}
          type="button"
          onClick={() => history("/test")}
        >
          Take Assessment
        </button>
      ) : (
        <button
          className="btn btn-default btn-primary"
          style={{ margin: 15 }}
          type="button"
          //   onClick={() => history("/trainings")}
        >
          Take training
        </button>
      )}

      <h5 style={{ fontSize: 15, margin: 20, float: "right" }}>
        Point:<b>100</b>
      </h5>
    </Card>
  );
}
