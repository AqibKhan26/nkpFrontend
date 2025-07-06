import { motion } from "framer-motion";
import { Box, Typography, Paper, Container } from "@mui/material";

export default function Cookies() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to bottom right, #111827, #1f2937, #000)",
      }}
    >
      <Box component="main" pt={10} pb={8}>
        <Container maxWidth="md">
          {/* Heading */}
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
              mt={10}
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Cookie Policy
            </Typography>
            <Typography variant="h6" color="gray" maxWidth="600px" mx="auto">
              Learn about how we use cookies and similar technologies on our platform.
            </Typography>
          </motion.div>

          {/* Policy Content */}
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
              {/* Section: What Are Cookies */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                What Are Cookies
              </Typography>
              <Typography mb={4} textAlign='left'>
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.
              </Typography>

              {/* Section: How We Use Cookies */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                How We Use Cookies
              </Typography>
              <Typography mb={4} textAlign='left'>
                We use cookies to understand how you interact with our platform, remember your preferences, and improve our services.
              </Typography>

              {/* Section: Types of Cookies */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Types of Cookies
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                <li>Essential cookies: Required for basic website functionality</li>
                <li>Analytics cookies: Help us understand how visitors use our site</li>
                <li>Functional cookies: Remember your preferences and settings</li>
                <li>Marketing cookies: Used to deliver relevant advertisements</li>
              </Box>

              {/* Section: Managing Cookies */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Managing Cookies
              </Typography>
              <Typography mb={4}>
                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our platform.
              </Typography>

              {/* Section: Updates */}
              <Typography variant="h5" fontWeight={600} color="primary" mb={2}>
                Updates to This Policy
              </Typography>
              <Typography>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
