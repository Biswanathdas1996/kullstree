import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> What is OnlineSBI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            OnlineSBI is the Internet banking service provided by State Bank of
            India, India's largest and premier commercial bank
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How do I access OnlineSBI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You need to have an account at a branch. You also need to register
            for the Internet banking service with the branch. Branch will
            provide you a Pre Printed Kit (PPK) containing username and password
            for first login. If you are not in a position to collect PPK in
            person, the bank will arrange to send a username through SMS and a
            mailer containing password to your registered address. Logon to
            www.onlinesbi.com using this username and password. At the first
            login, you will need to go through a simple initialization process.
            Our Net banking assistant will guide you step by step through this
            process on the site.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>. I do not have an account with SBI? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You are welcome to open it now. It is very easy to open an account
            with SBI. You can apply online for opening of a savings bank
            account. A link 'Online SB Account Application' is available on the
            home page of www.onlinesbi.com or just walk in to any of our
            branches nearby. Our staff would be pleased to assist you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> What is special about Internet banking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Internet banking is the most convenient way to bank- anytime, any
            place, at your convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> What is OnlineSBI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            OnlineSBI is the Internet banking service provided by State Bank of
            India, India's largest and premier commercial bank
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How do I access OnlineSBI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You need to have an account at a branch. You also need to register
            for the Internet banking service with the branch. Branch will
            provide you a Pre Printed Kit (PPK) containing username and password
            for first login. If you are not in a position to collect PPK in
            person, the bank will arrange to send a username through SMS and a
            mailer containing password to your registered address. Logon to
            www.onlinesbi.com using this username and password. At the first
            login, you will need to go through a simple initialization process.
            Our Net banking assistant will guide you step by step through this
            process on the site.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>. I do not have an account with SBI? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You are welcome to open it now. It is very easy to open an account
            with SBI. You can apply online for opening of a savings bank
            account. A link 'Online SB Account Application' is available on the
            home page of www.onlinesbi.com or just walk in to any of our
            branches nearby. Our staff would be pleased to assist you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> What is special about Internet banking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Internet banking is the most convenient way to bank- anytime, any
            place, at your convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
