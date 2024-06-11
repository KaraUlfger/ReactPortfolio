import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        key={index}
                        sx={{ 
                            padding: '1rem', // Add padding if needed
                            maxWidth: '500px' // Set a maximum width if needed
                        }}
                    >
                        <PortfolioBlock 
                            image={project.image} 
                            hoverImage={project.hoverImage} // Pass the hover image
                            live={project.live} // Pass the live link
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
