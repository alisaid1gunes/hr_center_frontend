import React from "react";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { MuiTelInput, isValidPhoneNumber } from "mui-tel-input";

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
                    console.log(e);
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
                  helperText={
                    isValidPhoneNumber(value) ? "" : "Invalid Phone Number"
                  }
                  error={isValidPhoneNumber(value) ? false : true}
                />
              );
            }}
          />
        ) : (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => {
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
                  sx={{
                    width: "75%",
                  }}
                  multiline={multiline}
                  rows={rows}
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
              <Autocomplete
                disablePortal
                getOptionLabel={(option) => {
                  if (option.hasOwnProperty("name")) {
                    return option.name;
                  }
                  return option;
                }}
                onChange={(e, item) => {
                  onChange(item.name);
                  setter(item.name);
                  console.log(item.name);
                }}
                options={selectList}
                value={value}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      width: "75%",
                    }}
                    label={label}
                    {...params}
                    margin={"dense"}
                    type={type}
                    helperText={error?.message}
                    error={error !== undefined}
                  />
                )}
              />
            );
          }}
        />
      )}
    </Grid>
  );
};

export default TextfieldItem;
