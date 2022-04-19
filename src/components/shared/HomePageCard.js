import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/assets/images/341122-rural-women.jpg" },
  { url: "/assets/images/slider1.jpg" },
  { url: "/assets/images/four.jpg" },
  { url: "/assets/images/SBI-LOGO-HISTORY.jpg" },
];

export default function ActionAreaCard() {
  return (
    <Card>
      <CardActionArea>
        <SimpleImageSlider
          width="100%"
          height={375}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </CardActionArea>
    </Card>
  );
}
