import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TrainingCard from "./shared/TrainingCard";
import HomePageCard from "./shared/HomePageCard";

import { trainingData } from "../mock/TrainingData";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  let history = useNavigate();
  return (
    <>
      <div style={{ padding: 20, background: "#f3f3f4" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginBottom: 20 }}
        >
          <Grid item xs={12} sm={12} lg={8} md={8}>
            <HomePageCard />
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4}></Grid>

          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h3 style={{ marginTop: 20, marginBottom: 20 }}>Training video</h3>
          </Grid>

          {trainingData.map((data, index) => {
            return (
              <Grid item xs={12} sm={12} lg={3} md={3}>
                <TrainingCard data={data} />
              </Grid>
            );
          })}
        </Grid>
        <button
          className="btn btn-default btn-primary"
          style={{ float: "right" }}
          type="button"
          onClick={() => history("/trainings")}
        >
          View more
        </button>
      </div>
    </>
  );
};
export default Timeline;
