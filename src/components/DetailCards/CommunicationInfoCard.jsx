import React from "react";
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import { CallOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CommunicationCardInfo = (props) => {
  const { applicant } = props;
  return (
    <Grid container spacing={3} justifyContent="center" mt={1}>
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
                  <CallOutlined fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} xs={12} sm={12} md={12} lg={12}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Email</Typography>
                  <Typography variant="h5">{applicant.email}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Phone</Typography>
                  <Typography variant="h5">{applicant.phone}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Country</Typography>
                  <Typography variant="h5">{applicant.country}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">City</Typography>
                  <Typography variant="h5">{applicant.city}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} xs={12} sm={12} md={12} lg={12}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Address</Typography>
                  <Typography variant="h5">{applicant.address}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CommunicationCardInfo;
