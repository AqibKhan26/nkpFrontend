import { motion } from "framer-motion";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <Box
      id="newsletter"
      sx={{
        py: 12,
        background: "linear-gradient(to bottom right, rgba(16,185,129,0.05), white, rgba(132,204,22,0.05))",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="sm" margin="0 auto">
            Get the latest updates on carbon credit opportunities, market insights, and platform developments.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(6px)",
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              boxShadow: 3,
              p: { xs: 4, md: 6 },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                background: "linear-gradient(to right, #10b981, #84cc16)",
                borderRadius: "50%",
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Mail color="#fff" size={32} />
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Join Our Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={4}>
              Stay informed about the latest carbon credit opportunities and NKP developments.
            </Typography>

            {/* Mailchimp Embedded Form */}
            <form
              action="https://nonkyotoprotocol.us15.list-manage.com/subscribe/post?u=0a6d9a0a66beaa99f489e699a&amp;id=5830f3a3a2&amp;f_id=001054e1f0"
              method="post"
              target="_blank"
              noValidate
            >
              <TextField
                label="Email Address"
                name="EMAIL"
                required
                type="email"
                fullWidth
                sx={{
                  mb: 3,
                  "& input": {
                    backgroundColor: "#fff",
                    borderRadius: 2,
                  },
                }}
              />
              <input type="hidden" name="b_0a6d9a0a66beaa99f489e699a_5830f3a3a2" tabIndex={-1} defaultValue="" />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #10b981, #059669)",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  color: "#fff",
                  borderRadius: 2,
                  "&:hover": {
                    background: "linear-gradient(to right, #059669, #047857)",
                    transform: "translateY(-1px)",
                    boxShadow: 6,
                  },
                }}
              >
                Subscribe to Newsletter
              </Button>
            </form>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
