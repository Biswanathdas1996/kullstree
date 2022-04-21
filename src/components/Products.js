import React from "react";
import { Grid } from "@mui/material";

import Products from "./shared/ProductCard";
import { productData } from "../mock/ProductData";

const Timeline = () => {
  return (
    <>
      <div style={{ padding: 20, background: "#f3f3f4" }}>
        <h3 style={{ marginBottom: 20 }}>Products</h3>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginBottom: 20 }}
        >
          {productData.map((data, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                md={3}
                key={`products_${index}`}
              >
                <Products data={data} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Timeline;
