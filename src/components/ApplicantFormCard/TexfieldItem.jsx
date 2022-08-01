import React from "react";
import { Grid, MenuItem, TextField } from "@mui/material";

const TextfieldItem = (props) => {
  const { type, isSelect, value, setter, label, selectList, rows, multiline } =
    props;
  console.log(props);

  return (
    <Grid
      item
      lg={12}
      xl={12}
      md={12}
      sm={12}
      xs={12}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        width: "75%",
      }}
    >
      {isSelect === false ? (
        <TextField
          value={value}
          onChange={(e) => setter(e.target.value)}
          margin={"dense"}
          type={type}
          label={label}
          rows={rows}
          multiline={multiline}
          variant="outlined"
          sx={{
            width: "75%",
          }}
        />
      ) : (
        <TextField
          select
          value={value}
          margin={"dense"}
          onChange={(e) => setter(e.target.value)}
          label={label}
          sx={{
            width: "75%",
          }}
        >
          {selectList.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Grid>
  );
};

export default TextfieldItem;
