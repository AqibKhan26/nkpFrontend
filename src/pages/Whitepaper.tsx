import WhitepaperNavigation from "components/layout/WhitepaperNavigation";
import { motion } from 'framer-motion';
import React from 'react';
import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import WhitepaperHeader from "components/WhitepaperComponents/WhitepaperHeader";
import WhitepaperVision from "components/WhitepaperComponents/WhitepaperVision";
import WhitepaperMarket from "components/WhitepaperComponents/WhitepaperMarket";
import WhitepaperTokenomics from "components/WhitepaperComponents/WhitepaperTokenomics";
import WhitepaperTechnology from "components/WhitepaperComponents/WhitepaperTechnology";
import WhitepaperConclusion from "components/WhitepaperComponents/WhitepaperConclusion";
import WhitepaperBenefits from "components/WhitepaperComponents/WhitepaperBenefits";
import WhitepaperArchitecture from "components/WhitepaperComponents/WhitepaperArchitecture";

const Whitepaper = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh", // full screen
                overflow: "hidden",
            }}
        >
            <WhitepaperNavigation />

            {/* Scrollable Content Area */}
            <Box
                component="main"
                sx={{            // offset for the nav width
                    width: { md: 'calc(100% - 400px)' }, // take remaining width
                    flexGrow: 1,
                    overflowY: "auto",
                    px: { xs: 2, md: 4 },
                    pt: 10,
                    pb: 6,
                    scrollBehavior: 'smooth',
                    bgcolor:'#fff'
                }}
            >
                <WhitepaperHeader />
                <WhitepaperVision />
                <WhitepaperMarket />
                <WhitepaperTokenomics/>
                <WhitepaperTechnology />
                <WhitepaperBenefits/>
                <WhitepaperArchitecture/>
                <WhitepaperConclusion/>
            </Box>
        </Box>
    );
};

export default Whitepaper;
