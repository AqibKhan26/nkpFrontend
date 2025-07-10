import Table from "components/Table";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import { color } from "framer-motion";

export default function TechnologyStackTable() {
  return (
    <MKBox id="technology" mb={16} textAlign='left' sx={{scrollMarginTop: '100px',}}>
      {/* Section Title */}
      <MKTypography
        variant="h4"
        color="text.primary"
        fontWeight="bold"
        mb={4}
        sx={{ fontFamily: "Montserrat, sans-serif" }}
      >
        4. Technology Stack
      </MKTypography>

      {/* Section Description */}
      <MKTypography
        variant="body2"
        color="text"
        mb={6}
      >
        NKP combines blockchain, AI, and Earth observation infrastructure into a single platform that brings real-world environmental assets on-chain with precision, transparency, and speed. This multi-layered tech stack ensures verified carbon credits can be created, monitored, traded, and retired within a decentralized financial ecosystem.
      </MKTypography>

      {/* 4.1 Core Components */}
      <MKTypography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{ fontFamily: "Montserrat, sans-serif", color:'var(--nkp-primary)', scrollMarginTop: '100px', }}
        id="technology-4-1"
      >
        4.1 Core Components
      </MKTypography>

      <Table
        columns={[
          { name: "layer", align: "left" },
          { name: "description", align: "left" },
        ]}
        rows={[
          {
            layer: "Smart Contracts",
            description:
              "Deployed on Ethereum, with ERC-20 for NKP and ERC-1155 for fractional credits. Built for cross-chain support and DeFi integration.",
          },
          {
            layer: "On-Chain Registry",
            description:
              "Credit issuance and retirement managed through immutable on-chain metadata with registry API mapping.",
          },
          {
            layer: "Credit Serialization",
            description:
              "Credits are assigned unique identifiers linked to verified project metadata, GPS location, and registry data.",
          },
          {
            layer: "Carbon Marketplace",
            description:
              "Peer-to-peer platform for trading and retiring credits with automated pricing logic and user-owned credit vaults.",
          },
          {
            layer: "Buyback & Treasury System",
            description:
              "Smart contract-controlled revenue loop for buybacks, lockups, and protocol-funded growth.",
          },
        ]}
      />

      {/* 4.2 AI-Powered Monitoring */}
      <MKTypography
        variant="h5"
        fontWeight="bold"
        mt={10}
        mb={3}
        sx={{ fontFamily: "Montserrat, sans-serif",color:'var(--nkp-primary)', scrollMarginTop: '100px', }}
        id="technology-4-2"
      >
        4.2 AI-Powered Monitoring and Verification
      </MKTypography>

      <MKTypography variant="body2" color="text" mb={3}>
        NKP integrates with Morphware AI and TransparenC to perform continuous remote validation of environmental assets.
      </MKTypography>

      <ul style={{ paddingLeft: "0.75rem", marginBottom: "2rem" }}>
        {[
          {
            label: "Satellite Data Integration",
            desc: "Sub-meter resolution satellite imagery captured every 3 to 5 days",
          },
          {
            label: "LiDAR Scanning",
            desc: "3D forest biomass models for accurate carbon sequestration tracking",
          },
          {
            label: "Synthetic Aperture Radar (SAR)",
            desc: "Nighttime and all-weather imagery, ideal for dense tropical regions",
          },
          {
            label: "Anomaly Detection",
            desc: "Neural networks flag underperformance, unauthorized activity, or ecological risks",
          },
          {
            label: "Automated Credit Updates",
            desc: "AI calculates biomass and emissions data that feed directly into issuance logic",
          },
          {
            label: "On-Chain Logging",
            desc: "All performance reports are timestamped, signed, and stored via IPFS or Arweave",
          },
        ].map((item, idx) => (
          <li key={idx} style={{ marginBottom: "0.75rem" }}>
            <MKTypography variant="body2">
              <strong>{item.label}:</strong> {item.desc}
            </MKTypography>
          </li>
        ))}
      </ul>
    </MKBox>
  );
}
