import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Box, Button, Stack, Typography } from '@mui/material';
import img from '../styles/imgs/Illustration.svg';
import '../styles/style.css';

const MainPage = () => {

    return (
        <Box sx={{padding:"9.57% 0", display:"flex", backgroundColor:"#F5F7FA"}}>
        <Swiper
        modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            loop={true}
            spaceBetween={0}
        >
            
            <SwiperSlide>
                <Stack sx={{display:"grid", gridTemplateColumns:"1fr 1fr", width:"80%", justifySelf:"center"}}>
                    <Box sx={{"&>*":{
                        marginBottom:3
                    }}}>
                        <Typography variant='h3'>
                            Lessons and insights<br/>
                            <Typography variant='h3' component="span" color='#4CAF4F'> from 8 years</Typography>
                        </Typography>
                        <Typography>
                            Where to grow your business as a photographer: site or social media?
                        </Typography>
                        <Button variant='contained' sx={{textTransform:"none", backgroundColor:"#4CAF4F", padding:"10px 35px"}}>Register</Button>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                        <img src={img} alt='img' width={300}/>
                    </Box>
                </Stack>
            </SwiperSlide>

            <SwiperSlide>
                <Stack sx={{display:"grid", gridTemplateColumns:"1fr 1fr", width:"80%", justifySelf:"center"}}>
                    <Box sx={{"&>*":{
                        marginBottom:3
                    }}}>
                        <Typography variant='h3'>
                            Lessons and insights<br/>
                            <Typography variant='h3' component="span" color='#4CAF4F'> from 8 years</Typography>
                        </Typography>
                        <Typography>
                            Where to grow your business as a photographer: site or social media?
                        </Typography>
                        <Button variant='contained' sx={{textTransform:"none", backgroundColor:"#4CAF4F", padding:"10px 35px"}}>Register</Button>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                        <img src={img} alt='img' width={300}/>
                    </Box>
                </Stack>
            </SwiperSlide>

            <SwiperSlide>
                <Stack sx={{display:"grid", gridTemplateColumns:"1fr 1fr", width:"80%", justifySelf:"center", marginBottom:5}}>
                    <Box sx={{"&>*":{
                        marginBottom:3
                    }}}>
                        <Typography variant='h3'>
                            Lessons and insights<br/>
                            <Typography variant='h3' component="span" color='#4CAF4F'> from 8 years</Typography>
                        </Typography>
                        <Typography>
                            Where to grow your business as a photographer: site or social media?
                        </Typography>
                        <Button variant='contained' sx={{textTransform:"none", backgroundColor:"#4CAF4F", padding:"10px 35px"}}>Register</Button>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                        <img src={img} alt='img' width={300}/>
                    </Box>
                </Stack>
            </SwiperSlide>
          
        </Swiper>
        </Box>
    );
};

export default MainPage;
