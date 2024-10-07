import { Box, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

export default function Footer(){

    const items1=['Company', 'About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
    const items2=['Support', 'Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'];
    return <Box sx={{padding:"2%", color:"white", backgroundColor:"#263238", justifyItems:"center", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 2fr"}}>
        <Stack>
            <Box sx={{display:"flex", color:"white", borderRadius:"10px",
                '&:hover':{
                    borderRadius:"10px"
                }, transition:"all 0.5s ease",
                    marginBottom:"20px"
                }}
                href='/'
                >
                <img src='/Icon.svg' alt='logo' style={{marginRight:"10px"}}/>
                <Typography gutterBottom>Nexcent</Typography>
            </Box>
            <Typography>Copyright © 2020 Landify UI Kit.</Typography>
            <Typography>All rights reserved</Typography>
            <Box sx={{display:"flex", flexDirection:"row", gap:"20px"}}>
                <InstagramIcon style={{ color: '#E1306C', backgroundColor:"#89939E", borderRadius:"50%", padding:"8px" }} />
                <InstagramIcon style={{ color: '#E1306C', backgroundColor:"#89939E", borderRadius:"50%", padding:"8px" }} />
                <InstagramIcon style={{ color: '#E1306C', backgroundColor:"#89939E", borderRadius:"50%", padding:"8px" }} />
                <InstagramIcon style={{ color: '#E1306C', backgroundColor:"#89939E", borderRadius:"50%", padding:"8px" }} />
            </Box>
        </Stack>

        <Stack>
            <List>
            {items1.map((item, index) => (
                <ListItem key={index} >
                <ListItemText primary={item} />
                </ListItem>
            ))}
            </List>
        </Stack>

        <Stack>
             <List>
            {items2.map((item, index) => (
                <ListItem key={index} >
                <ListItemText primary={item} />
                </ListItem>
            ))}
            </List>
        </Stack>

        <Stack>
            <Typography gutterBottom>Stay up to date</Typography>
            <TextField
                placeholder="Your email address"
                variant="outlined"
                sx={{ input: { color: 'white' }, bgcolor: '#89939E', borderRadius: '5px' }} // Custom styling
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <SendIcon />
                    </InputAdornment>
                    ),
                }}
                />
    </Stack>
    </Box>
}