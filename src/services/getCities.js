const getCities = async (countryCode) => {
  const settings = {
    method: "GET",
    headers: {
      "X-CSCAPI-KEY":
        "OHg1dlNYMnQ1WkJ4VXV0NHRVMVpUdndKYmVmNzBUeWdna3JEcXVUbA==",
    },
  };

  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
    settings
  );
  const data = await response.json();
  return data;
};

module.exports = getCities;
