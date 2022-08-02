import React from "react";
import ApplicantFormCard from "../ApplicantFormCard/ApplicantFormCard";
import { Grid } from "@mui/material";

const NewUi = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    city,
    setCity,
    country,
    setCountry,
    salaryExpectation,
    setSalaryExpectation,
    jobTitle,
    setJobTitle,
    file,
    setFile,
    gender,
    setGender,
    save,
  } = props;
  return (
    <>
      <Grid container md={12} direction="row" justifyContent="center" mt={5}>
        <ApplicantFormCard
          mode={"save"}
          cardTitle={"Add New"}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          age={age}
          setAge={setAge}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
          salaryExpectation={salaryExpectation}
          setSalaryExpectation={setSalaryExpectation}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          file={file}
          setFile={setFile}
          gender={gender}
          setGender={setGender}
          save={save}
        />
      </Grid>
    </>
  );
};

export default NewUi;
