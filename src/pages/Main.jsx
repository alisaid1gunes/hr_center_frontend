import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import ApplicantList from "../components/ApplicantList";
import getAllQuery from "../queries/getAllQuery";
import Box from "@mui/material/Box";
import { AppContext } from "../context/AppContext";
import AddIcon from "@mui/icons-material/Add";
import InfoCard from "../components/InfoCard";
import "../components/index.css";
const Main = () => {
  const context = useContext(AppContext);
  const {
    search,
    setSearch,
    open,
    setOpen,
    snackbarMessage,
    setSnackbarMesssage,
  } = context;
  console.log(search);
  const [page, setPage] = useState(0);
  const [take, setTake] = useState(5);
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(getAllQuery, {
    variables: {
      take,
      page,
      search,
    },
  });

  let applicants = {};
  let count = 0;
  let maleCount = 0;
  let femaleCount = 0;
  let usersAvgAge = 0;
  if (!loading && !error) {
    applicants = JSON.stringify(data.users);
    console.log(applicants);
    count = parseInt(data.usersCount);
    maleCount = parseInt(data.usersMaleCount);
    femaleCount = parseInt(data.usersFemaleCount);
    usersAvgAge = parseInt(data.usersAvgAge);
  }
  const handleClick = () => {
    navigate("new", { state: { take, page, search } });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="main-container">
      <Box
        mt={7}
        display="flex"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "end",
          textAlign: "right",
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#5a5278" }}
          onClick={handleClick}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        mt={4}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Total Applicants"} value={count} />
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Male"} value={maleCount} />
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Female"} value={femaleCount} />
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Average Age"} value={usersAvgAge} />
        </Grid>
      </Grid>
      {loading === false && error === undefined ? (
        <Box>
          <ApplicantList
            applicants={applicants}
            page={page}
            setPage={setPage}
            take={take}
            count={count}
            open={open}
            setOpen={setOpen}
          />
        </Box>
      ) : (
        <div>Loading...</div>
      )}
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
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Main;
