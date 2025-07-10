import { Box, Typography, Stack, Link} from '@mui/material';
import { motion } from "framer-motion";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from 'components/MKTypography';
import Table from 'components/Table';

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
            <Typography variant="body2" fontWeight={500} color="var(--nkp-primary)">
                {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.percentage}%
            </Typography>
        </Stack>

        <Box
            sx={{
                width: "100%",
                height: 10,
                borderRadius: 1,
                overflow: "hidden",
                backgroundColor: "grey.300",
            }}
        >
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                    height: "100%",
                    backgroundColor: item.color,
                    borderRadius: 4,
                }}
            />
        </Box>

        <Typography variant="caption" color="text.secondary" mt={0.5} display="block">
            {item.amount}
        </Typography>
    </Box>
);

const WhitepaperTokenomics = () => {
    return (
        <Box component="section" id="tokenomics" mb={16} textAlign='left' sx={{ scrollMarginTop: '100px' }}>
            <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                3. Tokenomics
            </Typography>

            {/* 3.1 Token Supply and Allocation */}
            <Box id="tokenomics-3-1" mb={12} sx={{ scrollMarginTop: '100px' }}>
                <Typography variant="h5" fontWeight="600" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--nkp-primary)', }}>
                    3.1 Token Supply and Allocation
                </Typography>

                <Box mb={6}>
                    <Typography variant="subtitle1" fontWeight="600" color="var(--nkp-primary)" gutterBottom mt={5}>
                        NKP Token Information
                    </Typography>
                    <Box display="grid" gridTemplateColumns={{ md: '1fr 1fr' }} gap={4} fontSize="0.875rem" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        <Box>
                            <Typography><strong>Token Name:</strong> Non Kyoto Protocol (NKP)</Typography>
                            <Typography><strong>Token Symbol:</strong> NKP</Typography>
                            <Typography><strong>Blockchain:</strong> Ethereum (ERC-20)</Typography>
                            <Typography><strong>Total Fixed Supply:</strong> 1,000,000,000 NKP</Typography>
                        </Box>
                        <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            <Typography><strong>Token Address:</strong></Typography>
                            <Link
                                href="https://etherscan.io/token/0x11Fa1193743061591CBe47c9E0765EAeBaa3a046"
                                target="_blank"
                                rel="noopener"
                                color="var(--nkp-primary)"
                                sx={{ wordBreak: 'break-all', fontSize: '0.75rem' }}
                            >
                                0x11Fa1193743061591CBe47c9E0765EAeBaa3a046
                            </Link>
                            <Typography mt={2}><strong>Decimals:</strong> 18</Typography>
                            <Typography><strong>Standard:</strong> ERC-20</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box mt={8}>
                    <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                        Token Allocation
                    </Typography>
                    {tokenAllocation.map((item, index) => (
                        <AllocationBar key={index} item={item} />
                    ))}
                </Box>

                <Table
                    columns={[
                        { name: "category", align: "left" },
                        { name: "allocation", align: "center" },
                        { name: "amount", align: "center" },
                        { name: "details", align: "left" },
                    ]}
                    rows={[
                        {
                            category: "Liquidity & Trading",
                            allocation: "35%",
                            amount: "350M NKP",
                            details: "100% unlocked at TGE. LP tokens locked for 1 year",
                        },
                        {
                            category: "Team & Development",
                            allocation: "20%",
                            amount: "200M NKP",
                            details: (
                                <MKTypography variant="button" color="text" fontWeight="regular">
                                    2-year cliff, 4-year vesting.{" "}
                                    <Link
                                        href="https://app.sablier.com"
                                        target="_blank"
                                        rel="noopener"
                                        color="var(--nkp-primary)"
                                    >
                                        Sablier stream
                                    </Link>
                                </MKTypography>
                            ),
                        },
                        {
                            category: "Founder Reserve",
                            allocation: "15%",
                            amount: "150M NKP",
                            details: "Founder-controlled wallet. Reserved for reserves, governance, and emergency runway",
                        },
                        {
                            category: "Partnerships & Grants",
                            allocation: "10%",
                            amount: "100M NKP",
                            details: "Milestone-based release tied to onboarding and integration",
                        },
                        {
                            category: "Marketing & Community",
                            allocation: "10%",
                            amount: "100M NKP",
                            details: (
                                <MKTypography variant="button" color="text" fontWeight="regular">
                                    12-month linear release.{" "}
                                    <Link
                                        href="https://app.sablier.com"
                                        target="_blank"
                                        rel="noopener"
                                        color="var(--nkp-primary)"
                                    >
                                        Sablier stream
                                    </Link>
                                </MKTypography>
                            ),
                        },
                        {
                            category: "Seed Sale",
                            allocation: "5%",
                            amount: "50M NKP",
                            details: "100% unlocked at TGE for early strategic partners",
                        },
                        {
                            category: "Ecosystem Development",
                            allocation: "5%",
                            amount: "50M NKP",
                            details: (
                                <MKTypography variant="button" color="text" fontWeight="regular">
                                    12-month linear release.{" "}
                                    <Link
                                        href="https://app.sablier.com"
                                        target="_blank"
                                        rel="noopener"
                                        color="var(--nkp-primary)"
                                    >
                                        Sablier stream
                                    </Link>
                                </MKTypography>
                            ),
                        },
                    ]}
                />



                <Box mt={8} sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="var(--nkp-primary)" gutterBottom>
                        Important Contract Addresses
                    </Typography>
                    <Box fontSize="0.875rem" display="flex" flexDirection="column" gap={3}>
                        <Box>
                            <strong>NKP Token Contract:</strong><br />
                            <Link href="https://etherscan.io/token/0x11Fa1193743061591CBe47c9E0765EAeBaa3a046" target="_blank" rel="noopener" color="var(--nkp-primary)">
                                0x11Fa1193743061591CBe47c9E0765EAeBaa3a046
                            </Link>
                        </Box>
                        <Box>
                            <strong>DEX Pair Address:</strong><br />
                            <Link href="https://etherscan.io/address/0xBA123E7caD737B7F8D4580d04E525724c3C80f1A" target="_blank" rel="noopener" color="var(--nkp-primary)">
                                0xBA123E7caD737B7F8D4580d04E525724c3C80f1A
                            </Link>
                        </Box>
                        <Box>
                            <strong>Vesting Streams:</strong><br />
                            <Link href="https://app.sablier.com" target="_blank" rel="noopener" color="var(--nkp-primary)">
                                View on Sablier Protocol
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* 3.2 LP Security */}
            <Box id="tokenomics-3-2" mb={12} sx={{ color: 'text.secondary', lineHeight: 1.8, scrollMarginTop: '100px' }} >
                <Typography variant="h5" fontWeight="600" color="var(--nkp-primary)" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    3.2 LP Security and Pair Information
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>DEX Pair Address:</strong> 0xBA123E7caD737B7F8D4580d04E525724c3C80f1A
                </Typography>
                <Typography variant="body2" paragraph>
                    At launch, 100% of liquidity provider (LP) tokens were locked in a smart contract vault for one year. A Vault Key NFT was minted and transferred to the founder-controlled wallet to ensure secure and auditable custody.
                </Typography>
                <Typography variant="body2" paragraph>
                    This mechanism protects early liquidity, reduces volatility, and prevents rug-style exploits during the initial trading window.
                </Typography>
            </Box>

            {/* 3.3 Buyback */}
            <Box id="tokenomics-3-3" mb={12} sx={{ color: 'text.secondary', lineHeight: 1.8, scrollMarginTop: '100px' }}>
                <Typography variant="h5" fontWeight="600" color="var(--nkp-primary)" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    3.3 Buyback and Reinvestment Engine
                </Typography>
                <Typography variant="body2" paragraph>
                    Revenue generated from off-chain carbon credit sales flows through a recurring value loop:
                </Typography>
                <Box variant="body2" component="ul" pl={3} sx={{ listStyleType: 'disc' }}>
                    <li>30% of net revenue is used to buy back NKP from the open market</li>
                    <li>70% is reinvested into new carbon-generating infrastructure under Midori Earth</li>
                </Box>
                <Typography variant="body2" paragraph>
                    This mechanism directly connects carbon revenue to token value and ecosystem expansion.
                </Typography>
            </Box>

            {/* 3.4 Market Fee */}
            <Box id="tokenomics-3-4" mb={12} sx={{ color: 'text.secondary', lineHeight: 1.8, scrollMarginTop: '100px' }}>
                <Typography variant="h5" fontWeight="600" color="var(--nkp-primary)" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    3.4 Market Trading Fee
                </Typography>
                <Typography variant="body2" paragraph>
                    A 5% fee is applied only to market buys and sells on decentralized exchanges. This fee supports liquidity, protocol operations, and strategic growth.
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    *This market fee is temporary and will be phased out as liquidity deepens and the ecosystem reaches sustainable scale.
                </Typography>
            </Box>
        </Box>
    );
};

export default WhitepaperTokenomics;
