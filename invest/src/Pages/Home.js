import { Box, createTheme, ThemeProvider } from "@mui/material";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import img from '../styles/imgs/abstract.avif';

const theme=createTheme();

export default function Home(){
    return <>
        <Box sx={{minHeight:"100vh", p:4, 
            backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh'
        }}>
            <ThemeProvider theme={theme}>
                <Header/>
            </ThemeProvider>

            <MainSection/>

        </Box>
    </>
}