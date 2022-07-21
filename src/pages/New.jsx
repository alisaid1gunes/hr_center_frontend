import {React, useState} from 'react';
import AppBarNormal from "../components/AppBarNormal";
import ApplicantForm from "../components/ApplicantForm";
import {Button, Grid} from "@mui/material";
import {useMutation} from "@apollo/client";
import CREATE_APPLLICANT from "../mutations/createApplicant";
import getAllQuery from "../queries/getAllQuery";

const New = () => {
    const [applicant, setApplicant] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [salaryExpectation, setSalaryExpectation] = useState();
    const [jobTitle, setJobTitle] = useState('');

    const [createApplicant, {data, loading, error}] = useMutation(CREATE_APPLLICANT);

    const addApplicant = () => {
        createApplicant({
            variables: {
                data: {
                    firstName,
                    lastName,
                    age: parseInt(age),
                    email,
                    phone,
                    address,
                    city,
                    country,
                    salaryExpectation: parseInt(salaryExpectation),
                    jobTitle
                }


            },
            refetchQueries: [
                {query: getAllQuery},
                'users'
            ],
        });

    }
    const onClick = () => {
        console.log(age, typeof age);
        addApplicant();
    }

    return (
        <div>
            <AppBarNormal/>
            <Grid container md={12} direction='row' justifyContent="center" mt={5}>
                <Grid item md={6} textAlign='center'>
                    <h1>Add New Applicant</h1>
                </Grid>
            </Grid>

            <ApplicantForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                age={age}
                setAge={setAge}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                country={country}
                setCountry={setCountry}
                salaryExpectation={salaryExpectation}
                setSalaryExpectation={setSalaryExpectation}
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
            />
            <Grid container md={12} direction='row' justifyContent="center" mt={5}>
                <Grid item md={6} textAlign='center'>
                    <Button variant={'contained'} color={'primary'} size='large' onClick={onClick}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default New;
