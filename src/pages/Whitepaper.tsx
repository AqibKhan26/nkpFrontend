import WhitepaperNavigation from "components/layout/WhitepaperNavigation";
import { motion } from 'framer-motion';
import React from 'react';
import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import WhitepaperHeader from "components/WhitepaperComponents/WhitepaperHeader";
import WhitepaperVision from "components/WhitepaperComponents/WhitepaperVision";
import WhitepaperMarket from "components/WhitepaperComponents/WhitepaperMarket";
import WhitepaperTokenomics from "components/WhitepaperComponents/WhitepaperTokenomics";


const tokenAllocation = [
    { category: "Liquidity & Trading", percentage: 35, amount: "350M NKP", color: "#0D8548" },
    { category: "Team & Development", percentage: 20, amount: "200M NKP", color: "#1a5f3f" },
    { category: "Founder Reserve", percentage: 15, amount: "150M NKP", color: "#2d8056" },
    { category: "Partnerships & Grants", percentage: 10, amount: "100M NKP", color: "#52a378" },
    { category: "Marketing & Community", percentage: 10, amount: "100M NKP", color: "#7bc49a" },
    { category: "Seed Sale", percentage: 5, amount: "50M NKP", color: "#9fc45b" },
    { category: "Ecosystem Development", percentage: 5, amount: "50M NKP", color: "#b8d481" }
];

const AllocationBar = ({ item }: { item: typeof tokenAllocation[0] }) => (
    <Box mb={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="body2" fontWeight={500} color="text.primary">
                {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.percentage}%
            </Typography>
        </Stack>
        <Box sx={{ width: "100%", borderRadius: 1, overflow: "hidden" }}>
            <LinearProgress
                variant="determinate"
                value={item.percentage}
                sx={{
                    height: 10,
                    borderRadius: 1,
                    backgroundColor: "grey.300",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: item.color,
                    },
                }}
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
            />
        </Box>
        <Typography variant="caption" color="text.secondary" mt={0.5} display="block">
            {item.amount}
        </Typography>
    </Box>
);

const TokenVisualization = () => {
    return (
        <Box my={4}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold" color="primary" mb={1}>
                    1,000,000,000 NKP
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Total Fixed Supply
                </Typography>
            </Box>

            <Stack spacing={2}>
                {tokenAllocation.map((item, index) => (
                    <Box
                        key={index}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        py={1}
                        borderBottom={1}
                        borderColor="grey.100"
                    >
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    bgcolor: item.color,
                                    borderRadius: 0.5,
                                }}
                            />
                            <Box>
                                <Typography variant="subtitle1" fontWeight={500} color="text.primary">
                                    {item.category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.amount}
                                </Typography>
                            </Box>
                        </Stack>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: item.color }}>
                            {item.percentage}%
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

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
                    scrollBehavior: 'smooth'
                }}
            >
                <WhitepaperHeader />
                <WhitepaperVision />
                <WhitepaperMarket />
                <WhitepaperTokenomics/>
            </Box>
        </Box>
    );
};

export default Whitepaper;
