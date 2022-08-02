import { gql } from "@apollo/client";

const UPDATE_APPLLICANT = gql`
  mutation updateUser($id: Int!, $data: UpdateInput!, $file: Upload!) {
    updateUser(id: $id, data: $data, file: $file) {
      id
    }
  }
`;
export default UPDATE_APPLLICANT;
