import React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";

const ActionCell = (props) => {
  const { removeApplicant, handleViewClick, handleUpdateClick, params } = props;
  return (
    <Box>
      <IconButton>
        <VisibilityRounded
          fontWeight={"lighter"}
          onClick={() => handleViewClick(params.row.id)}
        />
      </IconButton>
      <IconButton onClick={() => handleUpdateClick(params.row.id)}>
        <EditRounded fontWeight={"lighter"} />
      </IconButton>
      <IconButton onClick={() => removeApplicant(params.row.id)}>
        <DeleteRounded fontWeight={"lighter"} />
      </IconButton>
    </Box>
  );
};

export default ActionCell;
