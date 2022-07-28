import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Snackbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import {
  Delete,
  DeleteRounded,
  Visibility,
  VisibilityRounded,
} from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import DELETE_APPLICANT from "../mutations/deleteApplicant";
import getAllQuery from "../queries/getAllQuery";

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: "#f5f5f5",
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

const ApplicantList = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { applicants, page, setPage, take, count } = props;
  console.log({ applicants, page, setPage, take });
  const applicantList = JSON.parse(applicants);

  const [deleteApplicant, { data, loading, error }] =
    useMutation(DELETE_APPLICANT);
  console.log({ data, loading, error });
  const removeApplicant = (id) => {
    deleteApplicant({
      variables: {
        id,
      },
      refetchQueries: [{ query: getAllQuery }, "users"],
    });
    setOpen(true);
  };

  const rows = applicantList.map((applicant) => {
    const date = new Date(applicant.createdAt);
    return {
      id: applicant.id,
      firstName: applicant.firstName,
      lastName: applicant.lastName,
      age: applicant.age,
      jobTitle: applicant.jobTitle,
      createdAt: date.toLocaleString("en-US", {
        weekday: "short", // long, short, narrow
        day: "numeric", // numeric, 2-digit
        year: "numeric", // numeric, 2-digit
        month: "long", // numeric, 2-digit, long, short, narrow
        hour: "numeric", // numeric, 2-digit
        minute: "numeric", // numeric, 2-digit
        second: "numeric", // numeric, 2-digit
      }),
    };
  });

  const handleViewClick = (id) => {
    const applicant = applicantList.find((applicant) => applicant.id === id);
    navigate("detail", { state: { applicant } });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    navigate("/");
  };

  const columns = [
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
        <Box>
          <IconButton>
            <VisibilityRounded
              fontWeight={"lighter"}
              onClick={() => handleViewClick(params.row.id)}
            />
          </IconButton>
          <IconButton onClick={() => removeApplicant(params.row.id)}>
            <DeleteRounded fontWeight={"lighter"} />
          </IconButton>
        </Box>
      ),
    },
  ];
  return (
    <Grid container spacing={2} direction="row" justifyContent="center">
      <Grid item md={12} xs={12} sm={12}>
        <Card
          sx={{
            height: 400,
            width: "100%",
            borderRadius: "18px",
            padding: 2,
            marginTop: "15px",
          }}
        >
          <StripedDataGrid
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            }
            key={Math.random()}
            sx={{ border: "none" }}
            rows={rows}
            columns={columns}
            pagination
            page={page}
            pageSize={take}
            rowsPerPageOptions={[take]}
            rowCount={count}
            paginationMode="server"
            onPageChange={(newPage) => {
              console.log(newPage);
              setPage(newPage);
            }}
          />
          <Snackbar
            mt={2}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%", margin: "%10" }}
            >
              Applicant deleted successfully
            </Alert>
          </Snackbar>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ApplicantList;
