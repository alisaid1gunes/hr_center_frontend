import {React,useState} from 'react';
import AppBarNormal from "../components/AppBarNormal";
import ApplicantForm from "../components/ApplicantForm";
import {Button, Grid} from "@mui/material";
const New = () => {
    const [applicant, setApplicant] = useState({});
    return (
        <div>
            <AppBarNormal/>
            <Grid container md={12} direction='row' justifyContent="center" mt={5}>
                <Grid item md={6} textAlign='center'>
                    <h1>Add New Applicant</h1>
                </Grid>
            </Grid>
            <ApplicantForm applicant={applicant} setApplicant={setApplicant}/>
            <Grid container md={12} direction='row' justifyContent="center" mt={5}>
                <Grid item md={6} textAlign='center'>
                    <Button variant={'contained'} color={'primary'} size='large'>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default New;