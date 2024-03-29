import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Zoom } from 'react-reveal';

const Team = ({member}) => {
    const {name, position, img} = member;
    return (
        <Grid item xs={12} sm={6} md={3} className='pics'>
            <Zoom>
            <Card sx={{ minWidth: 275, border: 0 ,boxShadow: 0}}>
                <CardMedia
                    component="img"
                    style ={{width: 'auto' , margin: '0 auto'}}
                    image={img}
                    alt="green iguana"
                />
                <CardContent style={{color: '#1d242e', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    
                    <Typography variant="body2">
                        {position}
                    </Typography>
                </CardContent>
            </Card> 
            </Zoom>
                   
        </Grid>
    );
};

export default Team;