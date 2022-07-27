import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const ApplicantDetails = (props) => {
  const { applicant } = props;
  console.log(applicant);
  const keys = [
    "First Name",
    "Last Name",
    "Age",
    "Email",
    "Phone",
    "Address",
    "City",
    "Country",
    "Job Title",
    "Salary Expectation",
    "Cv",
  ];
  const valueKeys = [
    "firstName",
    "lastName",
    "age",
    "email",
    "phone",
    "address",
    "city",
    "country",
    "jobTitle",
    "salaryExpectation",
    "cv",
  ];
  return (
    <div>
      {keys.map((key, index) => {
        if (index !== 0) {
          return (
            <Grid container direction="row">
              <Grid item md={6} justifyContent="left">
                <Typography
                  variant="h6"
                  color="text.secondary"
                  textAlign="left"
                >
                  {`${key}:  `}
                </Typography>
              </Grid>
              <Grid item md={6} justifyContent="end" textAlign="right">
                <Typography variant="h6" color="text.secondary">
                  {key === "Salary Expectation" ? (
                    `${applicant[valueKeys[index]]} TL`
                  ) : key === "Cv" ? (
                    <a
                      href={
                        "https://res.cloudinary.com/dzi4g0acr/image/upload/v1658741035/" +
                        applicant[valueKeys[index]]
                      }
                      download
                    >
                      Click to download
                    </a>
                  ) : (
                    `${applicant[valueKeys[index]]}`
                  )}
                </Typography>
              </Grid>
            </Grid>
          );
        }
      })}
    </div>
  );
};

export default ApplicantDetails;
