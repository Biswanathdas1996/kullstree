import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import SupportCard from "./shared/SupportCard";
import FAQ from "./shared/FAQ";
import ContactForm from "./shared/ContactForm";

import { trainingData } from "../mock/TrainingData";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

const Timeline = () => {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginBottom: 20 }}
        >
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h3 style={{ marginTop: 20, marginBottom: 20 }}>
              Commonly faceing issues
            </h3>
          </Grid>

          {trainingData.slice(0, 6).map((data, index) => {
            return (
              <Grid item xs={12} sm={12} lg={3} md={3}>
                <SupportCard data={data} />
              </Grid>
            );
          })}

          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h3 style={{ marginTop: 20, marginBottom: 20 }}>FAQ</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Card>
              <FAQ />
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <Card>
              <h3 style={{ margin: 20, marginBottom: 20 }}>
                Write to our mentors
              </h3>
              <ContactForm />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <Card>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <h3 style={{ margin: 20, marginBottom: 20 }}>
                  Contact Mentors
                </h3>
                <nav aria-label="secondary mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Trash Hathi" />
                        <a href="whatsapp://send?abid=90005439877&text=Hello%2C%20World!">
                          <ListItemText secondary=" +91 90005439877" />
                        </a>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Samplm Hathi" />
                        <a href="whatsapp://send?abid=90005439877&text=Hello%2C%20World!">
                          <ListItemText secondary=" +91 90005436666" />
                        </a>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Samplm Saha" />
                        <a href="whatsapp://send?abid=90005439877&text=Hello%2C%20World!">
                          <ListItemText secondary=" +91 90005439555" />
                        </a>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Timeline;
