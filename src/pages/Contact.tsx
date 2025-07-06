import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Join Our Telegram",
      description: "Connect with our community and get real-time updates",
      action: "Join Telegram",
      link: "https://t.me/nonkyotoprotocol",
    },
    {
      icon: Globe,
      title: "Follow on X",
      description: "Stay updated with the latest news and announcements",
      action: "Follow on X",
      link: "https://x.com/nonkyotoproto",
    },
    {
      icon: Mail,
      title: "Business Inquiries",
      description: "For partnerships and business opportunities",
      action: "Contact Us",
      link: "mailto:info@nonkyotoprotocol.com",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #1f2937, #111827, #000)",
      }}
    >
      <Box component="main" pt={10} pb={8}>
        <Box maxWidth="md" mx="auto" px={2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              mt={10}
              fontWeight={700}
              gutterBottom
              textAlign="center"
              color="#fff"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              textAlign="center"
              maxWidth="md"
              mx="auto"
            >
              Get in touch with our team. We're here to help and answer any questions you may have.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Grid container spacing={4} mt={4}>
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(6px)",
                        p: 4,
                        borderRadius: 4,
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        '&:hover': {
                          backgroundColor: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          backgroundColor: "rgba(13,133,72,0.2)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <Icon style={{ width: 32, height: 32, color: "#0D8548" }} />
                      </Box>
                      <Typography variant="h6" fontWeight="bold" color="#fff" gutterBottom>
                        {method.title}
                      </Typography>
                      <Typography color="gray" paragraph>
                        {method.description}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => window.open(method.link, "_blank")}
                        sx={{
                          background: "linear-gradient(90deg, #0d8548, #9fc45b)",
                          color: "#fff",
                          fontWeight: 600,
                          textTransform: "none",
                          '&:hover': {
                            background: "linear-gradient(90deg, #0b6c3a, #85b143)",
                          },
                        }}
                      >
                        {method.action}
                      </Button>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
