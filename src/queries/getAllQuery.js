import { gql } from "@apollo/client";

const GET_All = gql`
  query Users($take: Float!, $page: Float!, $search: String!) {
    users(take: $take, page: $page, search: $search) {
      firstName
      lastName
      id
      age
      phone
      email
      address
      city
      country
      jobTitle
      salaryExpectation
      cv
      createdAt
      gender
    }
    usersCount
    usersMaleCount
    usersFemaleCount
    usersAvgAge
  }
`;
export default GET_All;
