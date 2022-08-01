import React from "react";
import { Button, Card, CardContent, Grid, IconButton } from "@mui/material";
import { DownloadOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const JobInfoCard = (props) => {
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
                  <WorkOutlineOutlined fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} xs={12} sm={12} md={12} lg={12} mb={2}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">JobTitle</Typography>
                  <Typography variant="h5">{applicant.jobTitle}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Salary Expectation</Typography>
                  <Typography variant="h5">
                    {applicant.salaryExpectation} Tl
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <Box display="flex " flexDirection="column">
                  <Typography variant="body2">Cv</Typography>

                  <Button
                    style={{
                      color: "#5a5278",
                    }}
                    sx={{
                      marginLeft: 3,
                    }}
                    startIcon={<DownloadOutlined />}
                    href={
                      "https://res.cloudinary.com/dzi4g0acr/image/upload/v1658741035/" +
                      applicant.cv
                    }
                    download
                  >
                    Download
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default JobInfoCard;
