import React from "react";
import DetailCards from "./DetailCards";
import { Button, Grid } from "@mui/material";

const DetailUi = (props) => {
  const { applicant, removeApplicant } = props;
  return (
    <>
      <DetailCards applicant={applicant} />

      <Grid container direction="row" justifyContent="center" mt={5}>
        <Grid item md={4} textAlign="center">
          <Button
            variant="contained"
            style={{ backgroundColor: "#5a5278" }}
            onClick={removeApplicant}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailUi;
