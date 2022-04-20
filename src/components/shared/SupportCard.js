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
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import TrainingCard from "./TrainingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RecipeReviewCard({ data, height, assesment }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  let history = useNavigate();
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="large"
      >
        <Box sx={style} style={{ width: "70%" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Take the training
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You need to complete the training to get started
          </Typography>

          <TrainingCard
            data={{
              title: data?.title,
              publishDate: "September 14, 2016",
              video: data?.video,
              description:
                "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            }}
            height="300"
            assesment={true}
          />
        </Box>
      </Modal>

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
      </Card>
    </>
  );
}
