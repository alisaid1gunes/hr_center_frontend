import React from "react";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";

const InfoCardSection = (props) => {
  const { count, maleCount, femaleCount, usersAvgAge } = props;
  return (
    <>
      <Grid item md={3} xs={12} sm={12}>
        <InfoCard header={"Total Applicants"} value={count} />
      </Grid>
      <Grid item md={3} xs={12} sm={12}>
        <InfoCard header={"Male"} value={maleCount} />
      </Grid>
      <Grid item md={3} xs={12} sm={12}>
        <InfoCard header={"Female"} value={femaleCount} />
      </Grid>
      <Grid item md={3} xs={12} sm={12}>
        <InfoCard header={"Average Age"} value={usersAvgAge} />
      </Grid>
    </>
  );
};

export default InfoCardSection;
