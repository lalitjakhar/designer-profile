import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Home() {
    return (
        <>
            <Box sx={{ backgroundColor: 'black', padding: '100px', height: '96vh' }}>
                <Grid container lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container direction='column' item xs={5}
                        sx={{ backgroundColor: '#ede6e6', gap: '10px', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h4' component='h4'>
                            UX / UI
                        </Typography>
                        <Typography variant='h4' component='h4'>
                            Designer Profile
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sx={{ backgroundColor: '#3d4801', height: '100wh' }}>
                        <Box container sx={{ backgroundColor: '#d9f7c9', height: '75%', margin: '100px 120px 100px -68px;' }}>
                            <Box sx={{ padding: '30px' }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
