import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarUi = (props) => {
  const { open, handleClose, snackbarMessage } = props;
  return (
    <Snackbar
      mt={2}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%", margin: "%10" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarUi;
