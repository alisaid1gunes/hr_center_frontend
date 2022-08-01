import { React, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "../../index.css";
import getAllCountries from "../../../services/getAllCountries";
import getCities from "../../../services/getCities";
import FileUploaderDrag from "./FileUploaderDrag";
import TextfieldItem from "./TexfieldItem";
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
  } = props.props;

  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const genderList = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];

  const getCountries = async () => {
    const countries = await getAllCountries();
    setCountryList(countries);
    console.log(countries);
  };

  const handleChange = (file) => {
    setFile(file);
  };

  const handleCountryChange = async (value) => {
    const countryCode = countryList.find(
      (country) => country.name === value
    ).iso2;
    setCountry(value);
    const cities = await getCities(countryCode);
    cities.sort();
    setCityList(cities);
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <form>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          md={12}
          spacing={2}
        >
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={firstName}
            setter={setFirstName}
            label={"First Name"}
            multiline={false}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={lastName}
            setter={setLastName}
            label={"Last Name"}
            multiline={false}
          />
          <TextfieldItem
            type={"number"}
            isSelect={false}
            value={age}
            setter={setAge}
            label={"Age"}
            multiline={false}
          />

          <TextfieldItem
            type={"text"}
            isSelect={true}
            selectList={genderList}
            value={gender}
            setter={setGender}
            label={"Gender"}
            multiple={false}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={email}
            setter={setEmail}
            label={"Email"}
            multiline={false}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={phone}
            setter={setPhone}
            label={"Phone"}
            multiline={false}
          />

          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={jobTitle}
            setter={setJobTitle}
            label={"Job Title"}
            multiline={false}
          />
          <TextfieldItem
            type={"number"}
            isSelect={false}
            value={salaryExpectation}
            setter={setSalaryExpectation}
            label={"Salary Expectation"}
            multiline={false}
          />
          <TextfieldItem
            type={"text"}
            isSelect={true}
            selectList={countryList}
            value={country}
            setter={handleCountryChange}
            label={"Country"}
            multiple={false}
          />
          <TextfieldItem
            type={"text"}
            isSelect={true}
            selectList={cityList}
            value={city}
            setter={setCity}
            label={"City"}
            multiple={false}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={address}
            setter={setAddress}
            label={"Address"}
            multiline={true}
            rows={4}
          />
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
            <FileUploaderDrag handleChange={handleChange} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ApplicantForm;
