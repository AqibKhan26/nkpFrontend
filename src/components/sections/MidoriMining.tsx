import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import { ArrowRight, ArrowLeft, ArrowDown, ArrowUp } from 'lucide-react';

export default function MidoriMining() {
  return (
    <Box
      id="midori-mining"
      sx={{
        py: 12,
        background: 'linear-gradient(to bottom right, #ffffff, rgba(241,245,249,0.4), #ffffff)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              background: 'linear-gradient(to right, #0d8548, #9fc45b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.3,
              pb: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            Midori Mining System
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: '#1f2937', mb: 3 }}
          >
            Web2 Revenue to Web3
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: '#4b5563', maxWidth: '768px', mx: 'auto', fontSize: '1.125rem', lineHeight: 1.75 }}
          >
            Midori (<span style={{ color: '#0d8548', fontWeight: 600 }}>緑</span>) means <strong>"green"</strong> in Japanese – the Midori or <strong style={{ color: '#0d8548' }}>Green</strong> "Mining" System is our tongue-in-cheek way of conveying the growth cycle of value creation. Just as BTC "mining" operations spend capital to acquire hardware to generate BTC, our operation acquires land, facilities, and technology that regenerates the earth and generates revenue at the same time.
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(8px)',
            p: 4,
            borderRadius: 3,
            border: '1px solid #e5e7eb',
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          <Grid container spacing={3}>
            {/* 1. Reinvestment */}
            <Grid item xs={12} md={4} position="relative">
              <Box
                sx={{
                  background: 'linear-gradient(to right, #0d8548, #9fc45b)',
                  color: '#fff',
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                  boxShadow: 3,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  70% Operation Reinvestment
                </Typography>
                <Typography variant="body2">
                  Revenue flows back into acquiring more high-value environmental projects and scaling operations
                </Typography>
              </Box>
              {/* Arrow (Desktop) */}
              <Box
                display={{ xs: 'none', md: 'flex' }}
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  right: -20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#0d8548',
                  width: 32,
                  height: 32,
                }}
              >
                <ArrowRight size={16} color="#fff" />
              </Box>
              {/* Arrow (Mobile) */}
              <Box
                display={{ xs: 'flex', md: 'none' }}
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#0d8548',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                }}
              >
                <ArrowDown size={16} color="#fff" />
              </Box>
            </Grid>

            {/* 2. Continuous Growth */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: '#9fc45b',
                  color: '#fff',
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                  boxShadow: 3,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Continuous Value Growth
                </Typography>
                <Typography variant="body2">
                  Each cycle expands our portfolio, increases revenue streams, and enhances token value
                </Typography>
              </Box>
            </Grid>

            {/* 3. Buyback */}
            <Grid item xs={12} md={4} position="relative">
              <Box
                sx={{
                  background: 'linear-gradient(to right, #9fc45b, #0d8548)',
                  color: '#fff',
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                  boxShadow: 3,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  30% Value Returns
                </Typography>
                <Typography variant="body2">
                  Returns flow to NKP holders through systematic buybacks creating upward price pressure
                </Typography>
              </Box>
              {/* Arrow (Desktop) */}
              <Box
                display={{ xs: 'none', md: 'flex' }}
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  left: -20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#0d8548',
                  width: 32,
                  height: 32,
                }}
              >
                <ArrowLeft size={16} color="#fff" />
              </Box>
              {/* Arrow (Mobile) */}
              <Box
                display={{ xs: 'flex', md: 'none' }}
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#0d8548',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                }}
              >
                <ArrowUp size={16} color="#fff" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
