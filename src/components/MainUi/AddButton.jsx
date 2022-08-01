import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = (props) => {
  const { handleClick } = props;
  return (
    <Box
      mt={7}
      display="flex"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "end",
        textAlign: "right",
      }}
    >
      <Button
        variant="contained"
        style={{ backgroundColor: "#5a5278" }}
        onClick={handleClick}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddButton;
