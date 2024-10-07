import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const useResponsive=(direction, breakpoint)=>{
    const theme=useTheme();
    //to always call the useMediaQuery
    const matches=useMediaQuery(theme.breakpoints.up(breakpoint));

    if(direction==="up"){
        return matches;
    }
    return false;//or handle the other directions as needed
}

export default useResponsive;