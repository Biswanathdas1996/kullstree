import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TrainingCard from "./shared/TrainingCard";
import HomePageCard from "./shared/HomePageCard";
import ProfileCard from "./shared/ProfileCard";
import Certificate from "./shared/Certificate";

import Products from "./shared/ProductCard";

import { trainingData } from "../mock/TrainingData";
import { productData } from "../mock/ProductData";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  let history = useNavigate();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ marginBottom: 20, marginTop: 20, padding: 20 }}
    >
      <Grid item xs={12} sm={12} lg={3} md={3}></Grid>
      <Grid item xs={12} sm={12} lg={6} md={6}>
        <ProfileCard
          name="Smriti Correia"
          age="32"
          city="Bihar"
          point="2000"
          training="8"
          task="10"
          buttonHide={true}
        ></ProfileCard>
      </Grid>
      <Grid item xs={12} sm={12} lg={3} md={3}></Grid>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <h3 style={{ marginTop: 20, marginBottom: 20 }}>
          Training certificates
        </h3>
      </Grid>
      <Grid item xs={12} sm={12} lg={3} md={3}>
        <Certificate
          img="/assets/images/cert.jpg"
          title="SBI account opening details"
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={3} md={3}>
        <Certificate
          img="/assets/images/certificate_gold.jpg"
          title="How to sell life insurance "
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={3} md={3}>
        <Certificate
          img="/assets/images/cert1.jpg"
          title="Basic details about lone "
        />
      </Grid>

      <Grid item xs={12} sm={12} lg={12} md={12}>
        <h3 style={{ marginTop: 20, marginBottom: 20 }}>Eligible Products</h3>
      </Grid>

      {productData.slice(0, 2).map((data, index) => {
        return (
          <Grid item xs={12} sm={12} lg={3} md={3}>
            <Products data={data} elegible={true} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Profile;
