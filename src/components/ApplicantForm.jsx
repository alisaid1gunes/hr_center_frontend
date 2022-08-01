import { React, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Input,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./index.css";
import { FileUploader } from "react-drag-drop-files";
import getAllCountries from "../services/getAllCountries";
import getCities from "../services/getCities";
import Box from "@mui/material/Box";
const ApplicantForm = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    email,
    setEmail,
    city,
    setCity,
    address,
    setAddress,
    phone,
    setPhone,
    jobTitle,
    setJobTitle,
    salaryExpectation,
    setSalaryExpectation,
    country,
    setCountry,
    setFile,
    gender,
    setGender,
  } = props;

  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const getCountries = async () => {
    const countries = await getAllCountries();
    setCountryList(countries);
    console.log(countries);
  };

  const handleChange = (file) => {
    setFile(file);
  };

  const handleCountryChange = async (event) => {
    const countryCode = countryList.find(
      (country) => country.name === event.target.value
    ).iso2;
    setCountry(event.target.value);
    const cities = await getCities(countryCode);
    cities.sort();
    setCityList(cities);
    console.log(cities);
    console.log(cityList);
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <Grid container justifyContent="center" direction="row">
        <Grid item md={6} mt={10}>
          <Card
            style={{
              borderRadius: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Grid container md={12} direction="row" justifyContent="center">
                <Grid item md={6} textAlign="center" mt={2} mb={2}>
                  <Typography variant={"h2"}>Add New</Typography>
                </Grid>
              </Grid>
              <form>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  md={12}
                  spacing={2}
                >
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
                  >
                    <TextField
                      value={firstName}
                      sx={{
                        width: "75%",
                      }}
                      onChange={(e) => setFirstName(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Firstname"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>
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
                  >
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Lastname"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>
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
                  >
                    <TextField
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      margin={"dense"}
                      type="number"
                      label="Age"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>

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
                  >
                    <TextField
                      select
                      margin={"dense"}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      sx={{
                        width: "75%",
                      }}
                      label="Gender"
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                  </Grid>
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
                  >
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Email"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>
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
                    <TextField
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Phone"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>

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
                    <TextField
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Job Title"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>
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
                  >
                    <TextField
                      value={salaryExpectation}
                      onChange={(e) => setSalaryExpectation(e.target.value)}
                      margin={"dense"}
                      type="number"
                      label="Salary Expectation"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>

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
                  >
                    <TextField
                      select
                      margin={"dense"}
                      value={country}
                      onChange={(e) => {
                        handleCountryChange(e);
                      }}
                      sx={{
                        width: "75%",
                      }}
                      label="Country"
                      margin={"dense"}
                    >
                      {countryList.map((country) => (
                        <MenuItem key={country.id} value={country.name}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
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
                  >
                    <TextField
                      select
                      value={city}
                      margin={"dense"}
                      onChange={(e) => setCity(e.target.value)}
                      label="City"
                      sx={{
                        width: "75%",
                      }}
                    >
                      {cityList.map((city) => (
                        <MenuItem key={city.id} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
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
                  >
                    <TextField
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      margin={"dense"}
                      multiline={true}
                      rows={4}
                      type="text"
                      label="Address"
                      variant="outlined"
                      sx={{
                        width: "75%",
                      }}
                    />
                  </Grid>
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
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      sx={{
                        width: "100%",
                      }}
                    >
                      <FileUploader
                        classes="file-uploader"
                        multiple={false}
                        handleChange={handleChange}
                        name="file"
                        types={["pdf"]}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicantForm;
