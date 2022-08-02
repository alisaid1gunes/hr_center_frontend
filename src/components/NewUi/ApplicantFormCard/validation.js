import * as yup from "yup";

export const validation = yup
  .object()
  .shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("State is required"),
    age: yup.number().required("Age is required"),
    gender: yup.string().required("Gender is required"),
    jobTitle: yup.string().required("Job Title is required"),
    salaryExpectation: yup.number().required("Salary Expectation is required"),
  })
  .required();
