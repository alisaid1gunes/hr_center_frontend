import { React, useContext } from "react";
import { Button, Grid } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import DELETE_APPLICANT from "../mutations/deleteApplicant";
import getAllQuery from "../queries/getAllQuery";
import DetailCards from "../components/DetailCards/DetailCards";

const Detail = (props) => {
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
      <DetailCards applicant={applicant} />

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

export default Detail;
