// Material UI version of the WhyNKP section

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Collapse,
  Button,
  IconButton,
  Divider
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess,
  Close as CloseIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp } from 'lucide-react';
import { useSwapModal  } from "contexts/SwapModalContext";

export default function WhyNKP() {
  const [isOpen, setIsOpen] = useState(false);
  const { openSwap } = useSwapModal();

  return (
    <Box id="why-nkp" sx={{ py: 12, background: 'linear-gradient(to bottom right, #111827, #000)' }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', background: 'linear-gradient(to right, #0d8548, #9fc45b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why NKP?</Typography>
          <Typography variant="h4" align="center" sx={{ background: 'linear-gradient(to right, #0d8548, #9fc45b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 6 }}>Own the Future of High-Integrity Impact Finance</Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Paper sx={{ p: 5, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
            <Typography variant="body2" color="#fff" gutterBottom>
              The global carbon market is expected to grow <strong style={{ color: '#9fc45b' }}>15 to 20 times</strong> over the next decade. Demand is accelerating, while supply remains restricted by complex verification systems.
            </Typography>
            <Typography variant="body2" color="#fff" gutterBottom>
              NKP's niche — combining real-world project ownership with advanced Web3 infrastructure to drive trust and speed in the impact space.
            </Typography>
            <Paper sx={{ mt: 4, p: 3, border: '1px solid rgba(13,133,72,0.2)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <Typography variant='body2' align="center" color="#fff" textAlign="left">
                NKP isn't blowing smoke, it's planting trees. NKP gives direct exposure to public, high-integrity environmental projects with visible outcomes and real revenues.
              </Typography>
            </Paper>
          </Paper>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Paper sx={{ mt: 8, p: 5, backgroundColor: 'rgba(255,255,255,0.1)', textAlign: 'center', backdropFilter: 'blur(6px)' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', background: 'linear-gradient(to right, #0d8548, #9fc45b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>NKP delivers what matters</Typography>
            <Typography variant="body1" color="#fff" sx={{ mb: 4 }}>Real assets, revenue, transparency, and scale potential. It is where purpose meets performance.</Typography>
            <Button variant="contained" onClick={() => openSwap()} sx={{ background: 'linear-gradient(to right, #0d8548, #9fc45b)', color: '#fff', px: 4, py: 1.5, fontWeight: 'bold' }}>Buy NKP</Button>
          </Paper>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}>
          <Paper sx={{ mt: 10, p: 6, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', background: 'linear-gradient(to right, #0d8548, #9fc45b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>Founder-Led Commitment</Typography>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              sx={{
                ['@media (min-width:900px)']: {
                  display: 'flex',
                },
              }}
            >
              {[
                {
                  icon: <Shield />,
                  label: '100,000',
                  desc: 'Verified Carbon Credits Committed',
                },
                { icon: <Award />, label: '3', desc: 'Revenue Streams' },
                { icon: <TrendingUp />, label: '2', desc: 'Major Projects' },
              ].map(({ icon, label, desc }) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={label}
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'flex',
                    },
                  }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      border: '1px solid rgba(255,255,255,0.2)',
                      textAlign: 'center',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flex: 1,
                      '&:hover': { borderColor: 'rgba(255,255,255,0.5)' },
                    }}
                  >
                    <Box display="flex" justifyContent="center" mb={2}>
                      {icon}
                    </Box>
                    <Typography variant="h5" color="#000" gutterBottom>
                      {label}
                    </Typography>
                    <Typography color="#000" variant="body2">
                      {desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>


            <Box mt={6}>
              <Button
                fullWidth
                variant="text" // no border
                onClick={() => setIsOpen(!isOpen)}
                endIcon={isOpen ? <ExpandLess /> : <ExpandMore />}
                sx={{
                  fontSize: '1.125rem', // equivalent to 18px
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'transparent', // prevent background on hover
                  }
                }}
              >
                Learn More About Our Commitment
              </Button>
              <Collapse in={isOpen}>
                <Box mt={3} bgcolor="#111827" p={3} borderRadius={2}>
                  <Typography color="#fff" variant='body2' gutterBottom textAlign='left' mb={2}>
                    <span
                      style={{
                        background: 'linear-gradient(to right, #0d8548, #9fc45b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 600,
                      }}
                    >
                      William Schuman
                    </span>, founder and CEO of Midori Earth and NKP, has committed 100,000 verified carbon credits to the platform, sourced from Chaco Vivo in Paraguay. These credits represent a real-world asset value of over $2.5 million USD, reflecting both institutional and founder confidence in the protocol's operational strength and ability to generate long-term value.
                  </Typography>
                  <Typography color="#fff" variant='body2' gutterBottom textAlign='left' mb={2}>
                    Through arms-length associations with the founder's other ventures, Midori Earth gains unique access to a broader pipeline of high-integrity impact projects and verified carbon assets. This positions the platform far beyond typical Web3 offerings—delivering unmatched, transparent exposure to real projects, real revenues, and real environmental impact.
                  </Typography>
                  <Typography color="#fff" variant='body2' textAlign='left' mb={2}>
                    This founder-led commitment ensures that NKP launches with substantial backing from day one, providing token holders with immediate exposure to verified environmental assets and ongoing revenue streams from operational carbon credit projects.
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
