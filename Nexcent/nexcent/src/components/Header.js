import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WhiteButton = (title) => (
    <Button {...title} sx={{ color: 'black', textTransform:"none" }} />
);
export default function Header(){
    return <>
        <AppBar elevation={0} position='static' sx={{display:"flex", flexDirection:"row", backgroundColor:"white", padding:2}}>
            <Toolbar sx={{ flexGrow:1}}>
                <IconButton sx={{color:"black", borderRadius:"10px",
                '&:hover':{
                    borderRadius:"10px"
                }, transition:"all 0.5s ease"}}
                href='/'
                >
                    <img src='/Icon.svg' alt='logo' style={{marginRight:"10px"}}/>
                    <Typography>Nexcent</Typography>
                </IconButton>
            </Toolbar>

            <Stack sx={{display:"flex", flexDirection:"row"}}>
                <WhiteButton>Home</WhiteButton>
                <WhiteButton>Features</WhiteButton>
                <WhiteButton>Community</WhiteButton>
                <WhiteButton>Blog</WhiteButton>
                <WhiteButton>Pricing</WhiteButton>
                <Button variant='contained' sx={{backgroundColor:"#4CAF4F"}} endIcon={<ArrowForwardIcon/>}>Register</Button>
            </Stack>
        </AppBar>
    </>
}