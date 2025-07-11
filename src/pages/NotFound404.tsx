import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import NotFound404Img from "assets/NotFound404Vine.png"

const NotFound404 = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        gap: 4,
        px: 2,
        background: '#fff'
      }}
    >
      <Box
        component="img"
        src={NotFound404Img}
        alt="404 - Not Found"
        sx={{ width: "100%", maxWidth: 500 }}
      />

      <Typography variant="h4" fontWeight="bold" sx={{color: "var(--nkp-primary)"}}>
        Oops! Page not found.
      </Typography>

      <Typography variant="body1" color="text.secondary"  sx={{color: "var(--nkp-secondary)"}}>
        The page you're looking for might have been removed or is temporarily unavailable.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ mt: 2, borderRadius: 2, textTransform: "none", background: 'linear-gradient(to right, #0d8548, #9fc45b)', color: '#fff' }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound404;
