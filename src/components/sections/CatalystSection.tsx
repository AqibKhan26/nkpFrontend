import { Container, Typography, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

import { useSwapModal  } from "contexts/SwapModalContext";

export default function CatalystSection() {
  const { openSwap } = useSwapModal();

  return (
    <Box id="about" component="section" sx={{ bgcolor: 'white', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <MotionTypography
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variant="h2"
          textAlign="center"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Montserrat, sans-serif',
            background: 'linear-gradient(90deg, #0d8548, #9fc45b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            mb: 4
          }}
        >
          Pioneers of Regenerative Finance
        </MotionTypography>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ mb: 6 }}
        >
          <Stack spacing={3} textAlign="center">
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                color: 'grey.800',
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              We at NKP are building Proof of Regeneration—a system where nature itself becomes the "hardware" and sustainability the "hash rate". NKP provides diversified, asset-backed climate finance accessible to individuals, powered by transparent blockchain mechanics and AI-powered verification.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                color: 'grey.800',
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              We are a climate technology and impact‑finance startup, officially founded in 2025 and based in Sheridan, Wyoming. Our team melds blockchain & AI tech with real-world environmental assets, restructuring how humanity measures and invests in sustainability
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                color: 'grey.800',
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              The Non Kyoto Protocol takes a fundamentally different approach. Rather than relying on top-down mandates, NKP connects verified real-world assets to open blockchain infrastructure, allowing anyone to participate in impact investing. It is built to move faster, operate transparently, and deliver measurable economic and climate value – a true Triple Bottom Line opportunity.
            </Typography>


            <Box
              sx={{
                display: 'flex',
                gap: 2,            // space between buttons
                justifyContent: 'center',  // center horizontally (optional)
                flexWrap: 'wrap',  // wrap on smaller screens (optional)
              }}
            >
              <Button
                variant="contained"
                onClick={() => openSwap()}
                sx={{
                  maxWidth: '200px',
                  height: '60px',
                  background: "linear-gradient(to right, #0d8548, #9fc45b)",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "999px", // pill shape
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(to right, #0a6e3a, #85aa45)", // darker on hover
                  },
                }}
              >
                Buy NKP
              </Button>

              <Button
                variant="contained"
                sx={{
                  maxWidth: '200px',
                  height: '60px',
                  background: "linear-gradient(to right, #0d8548, #9fc45b)",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "999px", // pill shape
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(to right, #0a6e3a, #85aa45)", // darker on hover
                  },
                }}
              >
                Read The Whitepaper
              </Button>
            </Box>
          </Stack>
        </MotionBox>

      </Container>
    </Box>
  );
}
