import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TrainingCard from "./shared/TrainingCard";
import HomePageCard from "./shared/HomePageCard";
import ProfileCard from "./shared/ProfileCard";
import Job from "./Job";

import Products from "./shared/ProductCard";

import { trainingData } from "../mock/TrainingData";
import { productData } from "../mock/ProductData";

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
          <Grid item xs={12} sm={12} lg={4} md={4}>
            <ProfileCard
              name="Smriti Correia"
              age="32"
              city="Bihar"
              point="2000"
              training="8"
              task="10"
            ></ProfileCard>
          </Grid>

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
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <button
              className="btn btn-default btn-secondary"
              style={{ float: "right", margin: 10 }}
              type="button"
              onClick={() => history("/trainings")}
            >
              View more
            </button>
          </Grid>

          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h3 style={{ marginTop: 20, marginBottom: 20 }}>Products</h3>
          </Grid>

          {productData.map((data, index) => {
            return (
              <Grid item xs={12} sm={12} lg={3} md={3}>
                <Products data={data} />
              </Grid>
            );
          })}
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <button
              className="btn btn-default btn-secondary"
              style={{ float: "right", margin: 10 }}
              type="button"
              onClick={() => history("/products")}
            >
              View more
            </button>
          </Grid>

          <Job />
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <button
              className="btn btn-default btn-secondary"
              style={{ float: "right", margin: 10 }}
              type="button"
              onClick={() => history("/job")}
            >
              View more
            </button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Timeline;
