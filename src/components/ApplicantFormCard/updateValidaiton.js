import * as yup from "yup";

export const updateValidation = yup
  .object()
  .shape({
    firstName: yup.string("First name is must be text").max(20),
    lastName: yup.string("Last name is must be text").max(20),
    email: yup.string().email("Email is invalid"),
    phone: yup.string("Phone is must be text"),
    address: yup.string("Address is must be text").max(140),
    city: yup.string("City is must be text"),
    country: yup.string("Country is must be text"),
    age: yup.number("Agw is must be number").min(18),
    gender: yup.string("Gender is must be text"),
    jobTitle: yup.string("Job Title is must be text"),
    salaryExpectation: yup.number("Salary Expectation is must be number"),
  })
  .required();
