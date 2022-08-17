import React, { useEffect, useState } from 'react'
import { Avatar, Button, Grid, Tab, Tabs, Typography, Box, Link, CircularProgress } from '@mui/material';
import { Box as ImageBox } from '@mui/system'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkIcon from '@mui/icons-material/Link';
import { useLazyQuery, useMutation, gql } from "@apollo/client";
import { GITHUB_USER_QUERY as GITHUB_USER} from '../../queries/githubUserQuery'
import { ToGraphqlDateTime } from '../../utils';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CommitIcon from '@mui/icons-material/Commit';
import TagIcon from '@mui/icons-material/Tag';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import axios from 'axios'
import GoldMedal from '../../icons/GoldMedal';
import SilverMedal from '../../icons/SilverMedal';
import BronzeMedal from '../../icons/BronzeMedal';
import getAllQuery from "../../queries/getAllQuery";

const status = ['Application','Call','Interview','Offer']

const UPDATE_STATUS = gql`
  mutation ChangeStatus($data: ChangeStatusInput!) {
    changeStatus(data: $data) 
  }
`;

const UserInfoDialog = ({userData,open,setOpen,login = 'softwareVirus'}) => {
    const [value, setValue] = useState('1');
    const [stackoverflowData, setStackoverflowData] = useState(undefined)
    const currentTime = ToGraphqlDateTime(Date().toString())
    const [updateApplicant, result] = useMutation(UPDATE_STATUS);
    const [getGithubData,{ loading, error, data }] = useLazyQuery(GITHUB_USER, {
        variables: {
            login:login,
            fromDate:currentTime[0],
            toDate:currentTime[1]
        },
        context: {
            clientName: 'githubLink'
        }
    });
    const handleProgress = () => {
        updateApplicant({
          variables: {
            data: {
              id: userData.id,
              status: status[status.indexOf(userData.applicationStatus)+1]
            }
          },
          refetchQueries: [
            {
              query: getAllQuery,
              variables: {
                take: 25,
                page: 0,
                search: '',
              },
            },
            "Users",
          ],
        });
    }
    const handleTabsChange = (event,newValue) => {
        setValue(newValue)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = () => {
        let hostname = 'https://api.stackexchange.com/2.3/users/'
        let id = '12101554'
        let dataTMP = {}
        axios.get(hostname+id+'?order=desc&sort=reputation&site=stackoverflow&filter=!6VvPDzOQa-NkZ')
        .then(res => {
            dataTMP.userInfo = res.data.items
            axios.get(hostname+id+'/tags?order=desc&sort=popular&site=stackoverflow')
            .then(response => {
                dataTMP.userInfo[0] = {...dataTMP.userInfo[0],tags:response.data.items} 
                setStackoverflowData(dataTMP)
            })
        })
    }
    
    return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        
        {
            userData.applicationStatus !== 'Offer'
            &&
            <DialogActions>
              <Button variant='contained' disableFocusRipple sx={{bgcolor:'#5a5278 !important'}} onClick={() => { handleProgress(); handleClose()}}>
                Progress
              </Button>
            </DialogActions>
        }
        <DialogContent dividers={false}>
          <Grid container p={2}>
            <Grid item xs={12}>
                <Grid container alignItems={'center'}>
                    <Avatar sx={{width:'200px',height:'200px'}}/>
                    <Grid ml={5}>
                        <Typography variant='h5'>
                            {userData.firstName} {userData.lastName}
                        </Typography>
                        <Typography variant='body1' sx={{opacity:0.8   }}>
                            {userData.jobTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid mt={3}>
                <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabsChange} aria-label="lab API tabs example">
                          <Tab label="Overview" value="1" />
                          <Tab label="Github" value="2" onClick={() => getGithubData()}/>
                          <Tab label="StackOverflow" value="3" onClick={handleClick}/>
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <Grid>
                            <Grid sx={{borderBottom:'1px solid rgba(0,0,0, 0.2)',p:'16px 0'}}>
                                <Typography variant='body1' fontWeight={500} display={'flex'} alignItems={'center'} color={'black'}>
                                    <EmailIcon sx={{mr:1}}/> Email 
                                    <Link href={'mailto: '+userData.email} sx={{color:'initial',ml: 5}}>
                                        {userData.email}
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid sx={{borderBottom:'1px solid rgba(0,0,0, 0.2)',p:'16px 0'}}>
                                <Typography variant='body1' fontWeight={500} display={'flex'} alignItems={'center'} color={'black'}>
                                    <PhoneIcon sx={{mr:1}}/> Phone
                                    <Link href={'tel: '+userData.phone} sx={{color:'initial',ml: 4}}>
                                        {userData.phone}
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid sx={{borderBottom:'1px solid rgba(0,0,0, 0.2)',p:'16px 0'}}>
                                <Typography variant='body1' fontWeight={500} display={'flex'} alignItems={'center'} color={'black'}>
                                    <LinkIcon sx={{mr:1}}/> Socail
                                    <Typography variant='body1' sx={{p:0,ml:4.5}}>
                                        -
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value="2">
                        {
                            (loading && (data === null || data === undefined)) && !error 
                            ?
                            <CircularProgress />
                            :
                            error || (data === null || data === undefined)
                            ?
                            <Grid>
                                There is no github user
                            </Grid>
                            :
                            <Grid>
                                <Typography variant='h6'>
                                    {data.user.name.split(' ').map(item => item[0].toUpperCase()+item.slice(1,item.length).toLowerCase()).join(' ')}
                                    's Github Stats
                                </Typography>
                                <Grid container mt={2}>
                                    <Grid container item xs={5} spacing={1} flexDirection={'column'}>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <StarBorderIcon sx={{mr:1}}/> Total Starts: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <CommitIcon sx={{mr:1}}/> Total Commits: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <CallMergeIcon sx={{mr:1}}/> Total PR's: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <ErrorOutlineIcon sx={{mr:1}}/> Total Issues: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <CollectionsBookmarkSharpIcon sx={{mr:1}}/> Contributed to: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <AutoAwesomeMotionOutlinedIcon sx={{mr:1}}/> Total Respositories: 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={7} spacing={1} flexDirection={'column'}>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {data.user.starredRepositories.totalCount} 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {data.user.contributionsCollection.totalCommitContributions}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {data.user.contributionsCollection.totalPullRequestContributions}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {data.user.contributionsCollection.totalIssueContributions}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {data.user.repositoriesContributedTo.totalCount}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {data.user.repositories.totalCount} 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                      </TabPanel>
                      <TabPanel value="3">
                      {
                            stackoverflowData
                            ?
                            <Grid>
                                <Typography variant='h6'>
                                    {stackoverflowData.userInfo[0].display_name}
                                    's StackOverflow Stats
                                </Typography>
                                <Grid container mt={2}>
                                    <Grid container item xs={5} spacing={1} flexDirection={'column'}>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <StarBorderIcon sx={{mr:1}}/> Total Badgets: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <Grid sx={{height:'24px',width:'24px',mr:1}} container alignItems={'center'} justifyContent={'center'}>
                                                    <ImageBox 
                                                        component={'img'} 
                                                        src='./images/prestige.png' 
                                                        style={{height:'18px'}}
                                                    />
                                                </Grid>
                                                Reputation: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <QuestionMarkIcon sx={{mr:1}}/> Total Questions: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <QuestionAnswerIcon sx={{mr:1}}/> Total Answers: 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <TagIcon sx={{mr:1}}/> Top 3 Tags:
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={7} spacing={1} flexDirection={'column'}>
                                        <Grid item sx={{height:32}}>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                <Grid container alignItems={'center'}>
                                                    <GoldMedal mr={10}/> {stackoverflowData.userInfo[0].badge_counts.gold} 
                                                </Grid>
                                                <Grid container alignItems={'center'}>
                                                    <SilverMedal mr={10}/> {stackoverflowData.userInfo[0].badge_counts.silver}
                                                </Grid>
                                                <Grid container alignItems={'center'}>
                                                    <BronzeMedal mr={10}/> {stackoverflowData.userInfo[0].badge_counts.bronze} 
                                                </Grid>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {stackoverflowData.userInfo[0].reputation}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {stackoverflowData.userInfo[0].question_count}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'}>
                                                {stackoverflowData.userInfo[0].answer_count}
                                            </Typography>
                                        </Grid>
                                        <Grid item height={'32px'}>
                                            <Typography variant='body1' display={'flex'} alignItems={'center'} flexDirection={'column'}>
                                                <Grid container alignItems={'center'}>
                                                    {stackoverflowData.userInfo[0].tags[0].name} 
                                                </Grid>
                                                <Grid container alignItems={'center'}>
                                                    {stackoverflowData.userInfo[0].tags[1].name}
                                                </Grid>
                                                <Grid container alignItems={'center'}>
                                                    {stackoverflowData.userInfo[0].tags[2].name} 
                                                </Grid>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            :
                            <CircularProgress />
                        }
                      </TabPanel>
                    </TabContext>
                </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

export default UserInfoDialog