import React from "react";
import "../components/index.css";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import UPDATE_APPLLICANT from "../mutations/updateApplicant";
import getAllQuery from "../queries/getAllQuery";
import UpdateUi from "../components/UpdateUi/UpdateUi";

const Update = () => {
  const context = useContext(AppContext);
  const { setSnackbarMessage, setOpen } = context;
  const location = useLocation();
  const navigate = useNavigate();
  const { take, page, search, applicant } = location.state;
  const [firstName, setFirstName] = useState(applicant.firstName);
  const [lastName, setLastName] = useState(applicant.lastName);
  const [age, setAge] = useState(applicant.age);
  const [email, setEmail] = useState(applicant.email);
  const [phone, setPhone] = useState(applicant.phone);
  const [address, setAddress] = useState(applicant.address);
  const [city, setCity] = useState(applicant.city);
  const [country, setCountry] = useState(applicant.country);
  const [salaryExpectation, setSalaryExpectation] = useState(
    applicant.salaryExpectation
  );
  const [jobTitle, setJobTitle] = useState(applicant.jobTitle);
  const [file, setFile] = useState(applicant.file);
  const [gender, setGender] = useState(applicant.gender);

  const [updateApplicant, { data, loading, error }] =
    useMutation(UPDATE_APPLLICANT);

  const editApplicant = (id) => {
    console.log(file);
    updateApplicant({
      variables: {
        id,
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
          gender,
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

  const update = () => {
    editApplicant(applicant.id);
    setSnackbarMessage("Applicant updated successfully");
    navigate("/");
    setOpen(true);
  };
  return (
    <div div className="update-container">
      <UpdateUi
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
        update={update}
      />
    </div>
  );
};

export default Update;
