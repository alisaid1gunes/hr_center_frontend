import { React, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import CREATE_APPLLICANT from "../mutations/createApplicant";
import getAllQuery from "../queries/getAllQuery";
import { AppContext } from "../context/AppContext";
import "../components/index.css";
import NewUi from "../components/NewUi/NewUi";

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
  const [gender, setGender] = useState("");

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
  const save = () => {
    addApplicant();
    setSnackbarMessage("Applicant added successfully");
    navigate("/");
    setOpen(true);
  };

  return (
    <div className="new-container">
      <NewUi
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
    </div>
  );
};

export default New;
