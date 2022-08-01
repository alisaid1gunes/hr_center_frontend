import { React, useContext } from "react";
import { Button, Card, CardContent, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import DELETE_APPLICANT from "../mutations/deleteApplicant";
import getAllQuery from "../queries/getAllQuery";
import {
  CallOutlined,
  DownloadOutlined,
  PersonOutlineRounded,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";

const ApplicantDetails = (props) => {
  const context = useContext(AppContext);
  const { setSnackbarMessage, setOpen } = context;
  const location = useLocation();
  const navigate = useNavigate();
  const { applicant, take, page, search } = location.state;
  console.log(applicant);
  const [deleteApplicant, { data, loading, error }] =
    useMutation(DELETE_APPLICANT);
  console.log({ data, loading, error });
  const removeApplicant = () => {
    deleteApplicant({
      variables: {
        id: applicant.id,
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
    setSnackbarMessage("Applicant deleted successfully");
    navigate("/");
    setOpen(true);
  };

  return (
    <div className="detail-container">
      <Grid container spacing={3} justifyContent="center" mt={7}>
        <Grid item xs={6} sm={6} md={6}>
          <Card
            style={{
              borderRadius: "18px",
              overflowWrap: "break-word",
            }}
          >
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <IconButton
                    sx={{
                      fontSize: "35px",
                    }}
                  >
                    <PersonOutlineRounded fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={12} xs={12} sm={12} md={6} lg={6}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">First name</Typography>
                    <Typography variant="h5">{applicant.firstName}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Last name</Typography>
                    <Typography variant="h5">{applicant.lastName}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Age</Typography>
                    <Typography variant="h5">{applicant.age}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Gender</Typography>
                    <Typography variant="h5">{applicant.gender}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={1}>
        <Grid item xs={6} sm={6} md={6}>
          <Card
            style={{
              borderRadius: "18px",
              overflowWrap: "break-word",
            }}
          >
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <IconButton
                    sx={{
                      fontSize: "35px",
                    }}
                  >
                    <CallOutlined fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={12} xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Email</Typography>
                    <Typography variant="h5">{applicant.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Phone</Typography>
                    <Typography variant="h5">{applicant.phone}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Country</Typography>
                    <Typography variant="h5">{applicant.country}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">City</Typography>
                    <Typography variant="h5">{applicant.city}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Address</Typography>
                    <Typography variant="h5">{applicant.address}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={1}>
        <Grid item xs={6} sm={6} md={6}>
          <Card
            style={{
              borderRadius: "18px",
              overflowWrap: "break-word",
            }}
          >
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <IconButton
                    sx={{
                      fontSize: "35px",
                    }}
                  >
                    <WorkOutlineOutlined fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={12} xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">JobTitle</Typography>
                    <Typography variant="h5">{applicant.jobTitle}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Salary Expectation</Typography>
                    <Typography variant="h5">
                      {applicant.salaryExpectation} Tl
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} ML>
                  <Box display="flex " flexDirection="column">
                    <Typography variant="body2">Cv</Typography>

                    <Button
                      style={{
                        color: "#5a5278",
                      }}
                      sx={{
                        marginLeft: 3,
                      }}
                      startIcon={<DownloadOutlined />}
                      href={
                        "https://res.cloudinary.com/dzi4g0acr/image/upload/v1658741035/" +
                        applicant.cv
                      }
                      download
                    >
                      Download
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" mt={5}>
        <Grid item md={4} textAlign="center">
          <Button
            variant="contained"
            style={{ backgroundColor: "#5a5278" }}
            onClick={removeApplicant}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicantDetails;
