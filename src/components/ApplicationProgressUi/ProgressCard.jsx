import { Avatar, Button, Grid, Typography, Link } from '@mui/material'
import React, {useState} from 'react'
import { Draggable } from 'react-beautiful-dnd'
import UserInfoDialog from './UserInfoDialog';

const ProgressCard = ({data,index,id}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };
  return (
    <Draggable draggableId={id} index={index}>
        {
            (provided) => (
                <Grid container>
                    <Grid container>
                    <Button sx={{width:'100%',textDecoration:'none',color:'initial'}} onClick={handleClickOpen()}>
                        <Grid container height={70} p={0.5} {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                            <Grid container alignItems={'center'} border={'1px solid #9d9fa1'}  borderRadius={1}>
                                <Grid p={0.8} item>
                                    <Avatar/>
                                </Grid>
                                <Grid item xs={9} alignItems='center' container>
                                    <Grid item alignItems='center' container overflow='hidden'>
                                        <Typography variant='body1' sx={{textAlign:'left',fontSize: '14px',whiteSpace:'nowrap',width:'100%'}}>
                                            {data.firstName+' '+data.lastName}
                                        </Typography>
                                        <Typography variant='caption' sx={{fontSize:9,textAlign:'left',whiteSpace:'nowrap',width:'100%'}}>
                                            {data.jobTitle}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Button>
                    </Grid>
                    <UserInfoDialog userData={data} open={open} setOpen={setOpen}/>
                </Grid>
            )
        }
    </Draggable>
  )
}

export default ProgressCard