import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const ApplicantDetails = (props) => {
    const { applicant } = props;
    const keys = ['First Name', 'Last Name','Age','Email', 'Phone', 'Address', 'City', 'Country','Job Title','Salary Expectation'];
    const valueKeys = ['firstName', 'lastName','age','email', 'phone', 'address', 'city', 'country','jobTitle','salaryExpectation'];
    return (
        <div>
            {keys.map((key, index) => {
                if(index!==0){
                return (
                        <Grid container direction='row' >
                            <Grid item md={6} justifyContent='left'>
                                <Typography variant="h6" color="text.secondary" textAlign='left' >
                                    {`${key}:  `}
                                </Typography>
                            </Grid>
                            <Grid item md={6} justifyContent='end'textAlign='right' >
                                <Typography variant="h6" color="text.secondary" >
                                    {
                                      key === 'Salary Expectation' ? `${applicant[valueKeys[index]]} TL` : applicant[valueKeys[index]]
                                    }

                                </Typography>
                            </Grid>
                        </Grid>
                )}
            }
            )}

        </div>
    );
};

export default ApplicantDetails;
