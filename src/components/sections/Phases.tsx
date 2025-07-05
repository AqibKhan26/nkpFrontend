import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Collapse,
  Divider,
  Chip
} from "@mui/material";
import { ExpandMore, AccessTime } from "@mui/icons-material";

interface Phase {
  number: string;
  title: string;
  period: string;
  subtitle: string;
  colorFrom: string;  // Use colors instead of tailwind classes
  colorTo: string;
  summary: string;
  items: string[];
}

const web2Phases: Phase[] = [
  {
    number: "1",
    title: "Foundation",
    period: "Q2 2025 - Q4 2025",
    subtitle: "Current Phase",
    colorFrom: "#0d8548",
    colorTo: "#9fc45b",
    summary: "Building core infrastructure with 100K+ carbon credits and real-time monitoring systems",
    items: [
      "Complete on-chain representation infrastructure with registry API connections (Q2 2025)",
      "On-chain representation of first 100,000 Chaco Vivo REDD+ credits",
      "On-chain representation of Dominican Republic Landfill-Avoidance credits (Q4 2025)",
      "Development of basic retirement and reporting portal"
    ],
  },
  {
    number: "2",
    title: "Expansion",
    period: "Q1 2026 - Q4 2026",
    subtitle: "Growth Phase",
    colorFrom: "#9fc45b",
    colorTo: "#0d8548",
    summary: "Scaling to 5M+ tonnes with corporate integration tools and lending protocols",
    items: [
      "Develop corporate carbon accounting integration toolkit (Q1 2026)",
      "Release carbon-backed lending protocol (Q2 2026)",
      "Expansion to 5M+ tonnes through new project development and acquisition",
      "Addition of automated retirement APIs for corporate integrations",
      "Implementation of fractional credit ownership and yield strategies"
    ],
  },
  {
    number: "3",
    title: "Acceleration",
    period: "Q1 2027 - Q4 2028",
    subtitle: "Scaling Phase",
    colorFrom: "#0d8548",
    colorTo: "#9fc45b",
    summary: "Achieving 50M+ tonnes with full registry integration and derivatives markets",
    items: [
      "Target of 10M+ tonnes across diversified project portfolio (2027)",
      "Long-term target of 50M+ tonnes with global project coverage (2028)",
      "Full registry integration with Verra, Gold Standard, and ACR",
      "Advanced credit derivatives and forward markets",
      "Implementation of sovereign carbon credit infrastructure"
    ],
  },
];

// You can define web3Phases similarly...

const web3Phases = [
  {
    number: "1",
    title: "DeFi Integration",
    period: "Q1 2026 - Q2 2026",
    subtitle: "Yield Phase",
    colorFrom: "#0d8548",
    colorTo: "#9fc45b",
    summary: "Deploying AMMs and DeFi integration for decentralized carbon credit trading",
    items: [
      "Deploy automated market makers (AMMs) for carbon credit trading",
      "Integrate with major DeFi protocols for liquidity provision",
      "Release carbon credit derivatives and futures contracts"
    ]
  },
  {
    number: "2",
    title: "Cross-Chain Expansion",
    period: "Q3 2026 - Q4 2026",
    subtitle: "Multi-Chain Phase",
    colorFrom: "#0d8548",
    colorTo: "#9fc45b",
    summary: "Multi-chain deployment with NFT marketplace and institutional DeFi vaults",
    items: [
      "Deploy on Polygon, Arbitrum, and Optimism networks",
      "Launch cross-chain carbon credit bridge infrastructure",
      "Integrate with Base ecosystem and Coinbase institutional products",
      "Deploy carbon credit NFT marketplace with fractionalization",
      "Launch institutional DeFi vaults for ESG compliance"
    ]
  },
  {
    number: "3",
    title: "Ecosystem Maturity",
    period: "Q1 2027 - Q4 2028",
    subtitle: "Global Phase",
    colorFrom: "#0d8548",
    colorTo: "#9fc45b",
    summary: "Global ecosystem with index tokens, autonomous funding, and AI-powered oracles",
    items: [
      "Launch carbon credit index tokens and ETF products",
      "Deploy autonomous carbon project funding mechanisms",
      "Integrate with traditional finance through tokenized bonds",
      "Launch global carbon credit insurance protocols",
      "Deploy AI-powered carbon credit pricing oracles"
    ]
  }
];

