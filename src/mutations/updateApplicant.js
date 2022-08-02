import { gql } from "@apollo/client";

const UPDATE_APPLLICANT = gql`
  mutation updateUser($id: Float!, $data: UpdateUserInput!, $file: Upload) {
    updateUser(id: $id, data: $data, file: $file) {
      id
    }
  }
`;
export default UPDATE_APPLLICANT;
