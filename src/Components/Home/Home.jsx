import React from 'react';
import { Grid } from '@mui/material';
// import { Typography } from '@mui/material';
// import { Box } from '@mui/material';
// import { Container } from '@mui/material';

export default function Home() {
    return (
        <>
        
            <Grid container xs={12} sm={6}>
                <Grid item xs={6}>
                    <Item>
                    Designer Profile Page
                    </Item>
                </Grid>
            </Grid>
            {/* 
            {/* 
            {/* 
                    <Container>
                        <Typography variant='h1'>Designer Profile Page</Typography>
                    </Container>
                </Box>
            </Box> */}
        </>
    )
}
