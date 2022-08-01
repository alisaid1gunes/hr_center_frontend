import React from "react";
import { Button, Grid } from "@mui/material";

const SaveButton = (props) => {
  const { save } = props;
  return (
    <Grid item md={6} textAlign="center" mt={5}>
      <Button
        variant={"contained"}
        style={{ backgroundColor: "#5a5278" }}
        size="large"
        onClick={save}
      >
        Save
      </Button>
    </Grid>
  );
};

export default SaveButton;
