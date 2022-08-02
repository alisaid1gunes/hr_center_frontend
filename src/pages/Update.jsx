import React from "react";
import "../components/index.css";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
const Update = () => {
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
  return (
    <div div className="update-container">
      Update
    </div>
  );
};

export default Update;
