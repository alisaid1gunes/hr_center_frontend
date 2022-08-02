import React from "react";
import { Grid, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { MuiTelInput } from "mui-tel-input";

const TextfieldItem = (props) => {
  const {
    type,
    isSelect,
    value,
    setter,
    label,
    selectList,
    rows,
    multiline,
    control,
    name,
    isPhone,
    error,
  } = props;
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
        isPhone === true ? (
          <Controller
            name={name}
            control={control}
            render={({ field: { newValue, onChange } }) => {
              return (
                <MuiTelInput
                  defaultCountry="TR"
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    setter(e);
                  }}
                  margin={"dense"}
                  type={type}
                  label={label}
                  rows={rows}
                  multiline={multiline}
                  variant="outlined"
                  sx={{
                    width: "75%",
                  }}
                  helperText={error?.message}
                  error={error !== undefined}
                />
              );
            }}
          />
        ) : (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextField
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                    setter(e.target.value);
                  }}
                  margin={"dense"}
                  type={type}
                  label={label}
                  rows={rows}
                  multiline={multiline}
                  variant="outlined"
                  sx={{
                    width: "75%",
                  }}
                  helperText={error?.message}
                  error={error !== undefined}
                />
              );
            }}
          />
        )
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextField
                select
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setter(e.target.value);
                }}
                margin={"dense"}
                type={type}
                label={label}
                sx={{
                  width: "75%",
                }}
                helperText={error?.message}
                error={error !== undefined}
              >
                {selectList.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            );
          }}
        />
      )}
    </Grid>
  );
};

export default TextfieldItem;
