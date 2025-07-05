import { Grid } from "@mui/material";
import MKBox from "components/MKBox"; // Adjust if it's a local alias
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard"; 
import {
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Collapse,
  Divider,
  Chip
} from "@mui/material";// Adjust based on your setup

const teamMembers = [
  {
    name: "William Schuman",
    role: "CEO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreigwx52snneanjktjh7nthzmoka3pmpx6pyjvnmpwfimszamlgr24e",
    description:
      "William is a technical strategist with 20+ years in global infrastructure and carbon projects, bridging real-world impact with blockchain.",
  },
  {
    name: "Alexander Dan",
    role: "CTO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeiduh76ynkyvgvcb2mu4yj3xvnklybkcilmsmnx25siddrlc4bswge",
    description:
      "Alexander is a blockchain expert with experience at ConsenSys and InfStones, focused on protocol scaling and infrastructure decentralization.",
  },
  {
    name: "Irfan Ali",
    role: "CCO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreifwd2fedzel47lmxe5zkupvzxwtlhnn2a4bkdkdk7hpisliakh3eq",
    description:
      "Irfan specializes in emissions reporting and ESG compliance, leading carbon analysis and GHG modeling at Midori Earth and NKP.",
  },
  {
    name: "Brad Godfrey",
    role: "CPO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreiabgajiy5yh5ltmh7n65u4f3foond5wwepdfbsbbnlz6whh2ybrdm",
    description:
      "Brad is a veteran energy systems engineer with 35+ years of experience, scaling renewable projects and carbon credit generation globally.",
  },
];

export default function TeamGrid() {
  return (
    <Grid container spacing={3}>
  {teamMembers.map((member, index) => (
    <Grid item xs={12} lg={6} key={index}>
      <MKBox
        mb={1}
        sx={{
          height: "220px", // Adjust to match your desired height
        }}
      >
        <HorizontalTeamCard
          image={member.image}
          name={member.name}
          position={{ color: "info", label: member.role }}
          description={
            <Box
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "60px", // fixed height for description
              }}
            >
              {member.description}
            </Box>
          }
          sx={{
            height: "100%", // make sure the card fills the MKBox
            display: "flex",
            flexDirection: "column",
          }}
        />
      </MKBox>
    </Grid>
  ))}
</Grid>

  );
}
