import { motion } from "framer-motion";
import { Container, Box, Typography, Grid } from "@mui/material";
import { useState } from "react";

const partners = [
  {
    name: "Anama Tech",
    logo: "https://midori.earth/attached_assets/anamatechlogonew-1_1749786400780.png",
    description: "Technology and infrastructure solutions"
  },
  {
    name: "Chaco Vivo",
    logo: "https://midori.earth/attached_assets/Chaco-Vivo-2A-scaled_1749786400780.png",
    description: "Forest conservation and restoration projects"
  },
  {
    name: "TransparenC",
    logo: "https://midori.earth/attached_assets/transparenc_1749786400780.png",
    description: "Carbon transparency and verification"
  },
  {
    name: "Movil Soluciones",
    logo: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeihzj6lxjrq3bwcc5n6rp5gjjoqjwm5vtevjnl52xf6lat2grb5une",
    description: "Mobile and digital solutions"
  },
  {
    name: "Creative Carbon",
    logo: "https://midori.earth/attached_assets/creative-carbon-logo-green-scaled_1749786400781.png",
    description: "Creative carbon credit solutions"
  },
  {
    name: "Morphware",
    logo: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreihj7f5afcbdudlareg6gexoogzgclyorfkfgifoh5xx2grnrvfqae",
    description: "Decentralized AI infrastructure"
  },
  {
    name: "Jealous Devil",
    logo: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreih7dmvn7ulz5vrwuifjnb5rw5k4obgnkj3nsewi2lokekgigl7rvu",
    description: "Premium charcoal and grilling solutions"
  }
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      id="partners"
      sx={{
        py: 8,
        background: "linear-gradient(to bottom right, #111827, #1f2937)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 6,
              background: "linear-gradient(to right, #0d8548, #9fc45b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Our Partners
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {partners.map((partner, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={partner.name}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    width: hoveredIndex === index ? 160 : 140,
                    height: hoveredIndex === index ? 160 : 140,
                    transition: "all 0.3s ease",
                    opacity: hoveredIndex === index ? 1 : 0.75,
                  }}
                >
                  <Box
                    component="img"
                    src={partner.logo}
                    alt={partner.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: hoveredIndex === index ? "none" : "grayscale(40%)",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
