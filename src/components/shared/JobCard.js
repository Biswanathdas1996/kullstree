import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TrainingCard from "./TrainingCard";
import { useNavigate } from "react-router-dom";

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

const trainingData = {
  title: " SECRETS THAT ONLY RICH KNOWS ",
  publishDate: "September 14, 2016",
  video: "https://www.youtube.com/embed/NvD76VM3lbI",
  description:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
};

export default function RecipeReviewCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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

          <TrainingCard data={trainingData} height="300" assesment={true} />
        </Box>
      </Modal>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="250"
          image={data?.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>

        <button
          className="btn btn-default btn-primary"
          style={{ margin: 15 }}
          type="button"
          onClick={() => handleOpen()}
        >
          Apply
        </button>
      </Card>
    </>
  );
}
