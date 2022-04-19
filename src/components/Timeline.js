import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Timeline = () => {
  return (
    <>
      <div style={{ padding: 20, background: "#f3f3f4" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginBottom: 20 }}
        >
          <Grid item xs={12} lg={7} md={7} sm={12}>
            <Card>
              <div style={{ padding: 20, marginLeft: 20 }}>
                <h1>Hiii</h1>
              </div>
            </Card>

            <Box style={{ marginBottom: 20 }}>
              <h1>Hiii</h1>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5} md={5} sm={12}>
            <h1>Hiii</h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Timeline;
