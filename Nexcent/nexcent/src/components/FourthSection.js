import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import image from '../styles/imgs/image 9.svg'

import i1 from '../styles/imgs/Logo.png';
import i2 from '../styles/imgs/Logo (1).png';
import i3 from '../styles/imgs/Logo (2).png';
import i4 from '../styles/imgs/Logo (3).png';
import i5 from '../styles/imgs/Logo (4).png';
import i6 from '../styles/imgs/Logo (5).png';
import i7 from '../styles/imgs/Logo (6).png';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import img19 from '../styles/imgs/image 19.svg';
import img20 from '../styles/imgs/image 20.svg';


export default function FourthSection(){
    return <Box>
            <Box sx={{ display: "grid", 
                        gridTemplateColumns: "0.6fr 1fr", 
                        alignItems: "center",
                        backgroundColor:"#F5F7FA",
                        padding:"1% 4%" }}>
                <img src={image} alt="frame" style={{ justifySelf: "center", width: "100%", height:"70%" }} />
                <Box sx={{ justifySelf: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Typography variant="body1">
Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.                        
                    </Typography>
                    <Typography variant="h4" sx={{color:"#4CAF4F"}}>
                        Tim Smith
                    </Typography>
                    <Typography>British Dragon Boat Racing Association</Typography>

                    <Stack sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", width:"100%", margin:"50px 0"}}>
                        <img src={i1} alt="logo"></img>
                        <img src={i2} alt="logo"></img>
                        <img src={i3} alt="logo"></img>
                        <img src={i4} alt="logo"></img>
                        <img src={i5} alt="logo"></img>
                        <img src={i6} alt="logo"></img>
                        <img src={i7} alt="logo"></img>

                        <Button variant="text" endIcon={<ArrowForwardIcon/>} sx={{color:"#4CAF4F"}}>Meet all customers</Button>
                    </Stack>
                </Box>
            </Box>

            {/*  */}
            <Box sx={{padding:"50px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography variant="h3">Caring is the new marketing</Typography>
                <Typography variant="h6" sx={{width:"54%", textAlign:"center"}}>
                    The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
                </Typography>
            </Box>

            {/*  */}

            <Stack sx={{display:"flex", flexDirection:"row", gap:"20px", position:"relative", justifyContent:"center"}}>
                <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", justifySelf:"center", alignItems:"center"}}>
                    <img src={img20} alt="img1" style={{width:"350px"}}/>
                    <Card sx={{position:"relative", top:"-20%", width:"300px", height:"150px"}}>
                        <CardContent>
                            <Typography gutterBottom sx={{width:"250px", textAlign:"center"}}>Creating Streamlined Safeguarding Processes with OneRen</Typography>
                            <Button endIcon={<ArrowForwardIcon/>} sx={{color:"#4CAF4F"}}>Read more</Button>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", justifySelf:"center", alignItems:"center"}}>
                    <img src={img19} alt="img1" style={{width:"350px"}}/>
                    <Card sx={{position:"relative", top:"-20%", width:"300px", height:"150px"}}>
                        <CardContent>
                            <Typography gutterBottom sx={{width:"250px", textAlign:"center"}}>What are your safeguarding responsibilities and how can you manage them?</Typography>
                            <Button endIcon={<ArrowForwardIcon/>} sx={{color:"#4CAF4F"}}>Read more</Button>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", justifySelf:"center", alignItems:"center"}}>
                    <img src={img20} alt="img1" style={{width:"350px"}}/>
                    <Card sx={{position:"relative", top:"-20%", width:"300px", height:"150px"}}>
                        <CardContent>
                            <Typography gutterBottom sx={{width:"250px", textAlign:"center"}}>Revamping the Membership Model with Triathlon Australia</Typography>
                            <Button endIcon={<ArrowForwardIcon/>} sx={{color:"#4CAF4F"}}>Read more</Button>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>

            <Box sx={{display:"flex", 
                        flexDirection:"column", 
                        alignItems:"center", 
                        width:"100%",
                        marginBottom:"50px",
                        padding:"2% 0",
                        backgroundColor:"#F5F7FA"}}>
                <Typography variant="h3" sx={{textAlign:"center", width:"40vw"}} gutterBottom>Pellentesque suscipit fringilla libero eu.</Typography>
                    <Button variant='contained' endIcon={<ArrowForwardIcon/>} sx={{ textTransform: "none", backgroundColor: "#4CAF4F", padding: "10px 35px", width: "fit-content" }}>Get a demo</Button>
            </Box>
    </Box>
}