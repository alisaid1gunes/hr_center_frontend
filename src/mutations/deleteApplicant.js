import { gql } from '@apollo/client';

const DELETE_APPLICANT = gql`
    mutation deleteUser($id: Float!) {
        deleteUser(id: $id)
    }
`;
export default  DELETE_APPLICANT;