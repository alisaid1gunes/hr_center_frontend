import {gql} from "@apollo/client";

const GET_All = gql`
    query Users($take: Float!, $page: Float!) {
        users(take: $take, page: $page) {
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
        }
            usersCount
    }
    
`;
export default GET_All;