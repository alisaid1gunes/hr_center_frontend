import { gql } from '@apollo/client';

const CREATE_APPLLICANT = gql`
    mutation createUser($data: CreateUserInput!, $file: Upload!) {
        createUser(data:$data, file:$file) {
            id
        }
    }
`;
export default  CREATE_APPLLICANT;