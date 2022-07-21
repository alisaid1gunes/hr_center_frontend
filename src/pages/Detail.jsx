import {React, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import AppBarNormal from "../components/AppBarNormal";
import {Alert, Button, Card, CardContent, Divider, Grid, Snackbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import ApplicantDetails from "../components/ApplicantDetails";
import DELETE_APPLICANT from "../mutations/deleteApplicant";
import {useMutation} from "@apollo/client";
import getAllQuery from "../queries/getAllQuery";
const Detail = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {applicant} = location.state;
    console.log(applicant);
    const [deleteApplicant ,{ data, loading, error }] = useMutation(DELETE_APPLICANT);
    console.log({data, loading, error});
    const removeApplicant = () => {
        deleteApplicant({
            variables: {
                id: applicant.id
            },
            refetchQueries: [
                {query: getAllQuery},
                'users'
            ],
        });
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        navigate("/");
    };

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
                    <Button variant="contained" color="error" onClick={removeApplicant}>Delete</Button>
                </Grid>
            </Grid>
            <Snackbar  mt={2} open={open} autoHideDuration={2000} onClose={handleClose}  anchorOrigin={{ vertical: "bottom", horizontal:'center', }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' ,margin:'%10'}}>
                    User deleted successfully
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Detail;
