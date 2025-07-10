import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const WhitepaperVision = () => {
  return (
    <Box id="vision" mb={16} textAlign='left' sx={{
      scrollMarginTop: '100px',
  }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        1. Vision
      </Typography>

      {/* Section 1.1 */}
      <Box id="vision-1-1" mb={12} sx={{
                scrollMarginTop: '100px',
            }}>
        <Typography
          variant="h5"
          fontWeight={600}
          color= "var(--nkp-primary)"
          gutterBottom
          sx={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          1.1 Redefining Access to High-Integrity Environmental Assets
        </Typography>
        <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          <Typography variant='body2' paragraph>
            The Non Kyoto Protocol (NKP) makes climate infrastructure an investable and accessible asset class. Where
            traditional markets keep high-yield environmental projects locked behind institutional gates, NKP opens the
            door to transparent, democratized climate finance.
          </Typography>
          <Typography variant='body2' paragraph>
            Instead of relying on slow registries or government mandates, NKP connects real revenue-generating assets
            to blockchain infrastructure. Forests, landfill diversion plants, and clean fuel systems become liquid,
            tokenized financial products. These projects generate verified carbon credits, and that value flows directly
            into the NKP system.
          </Typography>
          <Typography variant='body2' paragraph>
            This is more than impact investing. It is real cash flow from physical assets, tied to measurable climate
            outcomes, structured for returns, and available to everyday investors.
          </Typography>
        </Box>
      </Box>

      {/* Section 1.2 */}
      <Box id="vision-1-2" mb={12} sx={{
                scrollMarginTop: '100px',
            }}>
        <Typography
          variant="h5"
          fontWeight={600}
          color="var(--nkp-primary)"
          gutterBottom
          sx={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          1.2 The NKP Advantage, Purpose-Built for Profitable Impact
        </Typography>
        <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          <Typography variant='body2' paragraph>
            NKP is the financial layer of the Midori Earth Ecosystem. As the parent company, Midori Earth develops and
            operates real-world carbon credit projects. NKP captures that value and redistributes it through smart
            contracts and token mechanics.
          </Typography>
          <Typography variant='body2' paragraph>By holding NKP, investors gain exposure to:</Typography>
          <List dense sx={{ pl: 3, mb: 2 }}>
            {[
              'Verified real-world projects that generate recurring revenue',
              'Institutional-grade assets with high integrity and long-term upside',
              'A 30 percent token buyback strategy, funded by off-chain sales',
              'A 70 percent reinvestment model that grows the underlying asset portfolio',
              'AI-backed risk assessment and credit verification in real time',
            ].map((text, idx) => (
              <ListItem key={idx} sx={{ py: 0.5 }}>
                <ListItemText primary={text} primaryTypographyProps={{ fontSize: '0.95rem' }} />
              </ListItem>
            ))}
          </List>
          <Typography variant='body2' paragraph>
            NKP combines environmental performance, capital efficiency, and long-term asset appreciation into a
            transparent, investable platform.
          </Typography>
        </Box>
      </Box>

      {/* Section 1.3 */}
      <Box id="vision-1-3" mb={12} sx={{
                scrollMarginTop: '100px',
            }}>
        <Typography
          variant="h5"
          fontWeight={600}
          color="var(--nkp-primary)"
          gutterBottom
          sx={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          1.3 Exclusive Asset Pipeline
        </Typography>
        <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          <Typography variant='body2' paragraph>
            NKP does not index or list third-party credits. It owns access to high-impact projects that generate real
            revenue. This early access gives NKP a competitive advantage and long-term control over quality, volume,
            and financial outcomes.
          </Typography>
          <Typography variant='body2' paragraph>Key assets include:</Typography>
          <List dense sx={{ pl: 3, mb: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText
                primary={
                  <span>
                    <strong>Chaco Vivo REDD+ (Paraguay):</strong> 187,916 hectares of protected forest. Over 30 million
                    tonnes of projected CO₂e reductions.
                  </span>
                }
                primaryTypographyProps={{ fontSize: '0.95rem' }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText
                primary={
                  <span>
                    <strong>SFM Waste Valorization Plant (Dominican Republic):</strong> A large-scale
                    landfill-to-fuel operation converting 500 tons of trash per day into revenue-generating carbon
                    offsets.
                  </span>
                }
                primaryTypographyProps={{ fontSize: '0.95rem' }}
              />
            </ListItem>
          </List>
          <Typography variant='body2' paragraph>
            Combined, these assets represent over 4 million tonnes of environmental mitigation, with additional social
            and economic benefits.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhitepaperVision;
