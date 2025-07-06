/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
import { Linkedin } from "lucide-react";
// import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function IntroCardLeft({ image, quote, name, role, linkedinLink }) {

  return (
    <MKBox component="section" position="relative" py={6}>
      <Container sx={{ maxWidth: "100% !important" }}>
        <Grid container item xs={10} sx={{ mx: "auto" }}>
          <MKBox variant="gradient" bgColor="dark" borderRadius="lg" width="100%" py={6}>
            <Grid container>
              <Grid item xs={12} md={6} xl={4} sx={{ position: "relative", px: 6 }}>
                <MKBox
                  component="img"
                  src={image}
                  alt="image"
                  borderRadius="md"
                  maxWidth="300px"
                  height="300px"
                  width="100%"
                  position="relative"
                  mt={-12}
                  sx={{
                    objectFit: "cover", // or "cover" if you want it to crop instead of scale down
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={8}
                sx={{
                  position: "relative",
                  px: { xs: 6, md: 2 },
                  mt: { xs: 3, md: 0 },
                  my: { xs: 0, md: "auto" },
                  color: ({ palette: { white } }) => white.main,
                }}
              >
                <MKTypography variant="h3" fontWeight="bold" color="white" mb={2}>
                  {name} - {role}
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="light"
                  mb={2}
                  sx={{ fontSize: "1.125rem" }}
                >
                  {quote}
                </MKTypography>
                <Button
                  variant="contained"
                  startIcon={<Linkedin size={18} />}
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: "linear-gradient(to right, #10b981, #059669)", // NKP primary -> secondary
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "9999px", // pill shape
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      background: "linear-gradient(to right, #059669, #047857)",
                      color: 'none'
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default IntroCardLeft;
