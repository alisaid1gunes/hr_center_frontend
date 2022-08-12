import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProcessCard from './ProgressCard'

const ProcessSection = ({title,data,id,provided}) => {
  return (
    <Grid lg={3} xs={12} pr={1} ref={provided.innerRef} {...provided.droppableProps} sx={{height:['300px','300px','300px','600px','600px'],mt:3}}>
        <Grid container flexDirection={'column'} bgcolor={'#fff'} borderRadius={1} sx={{height:'100%'}}>
            <Grid sx={{height:['15%','15%','15%','7%','7%']}}>
                <Typography variant='body1' ml={2} mt={1} mb={1}>
                    {title}
                </Typography>
            </Grid>
            <Grid container flexWrap={'initial'} flexDirection={'column'} sx={{overflow:'scroll',height:['85%','85%','85%','93%','93%'],overflowX:'hidden'}}>
                {
                data 
                &&
                data.users.filter(item => item.applicationStatus === title).map((item,index) => {
                    return <ProcessCard index={index} id={id+index} data={item} key={id+index} />
                })}
            </Grid>
        </Grid>
        {provided.placeholder}
    </Grid>
  )
}

export default ProcessSection