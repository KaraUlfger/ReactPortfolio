import React from 'react';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            {info.about.map((project, index) => (
                <Terminal key={index}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', width: '600px', height: 'auto' }}>
                            <Box 
                                sx={{
                                    position: 'relative',
                                    width: '100%',
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
                                <img src={project.image} alt={'mockup'} className="default-image" />
                                <img src={project.hoverImage} alt={'hover mockup'} className="hover-image" />
                            </Box>
                        </a>
                    </Box>
                </Terminal>
            ))}
        </Box>
    );
}
