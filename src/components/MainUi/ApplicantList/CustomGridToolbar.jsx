import { useQuery } from "@apollo/client";
import getAllQuery from "../../../queries/getAllQuery";
import { GridToolbarContainer } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FileDownloadRounded } from "@mui/icons-material";
import { handleExcel } from "./handleExcel";
import React from "react";

export default function CustomGridToolbar(props) {
  const { count } = props;
  const { data, loading, error } = useQuery(getAllQuery, {
    variables: {
      take: count,
      page: 0,
      search: "",
    },
  });

  let applicantList = {};

  if (!loading && !error) {
    const applicants = JSON.stringify(data.users);
    applicantList = JSON.parse(applicants);
    applicantList.forEach((applicant) => {
      delete applicant.__typename;
      applicant.cv =
        "https://res.cloudinary.com/dzi4g0acr/image/upload/v1658741035/" +
        applicant.cv;
    });
  }

  return (
    <GridToolbarContainer>
      <Button
        color="inherit"
        startIcon={<FileDownloadRounded />}
        onClick={() => {
          handleExcel(applicantList);
        }}
      >
        Export
      </Button>
    </GridToolbarContainer>
  );
}
