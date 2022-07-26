import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

export default function AppBarNormal() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        onClick={() => {
                            navigate('/');
                        }}
                        style={{cursor: 'default'}}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: {sm: 'block' } }}
                    >
                        Job Applicants Manager
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
