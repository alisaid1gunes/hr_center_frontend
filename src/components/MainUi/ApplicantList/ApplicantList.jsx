import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import DELETE_APPLICANT from "../../../mutations/deleteApplicant";
import getAllQuery from "../../../queries/getAllQuery";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import DataGridUi from "./DataGridUi";
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

  const handleViewClick = (id) => {
    const applicant = applicantList.find((applicant) => applicant.id === id);
    navigate("detail", { state: { applicant, take, page, search } });
  };

  const handleUpdateClick = (id) => {
    const applicant = applicantList.find((applicant) => applicant.id === id);
    navigate("update", { state: { applicant, take, page, search } });
  };
  return (
    <DataGridUi
      applicantList={applicantList}
      handleViewClick={handleViewClick}
      handleUpdateClick={handleUpdateClick}
      removeApplicant={removeApplicant}
      take={take}
      page={page}
      setPage={setPage}
      count={count}
    />
  );
};

export default ApplicantList;
