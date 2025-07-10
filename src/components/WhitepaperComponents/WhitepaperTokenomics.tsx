import { Box, Typography,Stack, Link, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, LinearProgress } from '@mui/material';

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
            <Typography variant="body2" fontWeight={500} color="text.var(--nkp-primary)">
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
                <Typography variant="h4" fontWeight="bold" color="var(--nkp-primary)" mb={1}>
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
                                <Typography variant="subtitle1" fontWeight={500} color="text.var(--nkp-primary)">
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

const WhitepaperTokenomics = () => {
  return (
    <Box component="section" id="tokenomics" mb={16} textAlign='left'>
      <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
        3. Tokenomics
      </Typography>

      {/* 3.1 Token Supply and Allocation */}
      <Box id="tokenomics-3-1" mb={12}>
        <Typography variant="h5" fontWeight="600" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--nkp-primary)', }}>
          3.1 Token Supply and Allocation
        </Typography>

        <Box mb={6}>
          <Typography variant="subtitle1" fontWeight="600" color="var(--nkp-primary)" gutterBottom mt={5}>
            NKP Token Information
          </Typography>
          <Box display="grid" gridTemplateColumns={{ md: '1fr 1fr' }} gap={4} fontSize="0.875rem">
            <Box>
              <Typography><strong>Token Name:</strong> Non Kyoto Protocol (NKP)</Typography>
              <Typography><strong>Token Symbol:</strong> NKP</Typography>
              <Typography><strong>Blockchain:</strong> Ethereum (ERC-20)</Typography>
              <Typography><strong>Total Fixed Supply:</strong> 1,000,000,000 NKP</Typography>
            </Box>
            <Box>
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

        <TableContainer component={Paper} sx={{ mt: 8 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Allocation</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Unlock / Lock-up Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ['Liquidity & Trading', '35%', '350M NKP', '100% unlocked at TGE. LP tokens locked for 1 year'],
                ['Team & Development', '20%', '200M NKP', <>2-year cliff, 4-year vesting. <Link href="https://app.sablier.com" target="_blank" rel="noopener" color="var(--nkp-primary)">Sablier stream</Link></>],
                ['Founder Reserve', '15%', '150M NKP', 'Founder-controlled wallet. Reserved for reserves, governance, and emergency runway'],
                ['Partnerships & Grants', '10%', '100M NKP', 'Milestone-based release tied to onboarding and integration'],
                ['Marketing & Community', '10%', '100M NKP', <>12-month linear release. <Link href="https://app.sablier.com" target="_blank" rel="noopener" color="var(--nkp-primary)">Sablier stream</Link></>],
                ['Seed Sale', '5%', '50M NKP', '100% unlocked at TGE for early strategic partners'],
                ['Ecosystem Development', '5%', '50M NKP', <>12-month linear release. <Link href="https://app.sablier.com" target="_blank" rel="noopener" color="var(--nkp-primary)">Sablier stream</Link></>],
              ].map(([category, allocation, amount, details], i) => (
                <TableRow key={i}>
                  <TableCell>{category}</TableCell>
                  <TableCell>{allocation}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>{details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={8}>
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
      <Box id="tokenomics-3-2" mb={12}>
        <Typography variant="h5" fontWeight="600" color="var(--nkp-primary)" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          3.2 LP Security and Pair Information
        </Typography>
        <Typography paragraph>
          <strong>DEX Pair Address:</strong> 0xBA123E7caD737B7F8D4580d04E525724c3C80f1A
        </Typography>
        <Typography paragraph>
          At launch, 100% of liquidity provider (LP) tokens were locked in a smart contract vault for one year. A Vault Key NFT was minted and transferred to the founder-controlled wallet to ensure secure and auditable custody.
        </Typography>
        <Typography paragraph>
          This mechanism protects early liquidity, reduces volatility, and prevents rug-style exploits during the initial trading window.
        </Typography>
      </Box>

      {/* 3.3 Buyback */}
      <Box id="tokenomics-3-3" mb={12}>
        <Typography variant="h5" fontWeight="600" color="var(--nkp-primary)" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          3.3 Buyback and Reinvestment Engine
        </Typography>
        <Typography paragraph>
          Revenue generated from off-chain carbon credit sales flows through a recurring value loop:
        </Typography>
        <Box component="ul" pl={3} sx={{ listStyleType: 'disc' }}>
          <li>30% of net revenue is used to buy back NKP from the open market</li>
          <li>70% is reinvested into new carbon-generating infrastructure under Midori Earth</li>
        </Box>
        <Typography paragraph>
          This mechanism directly connects carbon revenue to token value and ecosystem expansion.
        </Typography>
      </Box>

      {/* 3.4 Market Fee */}
      <Box id="tokenomics-3-4" mb={12}>
        <Typography variant="h5" fontWeight="600" color="var(--nkp-primary)" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          3.4 Market Trading Fee
        </Typography>
        <Typography paragraph>
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
