import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import getAllQuery from "../queries/getAllQuery";
import { AppContext } from "../context/AppContext";
import "../components/index.css";
import MainUi from "../components/MainUi/MainUi";
const Main = () => {
  const context = useContext(AppContext);
  const { search, open, setOpen, snackbarMessage } = context;
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
      <MainUi
        open={open}
        setOpen={setOpen}
        applicants={applicants}
        handleClick={handleClick}
        handleClose={handleClose}
        count={count}
        maleCount={maleCount}
        femaleCount={femaleCount}
        usersAvgAge={usersAvgAge}
        loading={loading}
        error={error}
        page={page}
        setPage={setPage}
        take={take}
        setTake={setTake}
      />
    </div>
  );
};

export default Main;