const TimelinePhase = ({ phase, index, isLast }: { phase: Phase; index: number; isLast: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ position: "relative", marginBottom: 48 }}
    >

      <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
        {/* Circle with number */}
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: `linear-gradient(to right, ${phase.colorFrom}, ${phase.colorTo})`,
            boxShadow: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 24,
            flexShrink: 0,
          }}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
        >
          {phase.number}
        </Box>

        {/* Content card */}
        <Paper
          elevation={4}
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "1px solid",
            borderColor: "grey.300",
            cursor: "pointer",
            textAlign: 'left',
            transition: "box-shadow 0.3s ease",
            "&:hover": { boxShadow: 8 },
          }}
          onClick={() => setIsExpanded(!isExpanded)}
          component={motion.div}
          whileHover={{ y: -3 }}
        >
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {phase.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.secondary", fontSize: '0.75rem' }}>
                    <AccessTime fontSize="small" />
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      {phase.period}
                    </Typography>
                  </Box>
                </Box>

                <Chip
                  label={phase.subtitle}
                  sx={{
                    background: `linear-gradient(to right, ${phase.colorFrom}, ${phase.colorTo})`,
                    color: "#fff",
                    fontWeight: "medium",
                    mb: 2,
                  }}
                  size="small"
                />

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {phase.summary}
                </Typography>

                {/* {!isExpanded && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {phase.summary}
                  </Typography>
                )} */}
              </Box>

              <IconButton
                aria-label={isExpanded ? "Collapse phase" : "Expand phase"}
                sx={{ color: "text.secondary" }}
                component={motion.button}
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ExpandMore />
              </IconButton>
            </Box>
          </Box>

          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <Box sx={{ p: 3 }}>
              <ul style={{ paddingLeft: 16, margin: 0, color: '#9fc45b' }}>
                {phase.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    style={{ marginBottom: 12, color: "#444", listStyle: "disc outside" }}
                  >
                    <Typography variant="body2">{item}</Typography>
                  </motion.li>
                ))}
              </ul>
            </Box>
          </Collapse>
        </Paper>
      </Box>
    </motion.div>
  );
};

const TimelineRoadmap = ({
  title,
  subtitle,
  phases,
}: {
  title: string;
  subtitle: string;
  phases: Phase[];
}) => (
  <Box sx={{ mb: 10 }}>
    <Container maxWidth="md" sx={{ textAlign: "center", mb: 8 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontFamily: "'Montserrat', sans-serif",
          background: "linear-gradient(to right, #0d8548, #9fc45b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
    </Container>

    <Box sx={{ maxWidth: 900, mx: "auto" }}>
      {phases.map((phase, index) => (
        <TimelinePhase
          key={index}
          phase={phase}
          index={index}
          isLast={index === phases.length - 1}
        />
      ))}
    </Box>
  </Box>
);

export default function Phases() {
  return (
    <Box
      component="section"
      id="phases"
      sx={{
        pt: 12,
        pb: 16,
        background: "#fff",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Montserrat', sans-serif",
              background: "linear-gradient(to right, #0d8548, #9fc45b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Development Roadmap
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Our strategic path to scaling carbon impact and platform growth across Web2 and Web3 ecosystems
          </Typography>
        </Box>

        <TimelineRoadmap
          title="Web2 Roadmap"
          subtitle="Traditional infrastructure and enterprise integration"
          phases={web2Phases}
        />

        <TimelineRoadmap
          title="Web3 Roadmap"
          subtitle="DeFi integration and decentralized ecosystem expansion"
          phases={web3Phases}
        />

        {/* For demonstration, use the same data or define web3Phases similarly */}
        {/* <TimelineRoadmap
          title="Web3 Roadmap"
          subtitle="DeFi integration and decentralized ecosystem expansion"
          phases={web3Phases}
        /> */}
      </Container>
    </Box>
  );
}
