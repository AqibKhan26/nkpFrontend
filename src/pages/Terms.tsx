import { motion } from "framer-motion";
import { Box, Typography, Paper, Container } from "@mui/material";

export default function Terms() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to bottom right, #111827, #1f2937, #000)",
      }}
    >
      <Box component="main" pt={10} pb={8}>
        <Container maxWidth="md">
          {/* Header Section */}
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
              Terms of Service
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              maxWidth="600px"
              mx="auto"
            >
              Please read these Terms of Service carefully before using the Non Kyoto Protocol platform.
            </Typography>
          </motion.div>

          {/* Content */}
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
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                1. Acceptance of Terms
              </Typography>
              <Typography mb={4}>
                By accessing and using the Non Kyoto Protocol platform, you accept and agree to be bound by the terms and provision of this agreement.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                2. Use License
              </Typography>
              <Typography mb={4}>
                Permission is granted to temporarily access the materials on Non Kyoto Protocol's platform for personal, non-commercial transitory viewing only.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                3. Disclaimer
              </Typography>
              <Typography mb={4}>
                The materials on Non Kyoto Protocol's platform are provided on an 'as is' basis. Non Kyoto Protocol makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                4. Limitations
              </Typography>
              <Typography mb={4}>
                In no event shall Non Kyoto Protocol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Non Kyoto Protocol's platform.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                5. Contact Information
              </Typography>
              <Typography>
                If you have any questions about these Terms of Service, please contact us through our official channels.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
