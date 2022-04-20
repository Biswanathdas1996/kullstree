import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TrainingCard from "./shared/TrainingCard";
import { trainingData } from "../mock/TrainingData";

const Timeline = () => {
  return (
    <>
      <div style={{ padding: 20, background: "#f3f3f4" }}>
        <h3 style={{ marginBottom: 20 }}>Training video</h3>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginBottom: 20 }}
        >
          {trainingData.map((data, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                md={3}
                key={`training_${index}`}
              >
                <TrainingCard data={data} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Timeline;
