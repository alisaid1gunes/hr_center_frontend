import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import SearchAppBar from "../components/SearchAppBar";
import {Button, Container, Grid, Pagination, Stack} from "@mui/material";
import ApplicantList from "../components/ApplicantList"
import getAllQuery from "../queries/getAllQuery";
import Box from "@mui/material/Box";

const Main = () => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(5);
    const navigate = useNavigate();
    const  {data, loading, error} = useQuery(getAllQuery,{variables:{
            take,
            page,
            search
        }});

    let applicants = {};
    let count = 0;
    if (!loading&&!error){
         applicants = JSON.stringify(data.users);
         console.log(applicants);
            count = parseInt(data.usersCount);

    }
    const handleClick = () => {
        navigate("/new");
    }
    const handleChange = (event, value) => {
        setPage(value);
    };
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
                {loading===false && error===undefined?<ApplicantList applicants={applicants}/>:<div>Loading...</div>}

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={2}
                >
                        <Stack spacing={2}>
                            <Pagination count={Math.ceil(count/take)} page={page} onChange={handleChange} />
                        </Stack>
                </Box>

            </Container>
        </div>
    );
};

export default Main;
