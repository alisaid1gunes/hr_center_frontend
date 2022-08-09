import { gql } from "@apollo/client";

const PARSE_CV = gql`
  mutation parseCv($file: Upload!) {
    parseCv(file: $file) {
      firstName
      lastName
      email
      phone
      address
      jobTitle
    }
  }
`;
export default PARSE_CV;
