import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSwapModal } from "contexts/SwapModalContext";

export default function SwapModal() {
    const { showSwap, closeSwap, priceData, isLoadingPrice } = useSwapModal();

    if (!showSwap) return null;

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={9999}
            bgcolor="rgba(0,0,0,0.75)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={2}
        >
            <Box
                bgcolor="#111827"
                borderRadius={4}
                p={2}
                maxWidth={400}
                width="100%"
                position="relative"
            >
                <IconButton
                    onClick={closeSwap}
                    sx={{ position: "absolute", top: 8, right: 8, color: "#fff" }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" color="#fff" mb={2}>
                    Buy NKP
                </Typography>
                <Paper sx={{ p: 2, backgroundColor: "#1f2937", mb: 2 }}>
                    {isLoadingPrice ? (
                        <Typography color="gray">Loading...</Typography>
                    ) : priceData ? (
                        <>
                            <Typography color="#fff" variant="body2">
                                Price: ${priceData.priceUsd}
                            </Typography>
                            <Typography color="#fff" variant="body2">
                                24hr change:
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: priceData.priceChange24h >= 0 ? '#22c55e' : '#ef4444',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '4px'
                                }}
                            >   
                                {priceData.priceChange24h >= 0 ? '↑' : '↓'}{" "}
                                {priceData.priceChange24h >= 0 ? '+' : ''}
                                {priceData.priceChange24h.toFixed(2)}%
                            </Typography>

                            <Typography color="gray" variant="caption">
                                MCap: ${(priceData.marketCap / 1e6).toFixed(1)}M • FDV: $
                                {(priceData.fdv / 1e6).toFixed(1)}M
                            </Typography>
                        </>
                    ) : (
                        <Typography color="gray">Unavailable</Typography>
                    )}
                </Paper>
                <iframe
                    src="https://app.uniswap.org/#/swap?outputCurrency=0x11Fa1193743061591CBe47c9E0765EAeBaa3a046&inputCurrency=ETH&chain=mainnet"
                    style={{ border: 0, borderRadius: "12px" }}
                    width="100%"
                    height="500px"
                    title="Uniswap"
                />
            </Box>
        </Box>
    );
}
