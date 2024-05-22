import React from 'react';
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, hoverImage, live } = props;
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <a href={live} target="_blank" rel="noopener noreferrer" style={{ width: '100%', position: 'relative' }}>
                <Box 
                    sx={{
                        position: 'relative',
                        width: '100%',  // Set to 100% or a specific size
                        height: 'auto',
                        '&:hover .hover-image': {
                            opacity: 1,
                        },
                        '& .hover-image': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                        },
                        '& .default-image': {
                            width: '100%',
                            height: '100%',
                        }
                    }}
                >
                    <img src={image} alt={'mockup'} className="default-image" />
                    <img src={hoverImage} alt={'hover mockup'} className="hover-image" />
                </Box>
            </a>
        </Box>
    );
}

export default PortfolioBlock;
