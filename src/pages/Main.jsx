import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import SearchAppBar from "../components/SearchAppBar";
import {Button, Container, Grid} from "@mui/material";
import ApplicantList from "../components/ApplicantList"
import getAllQuery from "../queries/getAllQuery";

const Main = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const {data, loading, error} = useQuery(getAllQuery);
    let applicants = {};
    if (!loading&&!error){
         applicants = JSON.stringify(data.users);
    }
    const handleClick = () => {
        navigate("/new");
    }
    return (
        <div>
            {console.log(search)}
            <SearchAppBar search={search} setSearch={setSearch}/>
            <Container maxWidth={"xl"} style={{ background: '#f2f6fc' ,height:'100vh' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    padding={2}
                >
                    <Grid item md={2}>
                        <Button variant='contained' color="primary" onClick={handleClick}>Add New Applicant</Button>
                    </Grid>
                </Grid>
                {loading===false && error===undefined?<ApplicantList applicants={applicants} search={search}/>:<div>Loading...</div>}
            </Container>
        </div>
    );
};

export default Main;
