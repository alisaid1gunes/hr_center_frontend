import { React, useContext, useState } from "react";
import AppBarNormal from "../components/AppBarNormal";
import ApplicantForm from "../components/ApplicantForm";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import CREATE_APPLLICANT from "../mutations/createApplicant";
import getAllQuery from "../queries/getAllQuery";
import { AppContext, SearchContext } from "../context/AppContext";
import "../components/index.css";

const New = () => {
  const context = useContext(AppContext);
  const { setSnackbarMessage, setOpen } = context;
  const location = useLocation();
  const navigate = useNavigate();
  const { take, page, search } = location.state;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [salaryExpectation, setSalaryExpectation] = useState();
  const [jobTitle, setJobTitle] = useState("");
  const [file, setFile] = useState("");

  const [createApplicant, { data, loading, error }] =
    useMutation(CREATE_APPLLICANT);

  const addApplicant = () => {
    console.log(file);
    createApplicant({
      variables: {
        data: {
          firstName,
          lastName,
          age: parseInt(age),
          email,
          phone,
          address,
          city,
          country,
          salaryExpectation: parseInt(salaryExpectation),
          jobTitle,
        },
        file,
      },
      refetchQueries: [
        {
          query: getAllQuery,
          variables: {
            take,
            page,
            search,
          },
        },
        "users",
      ],
    });
  };
  const onClick = () => {
    addApplicant();
    setSnackbarMessage("Applicant added successfully");
    navigate("/");
    setOpen(true);
  };

  return (
    <div className="new-container">
      <Grid container md={12} direction="row" justifyContent="center" mt={5}>
        <Grid item md={6} textAlign="center">
          <h1>Add New Applicant</h1>
        </Grid>
      </Grid>

      <ApplicantForm
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
      />
      <Grid container md={12} direction="row" justifyContent="center" mt={5}>
        <Grid item md={6} textAlign="center">
          <Button
            variant={"contained"}
            color={"primary"}
            size="large"
            onClick={onClick}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default New;
