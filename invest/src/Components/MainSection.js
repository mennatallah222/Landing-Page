import { Button, Grid, Stack, Typography } from "@mui/material";
import img from '../styles/imgs/pngtree-computer-mobile-phone-keyboard-character-png-image_33818.jpg';

const MainSection = () => {
    return (
        <Grid 
            item 
            container 
            md={6} 
            xs={12} 
            justifyContent="center" 
            alignItems="center"
            justifyItems="center"
            alignContent="center"
            mt={6}
        >
            <Stack sx={{
            alignItems:"center",
            }}>
                <Typography variant="h4" fontWeight={700} textAlign={"center"} gutterBottom>Invest & Get Your Profit</Typography>
                <Button sx={{width:"fit-content"}} >Get started</Button>
                <img src={img} alt="img" style={{width:"400px"}}/>
            </Stack>
        </Grid>
    );
}

export default MainSection;
