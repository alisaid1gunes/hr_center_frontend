import { useQuery, useMutation, gql } from '@apollo/client'
import { Grid, Typography } from '@mui/material'
import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import ProcessSection from '../components/ApplicationProgressUi/ProcessSection'
import getAllQuery from "../queries/getAllQuery";

const UPDATE_STATUS = gql`
  mutation ChangeStatus($data: ChangeStatusInput!) {
    changeStatus(data: $data) 
  }
`;

const useStyle = makeStyles({
    root: {
      '@media (max-width: 1380px)': {
        flexDirection: 'column'
      },
      textAlign:'center'
    }
})


const ApplicationProcess = () => {
  const classes = useStyle()
  const { data, loading, error } = useQuery(getAllQuery, {
    variables: {
      take: 25,
      page:0,
      search: ''
    }
  });
  const [updateApplicant, result] = useMutation(UPDATE_STATUS);
  
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add={};
    // Source Logic
    if (source.droppableId === "i1") {
      add = data.users.filter(item => item.applicationStatus === 'Application')[source.index];
    } else if(source.droppableId === "i2"){
      add = data.users.filter(item => item.applicationStatus === 'Call')[source.index];
    } else if(source.droppableId === "i3") {
      add = data.users.filter(item => item.applicationStatus === 'Interview')[source.index]
    } else {
      add = data.users.filter(item => item.applicationStatus === 'Offer')[source.index]
    }
    let applicationStatus = add.applicationStatus
    // Destination Logic
    if (destination.droppableId === "i1") {
      applicationStatus = 'Application'
    } else if(destination.droppableId === "i2") {
      applicationStatus = 'Call'
    } else if(destination.droppableId === "i3") {
      applicationStatus = 'Interview'
    } else {
      applicationStatus = 'Offer'
    }
    updateApplicant({
      variables: {
        data: {
          id: add.id,
          status: applicationStatus
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
    
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container pl={30} position={'relative'} top={64} className={classes.root}>
        <Droppable droppableId='i1'>
          {
            (provided) => (
              
                !loading
                &&
                <ProcessSection id={'i1'} provided={provided} title={'Application'} data={data}/>
              
            )
          }
        </Droppable>
        <Droppable droppableId='i2'>
          {
            (provided) => (
              !loading
              &&
              <ProcessSection id='i2' provided={provided} title={'Call'} data={data}/>
            )
          }
        </Droppable>
        <Droppable droppableId='i3'>
          {
            (provided) => (
              !loading
              &&
              <ProcessSection id='i3' provided={provided} title={'Interview'} data={data}/>
            )
          }
        </Droppable>
        <Droppable droppableId='i4'>
          {
            (provided) => (
              !loading 
              &&
              <ProcessSection id='i4' provided={provided} title={'Offer'} data={data}/>
            )
          }
        </Droppable>
      </Grid>
    </DragDropContext>
  )
}

export default ApplicationProcess