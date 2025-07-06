import { motion } from "framer-motion";
import { Box, Typography, Paper, Container } from "@mui/material";

export default function Disclaimer() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to bottom right, #111827, #1f2937, #000)",
      }}
    >
      <Box component="main" pt={10} pb={8}>
        <Container maxWidth="md">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="#fff"
              gutterBottom
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Disclaimer
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              maxWidth="600px"
              mx="auto"
            >
              Important disclaimers regarding the use of Non Kyoto Protocol platform and services.
            </Typography>
          </motion.div>

          {/* Disclaimer Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 6 },
                backgroundColor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "16px",
                color: "#fff",
                textAlign: 'justify'
              }}
            >
              {/* Section: Investment Risk */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Investment Risk
              </Typography>
              <Typography mb={4}>
                Investments in carbon credits and environmental assets carry inherent risks. Past performance does not guarantee future results. All investments may lose value.
              </Typography>

              {/* Section: No Financial Advice */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                No Financial Advice
              </Typography>
              <Typography mb={4}>
                The information provided on this platform is for informational purposes only and should not be considered as financial, investment, or legal advice.
              </Typography>

              {/* Section: Regulatory Compliance */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Regulatory Compliance
              </Typography>
              <Typography mb={4}>
                Users are responsible for ensuring compliance with applicable laws and regulations in their jurisdiction before participating in any activities on our platform.
              </Typography>

              {/* Section: Technology Risks */}
              <Typography variant="h5" fontWeight={600} color="#fff" mb={2}>
                Technology Risks
              </Typography>
              <Typography mb={4}>
                Blockchain and cryptocurrency technologies involve risks including but not limited to volatility, regulatory changes, and technical vulnerabilities.
              </Typography>

              {/* Section: Environmental Impact */}
              <Typography variant="h5" fontWeight={600} color="#fff" mb={2}>
                Environmental Impact
              </Typography>
              <Typography>
                While we strive to verify environmental impact claims, actual results may vary and are subject to third-party validation and measurement.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
