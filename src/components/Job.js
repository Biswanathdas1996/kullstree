import React from "react";
import { Grid } from "@mui/material";
import JobCard from "./shared/JobCard";
import { JobData } from "../mock/JobData";

const Timeline = () => {
  return (
    <>
      <div style={{ padding: 20, background: "#f3f3f4" }}>
        <h3 style={{ marginBottom: 20 }}>Current openings</h3>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginBottom: 20 }}
        >
          {JobData.map((data, index) => {
            return (
              <Grid item xs={12} sm={12} lg={3} md={3} key={`JobCard_${index}`}>
                <JobCard data={data} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Timeline;
