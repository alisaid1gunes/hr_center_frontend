import React from "react";
import JobInfoCard from "./JobInfoCard";
import ApplicantInfoCard from "./ApplicantInfoCard";
import CommunicationInfoCard from "./CommunicationInfoCard";

const DetailCards = (props) => {
  const { applicant } = props;
  return (
    <>
      <ApplicantInfoCard applicant={applicant} />
      <CommunicationInfoCard applicant={applicant} />
      <JobInfoCard applicant={applicant} />
    </>
  );
};

export default DetailCards;
