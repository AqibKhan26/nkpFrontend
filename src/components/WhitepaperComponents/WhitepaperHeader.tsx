import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const WhitepaperHeader = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      textAlign="center"
      mb={8}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={3}
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          background: "linear-gradient(to right, #0d8548, #9fc45b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Non Kyoto Protocol Whitepaper
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={1}>
        Redefining Access to High-Integrity Environmental Assets
      </Typography>

      <Typography variant="body2" color="text.disabled">
        Version 6.0 - June 2025
      </Typography>
    </Box>
  );
};

export default WhitepaperHeader;
