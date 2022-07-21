import {React} from 'react';
import {Card, CardContent, Grid, TextField} from "@mui/material";

const ApplicantForm = (props) => {
    const {firstName, setFirstName, lastName, setLastName, age, setAge,
        email, setEmail, city, setCity, address, setAddress, phone, setPhone, jobTitle,
        setJobTitle, salaryExpectation, setSalaryExpectation, country, setCountry }=props;

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
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Firstname"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Lastname"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            margin={'dense'}
                                            type="number"
                                            label="Age"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Email"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Phone"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Address"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="City"
                                            variant="outlined"/>
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Country"
                                            variant="outlined"/>
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={jobTitle}
                                            onChange={(e) => setJobTitle(e.target.value)}
                                            margin={'dense'}
                                            type="text"
                                            label="Job Title"
                                            variant="outlined"/>
                                    </Grid>
                                    <Grid item  md={6}  alignItems='center'justifyContent='center' textAlign='center'>
                                        <TextField
                                            value={salaryExpectation}
                                            onChange={(e) => setSalaryExpectation(e.target.value)}
                                            margin={'dense'}
                                            type="number"
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
