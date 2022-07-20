import React from 'react';
import {useLocation} from "react-router-dom";
import AppBarNormal from "../components/AppBarNormal";
import {Box, Button, Card, CardActionArea, CardContent, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
const Detail = () => {
    const location = useLocation();
    const {applicant} = location.state;

    return (
        <div>
            <AppBarNormal/>

            <Button variant='contained' color='primary'>
                Edit
            </Button>
            <Button variant='contained' color='error'>
                Delete
            </Button>
        </div>
    );
};

export default Detail;
