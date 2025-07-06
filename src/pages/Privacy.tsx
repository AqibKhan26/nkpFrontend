import { motion } from "framer-motion";
import { Box, Typography, Paper, Container } from "@mui/material";

export default function Privacy() {
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
              Privacy Policy
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              maxWidth="600px"
              mx="auto"
            >
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </Typography>
          </motion.div>

          {/* Body */}
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
              {/* Sections */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Information We Collect
              </Typography>
              <Typography mb={4}>
                We collect information you provide directly to us, such as when
                you create an account, participate in our platform, or contact
                us for support.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                How We Use Your Information
              </Typography>
              <Typography mb={4}>
                We use the information we collect to provide, maintain, and
                improve our services, process transactions, and communicate with
                you.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Information Sharing
              </Typography>
              <Typography mb={4}>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Data Security
              </Typography>
              <Typography mb={4}>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </Typography>

              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Contact Us
              </Typography>
              <Typography>
                If you have any questions about this Privacy Policy, please
                contact us through our official channels.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
