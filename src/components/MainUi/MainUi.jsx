import React from "react";
import AddButton from "./AddButton";
import { Grid } from "@mui/material";
import InfoCardSection from "./InfoCardSection";
import Box from "@mui/material/Box";
import ApplicantList from "./ApplicantList/ApplicantList";
import SnackbarUi from "./SnackbarUi";

const MainUi = (props) => {
  const {
    open,
    setOpen,
    applicants,
    handleClick,
    handleClose,
    count,
    maleCount,
    femaleCount,
    usersAvgAge,
    loading,
    error,
    page,
    setPage,
    take,
    snackbarMessage,
  } = props;
  return (
    <>
      <AddButton handleClick={handleClick} />
      <Grid
        container
        spacing={2}
        mt={4}
        direction="row"
        justifyContent="space-between"
      >
        <InfoCardSection
          count={count}
          maleCount={maleCount}
          femaleCount={femaleCount}
          usersAvgAge={usersAvgAge}
        />
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

      <SnackbarUi
        open={open}
        handleClose={handleClose}
        snackbarMessage={snackbarMessage}
      />
    </>
  );
};

export default MainUi;
