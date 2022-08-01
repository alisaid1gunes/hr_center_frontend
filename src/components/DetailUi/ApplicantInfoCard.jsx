import React from "react";
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import { PersonOutlineRounded } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ApplicantInfoCard = (props) => {
  const { applicant } = props;
  return (
    <Grid container spacing={3} justifyContent="center" mt={7}>
      <Grid item xs={6} sm={6} md={6}>
        <Card
          style={{
            borderRadius: "18px",
            overflowWrap: "break-word",
          }}
        >
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <IconButton
                  sx={{
                    fontSize: "35px",
                  }}
                >
                  <PersonOutlineRounded fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} xs={12} sm={12} md={6} lg={6} mb={2}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">First name</Typography>
                  <Typography variant="h5">{applicant.firstName}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Last name</Typography>
                  <Typography variant="h5">{applicant.lastName}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Age</Typography>
                  <Typography variant="h5">{applicant.age}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Gender</Typography>
                  <Typography variant="h5">{applicant.gender}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ApplicantInfoCard;
