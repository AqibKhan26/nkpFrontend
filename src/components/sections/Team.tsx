import { Grid } from "@mui/material";
import MKBox from "components/MKBox"; // Adjust if it's a local alias
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";
import IntroCardLeft from "components/Cards/TeamCards/HorizontalTeamCard/IntroCardLeft";
import IntroCardRight from "components/Cards/TeamCards/HorizontalTeamCard/IntroCardRight";

import MemoryIcon from '@mui/icons-material/Memory';
import WidgetsIcon from '@mui/icons-material/Widgets';
import RouteIcon from '@mui/icons-material/Route';
import LockIcon from '@mui/icons-material/Lock';

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
    linkedin: "https://www.linkedin.com/in/wschuman/"
  },
  {
    name: "Alexander Dan",
    role: "CTO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeiduh76ynkyvgvcb2mu4yj3xvnklybkcilmsmnx25siddrlc4bswge",
    description:
      "Alexander is a blockchain expert with experience at ConsenSys and InfStones, focused on protocol scaling and infrastructure decentralization.",
    linkedin: "https://www.linkedin.com/in/alexander-dan-393b13174/"
  },
  {
    name: "Irfan Ali",
    role: "CCO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreifwd2fedzel47lmxe5zkupvzxwtlhnn2a4bkdkdk7hpisliakh3eq",
    description:
      "Irfan specializes in emissions reporting and ESG compliance, leading carbon analysis and GHG modeling at Midori Earth and NKP.",
    linkedin: "https://www.linkedin.com/in/irfan-ali-81a6559b/?originalSubdomain=pk",
  },
  {
    name: "Brad Godfrey",
    role: "CPO",
    image: "https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreiabgajiy5yh5ltmh7n65u4f3foond5wwepdfbsbbnlz6whh2ybrdm",
    description:
      "Brad is a veteran energy systems engineer with 35+ years of experience, scaling renewable projects and carbon credit generation globally.",
    linkedin: "https://www.linkedin.com/in/brad-godfrey-3010b537/",
  },
];

export default function TeamGrid() {
  return (
    <Box id="team" py={12} sx={{
      background: 'linear-gradient(to bottom right, #ffffff, rgba(241,245,249,0.4), #ffffff)',
      position: 'relative',
      mt: 1
    }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
          background: 'linear-gradient(90deg, #0d8548, #9fc45b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2,
          mb: 4
        }}
      >
        Architects of the Regenerative Era
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
          background: '#000',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2,
          mb: 4
        }}
      >
        Driven by science. Powered by purpose.
      </Typography>
      <IntroCardLeft
        role={teamMembers[0].role}
        image={teamMembers[0].image}
        quote={teamMembers[0].description}
        name={teamMembers[0].name}
        linkedinLink={teamMembers[0].linkedin}
      />
      <IntroCardRight
        role={teamMembers[1].role}
        image={teamMembers[1].image}
        quote={teamMembers[1].description}
        name={teamMembers[1].name}
        linkedinLink={teamMembers[1].linkedin}
      />
      <IntroCardLeft
        role={teamMembers[2].role}
        image={teamMembers[2].image}
        quote={teamMembers[2].description}
        name={teamMembers[2].name}
        linkedinLink={teamMembers[2].linkedin}
      />
      <IntroCardRight
        role={teamMembers[3].role}
        image={teamMembers[3].image}
        quote={teamMembers[3].description}
        name={teamMembers[3].name}
        linkedinLink={teamMembers[3].linkedin}
      />
    </Box>
  );
}
