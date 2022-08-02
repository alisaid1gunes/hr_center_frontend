import React from "react";
import { Button, Grid } from "@mui/material";

const ActionButton = (props) => {
  const { mode } = props;

  return (
    <Grid item md={6} textAlign="center" mt={5} justifyContent="center">
      <Button
        variant={"contained"}
        style={{ backgroundColor: "#5a5278" }}
        size="large"
        type={"submit"}
      >
        {mode === "save" ? "Save" : "Update"}
      </Button>
    </Grid>
  );
};

export default ActionButton;
