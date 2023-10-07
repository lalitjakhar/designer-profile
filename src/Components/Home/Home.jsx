import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardPic from '../../Assets/Cardpic.jpg';

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
                                <CardActionArea sx={{ justifyContent: 'center' }}>
                                    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            image={CardPic}
                                            alt="green iguana"
                                            sx={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', justifyContent: 'center' }}
                                        />
                                    </Stack>
                                    <Stack sx={{justifyContent:'center', alignItems: 'center' }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div">
                                                Nusaiba Safeena
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#28402e' }}>
                                                UX / UI Designer
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                Ui is the saddle,the stirrups & the reins. UX is the feeling you get being able to ride the horse.
                                            </Typography>
                                        </CardContent>
                                    </Stack>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant='contained' sx={{ backgroundColor: '#3d4801', justifyContent: 'center' }}>
                                        Follow
                                    </Button>
                                </CardActions>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100px', width: '50%', backgroundColor: 'white', padding: '20px', gap: '30px' }}>
                                    <Box columns={3}>
                                        <Typography>
                                            <h4>5896</h4>
                                        </Typography>
                                        <Typography>
                                            <h5>Posts</h5>
                                        </Typography>
                                    </Box>
                                    <Box columns={3}>
                                        <Typography>
                                            <h4>8952</h4>
                                        </Typography>
                                        <Typography>
                                            <h5>Likes</h5>
                                        </Typography>
                                    </Box>
                                    <Box columns={3}>
                                        <Typography>
                                            <h4>6545</h4>
                                        </Typography>
                                        <Typography>
                                            <h5>Followers</h5>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
