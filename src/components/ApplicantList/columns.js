import React from "react";
import ActionCell from "./ActionCell";

export const columns = (handleViewClick, removeApplicant) => {
  return [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: false,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "jobTitle",
      headerName: "Job Title",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Application Date",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
    {
      field: "actions",
      selectable: false,
      headerName: "Actions",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <ActionCell
          params={params}
          handleViewClick={handleViewClick}
          removeApplicant={removeApplicant}
        />
      ),
    },
  ];
};
