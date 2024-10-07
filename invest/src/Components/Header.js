import {  Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { List as PhList } from '@phosphor-icons/react';
import useResponsive from '../hooks/useResponsive';
import { useState } from 'react';

export default function Header(){

    const isDesktop=useResponsive("up", "md");
    const[openDrawer, setOpenDrawer]=useState(false);

     const toggleDrawer = (open) => (event) => {
        setOpenDrawer(open);
    };

    const items=(
        <>
            <Button>Platform</Button>
            <Button>Features</Button>
            <Button>Company</Button>
            <Button>Blog</Button>
            <Button>Contact Us</Button>
        </>
    );

    return <Grid container spacing={2}>
        <Grid item md={4} xs={6}>
            <Stack direction="row" alignItems="center" spacing={2}>
                {!isDesktop&& (
                    <IconButton onClick={toggleDrawer(true)}>
                        <PhList/>
                    </IconButton>
                    )
                }
                
                <Typography variant='h5'>Investo</Typography>
            </Stack>
        </Grid>

        {isDesktop &&(
            <Grid item md={4} container justifyContent="center">
            <Stack direction="row" alignItems="center">
                {items}
            </Stack>
        </Grid>
        )}

        <Grid item md={4} xs={6} container justifyContent="flex-end">
            <Stack direction="row" alignItems="center" spacing={2} container>
                <Button>Sign in</Button>
                <Button variant='contained' sx={{borderRadius:"0"}}>Sign up</Button>
            </Stack>
        </Grid>

        {!isDesktop&&(
            <Drawer anchor='left' open={openDrawer} onClose={toggleDrawer(false)}>
                <List>
                    {
                        ['Platform', 'Features', 'Company', 'Blog' ,'Contact Us'].map((title, index)=>(
                            <ListItemButton key={title} disablePadding>
                                <ListItemText primary={title}/>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
        )}
    </Grid>
}