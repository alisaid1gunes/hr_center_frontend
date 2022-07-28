import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SearchAppBar from "../components/SearchAppBar";
import {
  Alert,
  Button,
  Container,
  Grid,
  Pagination,
  Snackbar,
  Stack,
} from "@mui/material";
import ApplicantList from "../components/ApplicantList";
import getAllQuery from "../queries/getAllQuery";
import Box from "@mui/material/Box";
import DrawerMenu from "../components/DrawerMenu";
import { SearchContext, SearchDispatchContext } from "../context/SearchContext";
import AddIcon from "@mui/icons-material/Add";
import InfoCard from "../components/InfoCard";
import "../components/index.css";
const Main = () => {
  const searchAPI = useContext(SearchContext);
  const { search, setSearch } = searchAPI;
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
  if (!loading && !error) {
    applicants = JSON.stringify(data.users);
    console.log(applicants);
    count = parseInt(data.usersCount);
  }
  const handleClick = () => {
    navigate("/new");
  };
  const handleChange = (event, value) => {
    setPage(value);
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
          <InfoCard header={"Total Applicants"} value={600} />
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Male"} value={300} />
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Female"} value={300} />
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <InfoCard header={"Average Age"} value={25} />
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
          />
        </Box>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Main;
