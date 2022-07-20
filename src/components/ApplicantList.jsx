import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Box,Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const ApplicantList = (props) => {
    const navigate = useNavigate();
    const {applicants} = props;
    const applicantList = JSON.parse(applicants);
    console.log(applicantList);
    var cardStyle = {
        width: '35vw',
    }

    const handleClick = (applicant) => {
        navigate('detail', {state: {applicant}});
    }
    return (
        <div>
            {applicantList.map((applicant) => {
                return (
                    <Grid container justifyContent="center" alignItems="center" key={applicant.id} >
                        <Grid item md={4} >
                            <Box mt={2}>
                            <Card style={cardStyle} onClick={()=> handleClick(applicant)}>
                                    <CardActionArea>
                                        <CardContent style={{paddingBottom: "0%", maxHeight: "100px", overflow: "auto"}}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {applicant.firstName} {applicant.lastName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {applicant.jobTitle}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    );
};

export default ApplicantList;
