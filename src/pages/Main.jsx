import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SearchAppBar from "../components/SearchAppBar";
import { Button, Container, Grid, Pagination, Stack } from "@mui/material";
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
  const [page, setPage] = useState(1);
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
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        textAlign="right"
        padding={2}
      >
        <Grid item md={1} mt={7} alignSelf="end">
          <Button
            variant="contained"
            style={{ backgroundColor: "#5a5278" }}
            onClick={handleClick}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <InfoCard header={"Total Applicants"} value={600} />
        <InfoCard header={"Male"} value={300} />
        <InfoCard header={"Female"} value={300} />
        <InfoCard header={"Average Age"} value={25} />
      </Box>
      {loading === false && error === undefined ? (
        <ApplicantList applicants={applicants} />
      ) : (
        <div>Loading...</div>
      )}

      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(count / take)}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Main;
