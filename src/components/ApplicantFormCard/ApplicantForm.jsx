import { React, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "../../index.css";
import getAllCountries from "../../services/getAllCountries";
import getCities from "../../services/getCities";
import FileUploaderDrag from "./FileUploaderDrag";
import TextfieldItem from "./TexfieldItem";
import { useForm } from "react-hook-form";
import { saveValidation } from "./saveValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import ActionButton from "../NewUi/ActionButton";
import { updateValidation } from "./updateValidaiton";
import { handleCityList } from "./handleCityList";
import { handleCountryList } from "./handleCountryList";
import { useMutation } from "@apollo/client";
import PARSE_PDF from "../../mutations/parseCv";
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
    save,
    update,
    mode,
  } = props.props;
  const [cvMode, setCvMode] = useState(true);
  const [parseCv, { data, loading, error }] = useMutation(PARSE_PDF);
  console.log({ data, loading, error });
  const parse = (file) => {
    parseCv({
      variables: {
        file,
      },
    });
  };
  const [countryList, setCountryList] = useState([]);

  const [cityList, setCityList] = useState([]);
  const genderList = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];

  const getCountries = async () => {
    const countries = await getAllCountries();
    handleCountryList(countries);
    if (mode === "update") {
      const countryCode = await countries.find(
        (countryItem) => countryItem.name === country
      ).iso2;
      const cities = await getCities(countryCode);
      handleCityList(cities, country);
      setCityList(cities);
    }
    setCountryList(countries);
  };

  const handleChange = (file) => {
    setFile(file);
    parse(file);
  };

  const handleCountryChange = async (value) => {
    const countryCode = countryList.find(
      (country) => country.name === value
    ).iso2;
    setCountry(value);
    const cities = await getCities(countryCode);
    handleCityList(cities, value);
    setCityList(cities);
  };
  const validationChooser = () => {
    if (mode === "save") {
      return saveValidation;
    } else {
      return updateValidation;
    }
  };
  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationChooser()),
  });
  const onSubmit = () => {
    if (mode === "update") {
      update();
    } else {
      save();
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (cvMode) {
      if (data?.parseCv?.firstName !== null) {
        setFirstName(data?.parseCv?.firstName);
        setValue("firstName", data?.parseCv?.firstName);
      }
      if (data?.parseCv?.lastName !== null) {
        setLastName(data?.parseCv?.lastName);
        setValue("lastName", data?.parseCv?.lastName);
      }
      if (data?.parseCv?.age !== null) {
        setAge(data?.parseCv?.age);
        setValue("age", data?.parseCv?.age);
      }
      if (data?.parseCv?.email !== null) {
        setEmail(data?.parseCv?.email);
        setValue("email", data?.parseCv?.email);
      }
      if (data?.parseCv?.phone !== null) {
        setPhone(data?.parseCv?.phone + "");
        setValue("phone", data?.parseCv?.phone);
      }
      if (data?.parseCv?.address !== null) {
        setAddress(data?.parseCv?.address);
        setValue("address", data?.parseCv?.address);
      }
      if (data?.parseCv?.jobTitle !== null) {
        setJobTitle(data?.parseCv?.jobTitle);
        setValue("jobTitle", data?.parseCv?.jobTitle);
      }
    }
  }, [loading]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            control={control}
            name={"firstName"}
            error={errors?.firstName}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={lastName}
            setter={setLastName}
            label={"Last Name"}
            multiline={false}
            control={control}
            name={"lastName"}
            error={errors?.lastName}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"number"}
            isSelect={false}
            value={age}
            setter={setAge}
            label={"Age"}
            multiline={false}
            control={control}
            name={"age"}
            error={errors?.age}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={true}
            selectList={genderList}
            value={gender}
            setter={setGender}
            label={"Gender"}
            multiple={false}
            control={control}
            name={"gender"}
            error={errors?.gender}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={email}
            setter={setEmail}
            label={"Email"}
            multiline={false}
            control={control}
            name={"email"}
            error={errors?.email}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            isPhone={true}
            value={phone}
            setter={setPhone}
            label={"Phone"}
            multiline={false}
            control={control}
            name={"phone"}
            error={errors?.phone}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={jobTitle}
            setter={setJobTitle}
            label={"Job Title"}
            multiline={false}
            control={control}
            name={"jobTitle"}
            error={errors?.jobTitle}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"number"}
            isSelect={false}
            value={salaryExpectation}
            setter={setSalaryExpectation}
            label={"Salary Expectation"}
            multiline={false}
            control={control}
            name={"salaryExpectation"}
            error={errors?.salaryExpectation}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={true}
            selectList={countryList}
            value={country}
            setter={handleCountryChange}
            label={"Country"}
            multiple={false}
            control={control}
            name={"country"}
            error={errors?.country}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={true}
            selectList={cityList}
            value={city}
            setter={setCity}
            label={"City"}
            multiple={false}
            control={control}
            name={"city"}
            error={errors?.city}
            cvMode={cvMode}
            setCvMode={setCvMode}
          />
          <TextfieldItem
            type={"text"}
            isSelect={false}
            value={address}
            setter={setAddress}
            label={"Address"}
            multiline={true}
            rows={4}
            control={control}
            name={"address"}
            error={errors?.address}
            cvMode={cvMode}
            setCvMode={setCvMode}
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
          <ActionButton mode={mode} />
        </Grid>
      </form>
    </div>
  );
};

export default ApplicantForm;
