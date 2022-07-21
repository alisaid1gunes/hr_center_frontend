import React from 'react';
import {useLocation} from "react-router-dom";
import AppBarNormal from "../components/AppBarNormal";
import {Box, Button, Card, CardActionArea, CardActions, CardContent, Divider, Grid, TextField} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@mui/material/Typography";
import ApplicantDetails from "../components/ApplicantDetails";
const Detail = () => {
    const location = useLocation();
    const {applicant} = location.state;
    console.log(applicant);

    return (
        <div>
            <AppBarNormal/>

            <Grid container  direction='row' justifyContent='center' mt={5}  >
                <Grid item md={4} >
                    <Card>
                        <CardContent >
                            <Typography gutterBottom variant="h3" component="div" textAlign='center'>
                                {applicant.firstName} {applicant.lastName}
                            </Typography>
                            <Typography variant="h5" color="text.secondary" textAlign='center' >
                                {applicant.jobTitle}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" textAlign='center' mb={1}>
                                {`${applicant.country}/${applicant.city}`}
                            </Typography>
                            <Divider />
                            <Typography variant="h5" textAlign='center'>
                                Detailed Information
                            </Typography>
                           <ApplicantDetails applicant={applicant}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container  direction='row' justifyContent='center' mt={5}  >
                <Grid item md={4} textAlign='center' >
                    <Button variant="contained" color="error">Delete</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Detail;
