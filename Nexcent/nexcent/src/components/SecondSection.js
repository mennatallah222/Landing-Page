import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import i1 from '../styles/imgs/Logo.png';
import i2 from '../styles/imgs/Logo (1).png';
import i3 from '../styles/imgs/Logo (2).png';
import i4 from '../styles/imgs/Logo (3).png';
import i5 from '../styles/imgs/Logo (4).png';
import i6 from '../styles/imgs/Logo (5).png';
import i7 from '../styles/imgs/Logo (6).png';

import minilogo1 from '../styles/imgs/mini Icon (1).svg';
import minilogo2 from '../styles/imgs/mini Icon (2).svg';
import minilogo3 from '../styles/imgs/mini Icon (3).svg';


export default function SecondSection(){
    return <Box sx={{padding:"50px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Typography variant="h3">Our clients</Typography>
        <Typography variant="h6">We have been working with some Fortune 500+ clients</Typography>

        <Stack sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", width:"100%", margin:"50px 0"}}>
            <img src={i1} alt="logo"></img>
            <img src={i2} alt="logo"></img>
            <img src={i3} alt="logo"></img>
            <img src={i4} alt="logo"></img>
            <img src={i5} alt="logo"></img>
            <img src={i6} alt="logo"></img>
            <img src={i7} alt="logo"></img>
        </Stack>


        <Typography variant="h3" sx={{textAlign:"center"}}>Manage your entire community <br/> in a single system</Typography>
        <Typography variant="h6">Who is Nextcent suitable for?</Typography>

        <Stack sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", width:"90%", marginTop:"2%"}}>
            <Card sx={{maxWidth:"300px", boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'}}>
                <CardHeader title={
                        <Box sx={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                            <span style={{backgroundColor:"#E8F5E9", width:"50px", height:"50px", position:"absolute", right:"35%", borderRadius:"20px 10px"}}>
                            </span>
                            <img src={minilogo1} alt="minilogo" style={{ width: '50px', height: '50px', zIndex:1 }} />

                            <Typography variant="h5">Membership Organisations</Typography>
                        </Box>
                    }>
                    
                </CardHeader>
                <CardContent>
                    <Typography>Our membership management software provides full automation of membership renewals and payments</Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth:"300px", boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'}}>
                <CardHeader title={
                        <Box sx={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                            <span style={{backgroundColor:"#E8F5E9", width:"50px", height:"50px", position:"absolute", right:"35%", borderRadius:"20px 10px"}}>
                            </span>
                            <img src={minilogo2} alt="minilogo" style={{ width: '50px', height: '50px', zIndex:1 }} />

                            <Typography variant="h5">National Associations</Typography>
                        </Box>
                    }>
                    
                </CardHeader>
                <CardContent>
                    <Typography>Our membership management software provides full automation of membership renewals and payments</Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth:"300px", boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'}}>
                <CardHeader title={
                        <Box sx={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                            <span style={{backgroundColor:"#E8F5E9", width:"50px", height:"50px", position:"absolute", right:"35%", borderRadius:"20px 10px"}}>
                            </span>
                            <img src={minilogo3} alt="minilogo" style={{ width: '50px', height: '50px', zIndex:1 }} />

                            <Typography variant="h5">Clubs And Groups</Typography>
                        </Box>
                    }>
                    
                </CardHeader>
                <CardContent>
                    <Typography>Our membership management software provides full automation of membership renewals and payments</Typography>
                </CardContent>
            </Card>
        </Stack>

    </Box>
}