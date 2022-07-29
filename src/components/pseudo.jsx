import { React, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./index.css";
import { FileUploader } from "react-drag-drop-files";
import getAllCountries from "../services/getAllCountries";
import getCities from "../services/getCities";
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
        <Grid item md={6} mt={2}>
          <Card
            style={{
              borderRadius: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
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
                      onChange={(e) => setFirstName(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Firstname"
                      variant="outlined"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Email"
                      variant="outlined"
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Phone"
                      variant="outlined"
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
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Address"
                      variant="outlined"
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
                      size="large"
                      value={city}
                      sx={{ minWidth: 220, maxWidth: 220 }}
                      margin={"dense"}
                      onChange={(e) => setCity(e.target.value)}
                      label="City"
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
                      select
                      size="large"
                      sx={{ minWidth: 220, maxWidth: 220 }}
                      margin={"dense"}
                      value={country}
                      onChange={(e) => {
                        handleCountryChange(e);
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
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      margin={"dense"}
                      type="text"
                      label="Job Title"
                      variant="outlined"
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
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    xl={12}
                    md={12}
                    sm={12}
                    xs={12}
                    xs={12}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    mt={2}
                  >
                    <FileUploader
                      classes="file-uploader"
                      style={{ height: "500px !important;" }}
                      multiple={false}
                      handleChange={handleChange}
                      name="file"
                      types={["pdf"]}
                    />
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
