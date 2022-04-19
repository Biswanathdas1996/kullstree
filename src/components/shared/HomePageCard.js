import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="/assets/images/341122-rural-women.jpg"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
