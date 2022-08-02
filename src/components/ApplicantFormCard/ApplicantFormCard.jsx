import { React } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import "../../index.css";

import ApplicantForm from "./ApplicantForm";
const ApplicantFormCard = (props) => {
  return (
    <div>
      <Grid container justifyContent="center" direction="row">
        <Grid item md={6} mt={10}>
          <Card
            style={{
              borderRadius: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Grid container md={12} direction="row" justifyContent="center">
                <Grid item md={6} textAlign="center" mt={2} mb={2}>
                  <Typography variant={"h2"}>{props.cardTitle}</Typography>
                </Grid>
              </Grid>
              <ApplicantForm props={props} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicantFormCard;
