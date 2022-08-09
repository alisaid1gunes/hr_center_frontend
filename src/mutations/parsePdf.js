import { gql } from "@apollo/client";

const PARSE_PDF = gql`
  mutation parsePdf($file: Upload!) {
    parsePdf(file: $file) {
      firstName
      lastName
      email
      phone
      address
      jobTitle
    }
  }
`;
export default PARSE_PDF;
