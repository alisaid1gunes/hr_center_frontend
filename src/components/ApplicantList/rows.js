export const rows = (applicantList) => {
  return applicantList.map((applicant) => {
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
};
