import { Box, Button, Typography } from "@mui/material";
import image from '../styles/imgs/Frame 35.svg';
import icon1 from '../styles/imgs/3rdIcon (1).svg';
import icon2 from '../styles/imgs/3rdGroup 2 (2).svg';
import icon3 from '../styles/imgs/3rdVector (1).svg';
import icon4 from '../styles/imgs/3rdIcon (2).svg';
import image2 from '../styles/imgs/pana.svg';
import { useEffect, useRef, useState } from "react";

import CountUp from 'react-countup';


export default function ThirdSection() {
    const [inView, setInView]=useState(false);
    const state=useRef(null);

    useEffect(()=>{
        const observer=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setInView(true);
                    observer.unobserve(state.current);
                }
            }, {threshold:0.5}
        );
        if(state.current) observer.observe(state.current);

        return()=>{
            if(state.current) observer.unobserve(state.current);
        };
    }, []);

    return <Box  sx={{ display:"grid"}}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "90%", alignItems: "center" }}>
                <img src={image} alt="frame" style={{ justifySelf: "center", width: "100%", height:"70%" }} />
                <Box sx={{ justifySelf: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Typography variant="h3">The unseen of spending three years at Pixelgrade</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Typography>
                    <Button variant='contained' sx={{ textTransform: "none", backgroundColor: "#4CAF4F", padding: "10px 35px", width: "fit-content" }}>Learn More</Button>
                </Box>
            </Box>

            <Box sx={{ display: "grid", 
                        gridTemplateColumns: "1fr 1fr", 
                        alignItems: "center",
                        backgroundColor:"#F5F7FA",
                        padding:"30px"}}>
                <Box sx={{ justifySelf: "center"}}>
                    <Typography variant="h3">Helping a local </Typography>
                    <Typography variant="h3" sx={{color:"#4CAF4F"}}>
                        business reinvent itself
                    </Typography>
                    <Typography>We reached here with our hard work and dedication</Typography>                    
                </Box>

                <Box ref={state}>
                    <Box sx={{ display: "grid", gap:"30px", 
                               gridTemplateColumns: "1fr 1fr", 
                               gridTemplateRows:"1fr 1fr", 
                               width: "90%", 
                               '&>*':{
                                alignItems: "center",
                                gap:"20px"
                               }
                               }}>
                        <Box sx={{ display: "grid", 
                                   gridTemplateColumns: "0.3fr 1fr", 
                                   padding:"10px 20px",
                                   alignItems:"center"}}>
                            <img src={icon1} alt="icon1" style={{width:"50px"}}/>
                            <Box>
                                <Typography variant="h3">
                                    {inView? <CountUp end={2245341} duration={2} separator=","  />:'0'} 
                                </Typography>

                                <Typography variant="h6">Members</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "grid", 
                                    gridTemplateColumns: "0.3fr 1fr", 
                                    padding:"10px 20px"}}>
                            <img src={icon2} alt="icon2"style={{width:"50px"}}/>
                            <Box>
                                <Typography variant="h3">
                                    {inView?<CountUp end={46328} duration={2} separator=","/>:'0'}
                                </Typography>
                                <Typography variant="h6">Clubs</Typography>
                            </Box>
                        </Box>
                        
                        <Box sx={{ display: "grid", gridTemplateColumns: "0.3fr 1fr", padding:"10px 20px"}}>
                            <img src={icon3} alt="icon3" style={{width:"50px"}}/>
                            <Box>
                                <Typography variant="h3">
                                    {inView?<CountUp end={828867} duration={2} separator=","/>:'0'}
                                </Typography>
                                <Typography variant="h6">Event Bookings</Typography>
                            </Box>
                        </Box>
                        
                        <Box sx={{ display: "grid", gridTemplateColumns: "0.3fr 1fr", padding:"10px 20px"}}>
                            <img src={icon4} alt="icon4" style={{width:"50px"}}/>
                            <Box>
                                <Typography variant="h3">
                                    {inView?<CountUp end={1926436} duration={2} separator=","/>:'0'}
                                </Typography>
                                <Typography variant="h6">Payments</Typography>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>                

            </Box>


            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "90%", alignItems: "center" }}>
                <img src={image2} alt="frame" style={{ justifySelf: "center", width: "100%", height:"70%" }} />
                <Box sx={{ justifySelf: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Typography variant="h3">How to design your site footer like we did</Typography>
                    <Typography variant="body2">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</Typography>
                    <Button variant='contained' sx={{ textTransform: "none", backgroundColor: "#4CAF4F", padding: "10px 35px", width: "fit-content" }}>Learn More</Button>
                </Box>
            </Box>


        </Box>
}
