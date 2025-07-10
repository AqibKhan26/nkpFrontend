import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const WhitepaperMarket = () => {
    return (
        <Box id="market" sx={{
            scrollMarginTop: '100px',
        }} mb={8} textAlign='left'>
            <Typography
                variant="h4"
                fontWeight="bold"
                color="text.primary"
                mb={4}
                sx={{ fontFamily: 'Montserrat, sans-serif' }}
            >
                2. Market Position and Outlook
            </Typography>

            {/* 2.1 */}
            <Box id="market-2-1" mb={6} textAlign='left' sx={{
                scrollMarginTop: '100px',
            }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                        color: 'var(--nkp-primary)',
                        mb: 2,
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    2.1 Carbon Credit Demand is Exploding
                </Typography>
                <Box textAlign='left' sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    <Typography variant='body2' paragraph>
                        The global carbon market is entering a high-growth phase. By 2030, demand for high-quality carbon credits
                        is expected to increase 15 to 20 times, driven by government regulation, institutional ESG mandates, and
                        corporate climate targets.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        NKP is positioned to capture this surge with a supply of real credits from physical assets already producing
                        revenue. While most competitors are still theoretical or depend on credit aggregation, NKP is actively
                        generating credits from owned infrastructure.
                    </Typography>
                    <Typography paragraph>Market drivers include:</Typography>
                    <List sx={{ pl: 3 }}>
                        {[
                            'Corporate Net-Zero Commitments: Over 1,500 major companies are required to offset emissions they cannot eliminate',
                            'Sovereign Carbon Strategies: Countries are forming bilateral agreements under Article 6.2, creating direct demand for verified emission reductions',
                            'Carbon Border Adjustment Mechanisms: New regulations like the EU CBAM are forcing carbon accounting for global imports',
                            'Institutional Investment Mandates: Over 130 trillion dollars in capital is moving toward ESG-aligned portfolios, with carbon markets as a core allocation',
                        ].map((text, i) => (
                            <ListItem key={i} disablePadding sx={{ display: 'list-item', pl: 2 }}>
                                <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                                    <strong>{text.split(':')[0]}:</strong> {text.split(':').slice(1).join(':').trim()}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>

            {/* 2.2 */}
            <Box id="market-2-2" mb={6} sx={{
                scrollMarginTop: '100px',
            }} >
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                        color: 'var(--nkp-primary)',
                        mb: 2,
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    2.2 Competitive Advantage and Market Differentiation
                </Typography>
                <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    <Typography variant='body2' paragraph>
                        NKP stands apart from both traditional carbon registries and blockchain carbon experiments. Most platforms
                        fall into one of two categories: old systems with limited accessibility or Web3 protocols without real
                        assets.
                    </Typography>
                    <Typography variant='body2' paragraph>Key differentiators include:</Typography>
                    <List sx={{ pl: 3 }}>
                        {[
                            "Real Asset Ownership: NKP's credits are generated from projects owned and operated by Midori Earth, not licensed or resold",
                            'Multi-Registry Support: Compatibility with Verra, Gold Standard, ISO, and other frameworks',
                            'AI-Powered Verification: Through Morphware and Transparenc, NKP verifies project performance in real time, not every 3 to 5 years',
                            'Full-Stack Integration: NKP offers infrastructure from asset development to credit issuance, trading, and retirement',
                        ].map((text, i) => (
                            <ListItem key={i} disablePadding sx={{ display: 'list-item', pl: 2 }}>
                                <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                                    <strong>{text.split(':')[0]}:</strong> {text.split(':').slice(1).join(':').trim()}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>

            {/* 2.3 */}
            <Box id="market-2-3" mb={6} sx={{
                scrollMarginTop: '100px',
            }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                        color: 'var(--nkp-primary)',
                        mb: 2,
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    2.3 Supply Scarcity Creates Long-Term Value
                </Typography>
                <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    <Typography variant='body2' paragraph>
                        Carbon credits are not infinite. Unlike token inflation, each credit must be backed by measurable
                        environmental performance. It takes land, infrastructure, engineering, and long-term oversight to produce
                        verified emission reductions. This creates a hard supply cap across the market.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        NKP's model solves this bottleneck by owning and expanding the infrastructure that produces the credits.
                        Through Midori Earth, NKP already controls a growing portfolio of:
                    </Typography>
                    <List sx={{ pl: 3 }}>
                        {[
                            'REDD+ forestry conservation zones',
                            'Industrial methane mitigation systems',
                            'Waste-to-fuel valorization facilities',
                            'Biochar and clean fuel infrastructure',
                            'Blue carbon and coastal protection projects',
                        ].map((text, i) => (
                            <ListItem key={i} disablePadding sx={{ display: 'list-item', pl: 2 }}>
                                <ListItemText primaryTypographyProps={{ variant: 'body2' }}>  {text}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant='body2' paragraph>
                        As demand rises and supply remains constrained, NKP will be one of the few platforms with access to new
                        high-integrity credits. This makes the token not just a utility, but a claim on a scarce, growing, and
                        globally valuable commodity.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default WhitepaperMarket;
