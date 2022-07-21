import { gql } from '@apollo/client';

const CREATE_APPLLICANT = gql`
    mutation createUser($data: CreateUserInput!) {
        createUser(data:$data) {
            id
        }
    }
`;
export default  CREATE_APPLLICANT;