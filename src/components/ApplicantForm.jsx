import React from 'react';
import {Card, CardContent, Grid, TextField} from "@mui/material";

const ApplicantForm = () => {
    return (
        <div>
            <Grid container justifyContent="center" >
                <Grid item md={6} mt={5}  >
                    <Card style={{display:"flex" ,justifyContent:"center" ,alignItems:'center'}} >
                        <CardContent>
                            <form>
                                <Grid container direction="row" justifyContent="center" alignItems="center" md={12} spacing={0}>
                                    <Grid item md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            margin={'dense'}
                                            type="text"
                                            label="Firstname"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="text"
                                            label="Lastname"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="number"
                                            label="Age"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="text"
                                            label="Email"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="text"
                                            label="Phone"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="number"
                                            label="Address"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="text"
                                            label="City"
                                            variant="outlined"/>
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="text"
                                            label="Country"
                                            variant="outlined"/>
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField

                                            margin={'dense'}
                                            type="text"
                                            label="Job Title"
                                            variant="outlined"/>
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            margin={'dense'}
                                            type="text"
                                            label="Salary Expectation"
                                            variant="outlined"/>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default ApplicantForm;
