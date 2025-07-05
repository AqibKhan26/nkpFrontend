import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NKPValuePortfolio() {

  return (
    <Box
      id="projects"
      sx={{ pt: 10, pb: 12, background: "linear-gradient(to bottom, #111827, #000000)" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{
              background: "linear-gradient(to right, #0d8548, #9fc45b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Montserrat, sans-serif",
              mb: 4
            }}
          >
            NKP Value Portfolio
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            align="center"
            sx={{ opacity: 0.9, maxWidth: 1000, mx: "auto", mb: 2 }}
          >
            NKP is not built on hype or far-fetched promises. It is backed by real-world projects that generate off-chain revenues. These projects are verified by trusted global standards and are publicly verifiable. This value flows directly into the NKP system, whereby the token captures and represents the continually growing value generated.
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            align="center"
            sx={{ opacity: 0.9, maxWidth: 1000, mx: "auto", mb: 8 }}
          >
            Tangible revenues generated from the sale of carbon credits from these projects flow into the NKP system, connecting holders to a growing system of real-world impact and financial returns.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {[{
            title: "CHACO VIVO",
            subtitle: "Largest VCS-CCBS REDD+ conservation project in Paraguayan Chaco ecosystem",
            description: "The largest verified carbon standard conservation project in the Paraguayan Chaco ecosystem. This groundbreaking REDD+ initiative protects critical biodiversity while generating verified carbon credits through forest conservation and sustainable land management practices.",
            image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreibbwdyrqn2mmj4ulrbuton3bmrhd3ramqbwrzde4ern37zhk2muba",
            link: "/chaco-vivo",
            bg: "#0d8548"
          }, {
            title: "SFM WASTE VALORIZATION PLANT",
            subtitle: "Most impactful infrastructure project in Caribbean",
            description: "One of the most impactful infrastructure projects in the Caribbean. Processing 550 tons of waste daily with plans to scale to 1000+ tons, preventing 730,000 tCO₂e emissions annually while creating 150+ formal jobs and permanently closing legacy dumpsites.",
            image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreiaj7oyunmdszlynsko4nik6l3vhn3a2isf4ff23k27jir3fejvsoe",
            link: "/sfm-waste",
            bg: "#9fc45b"
          }].map(({ title, subtitle, description, image, link, bg }) => (
            <Grid item xs={12} md={6} key={title}>
              <motion.div
                initial={{ opacity: 0, x: bg === "#0d8548" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", height: '650px', flexDirection:'column', justifyContent: 'space-between' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt={title}
                  />
                  <CardContent>
                    <Typography variant="h4" fontWeight="bold" color='#fff' gutterBottom textAlign='left'>{title}</Typography>
                    <Typography variant="h5" textAlign='left' sx={{ color: bg }}>{subtitle}</Typography>
                    <Typography variant="h6" textAlign='left' sx={{ color: "#fff", mt: 2 }}>{description}</Typography>
                  </CardContent>
                  <Box px={2} pb={3}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowRight />}
                      onClick={() => window.location.href = link}
                      sx={{
                        background: `linear-gradient(to right, ${bg}, ${bg === "#0d8548" ? "#159e57" : "#b2d266"})`,
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "999px",
                        py: 1.5,
                        textTransform: "none",
                        mt: 2,
                        '&:hover': {
                          background: `linear-gradient(to right, ${bg === "#0d8548" ? "#0a6e3a" : "#85aa45"}, ${bg})`
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
