import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Grid } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { DeleteRounded, VisibilityRounded } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import DELETE_APPLICANT from "../mutations/deleteApplicant";
import getAllQuery from "../queries/getAllQuery";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
  const context = useContext(AppContext);
  const { search, setOpen, setSnackbarMessage } = context;
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
      refetchQueries: [
        {
          query: getAllQuery,
          variables: {
            take,
            page,
            search,
          },
        },
        "users",
      ],
    });
    setSnackbarMessage("Applicant deleted");
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
        weekday: "short",
        day: "numeric",
        year: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
    };
  });

  const handleViewClick = (id) => {
    const applicant = applicantList.find((applicant) => applicant.id === id);
    navigate("detail", { state: { applicant, take, page, search } });
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
        </Card>
      </Grid>
    </Grid>
  );
};

export default ApplicantList;
