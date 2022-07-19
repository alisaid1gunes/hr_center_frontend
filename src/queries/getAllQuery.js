import {gql} from "@apollo/client";

const GET_All = gql`
    query Users {
        users {
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
        }
    }
`;
export default GET_All;