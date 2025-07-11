import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Table from "components/Table";

export default function WhitepaperArchitecture() {
  return (
    <MKBox id="architecture" mb={16} textAlign='left' sx={{ scrollMarginTop: '100px' }}>
      {/* Section Heading */}
      <MKTypography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        6. Architecture and Compliance
      </MKTypography>

      {/* Intro Paragraph */}
      <MKTypography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.75 }}
        mb={4}
      >
        NKP is structured to connect verifiable climate impact to programmable financial tools. Its
        architecture balances decentralized finance principles with institutional-grade security,
        transparency, and legal clarity.
      </MKTypography>

      {/* Subsection Heading */}
      <MKTypography
        id="architecture-6-1"
        variant="h5"
        mb={3}
        sx={{ color: "var(--nkp-primary)", scrollMarginTop: '100px' }}
      >
        6.1 System Architecture Overview
      </MKTypography>

      {/* Architecture Table */}
      <Table
        columns={[
          { name: "layer", align: "left" },
          { name: "role", align: "left" },
        ]}
        rows={[
          {
            layer: (
              <MKTypography variant="button" fontWeight="medium">
                Asset Layer
              </MKTypography>
            ),
            role: (
              <MKTypography variant="body2" color="text.secondary">
                Real-world infrastructure developed by Midori Earth (e.g. forests, waste plants)
              </MKTypography>
            ),
          },
          {
            layer: (
              <MKTypography variant="button" fontWeight="medium">
                Credit Layer
              </MKTypography>
            ),
            role: (
              <MKTypography variant="body2" color="text.secondary">
                Verified Emission Reductions (VERs) certified by Verra, Gold Standard, ISO
              </MKTypography>
            ),
          },
          {
            layer: (
              <MKTypography variant="button" fontWeight="medium">
                Registry Integration
              </MKTypography>
            ),
            role: (
              <MKTypography variant="body2" color="text.secondary">
                Off-chain credits linked to on-chain tokens through serialization and project mapping
              </MKTypography>
            ),
          },
          {
            layer: (
              <MKTypography variant="button" fontWeight="medium">
                Smart Contract Layer
              </MKTypography>
            ),
            role: (
              <MKTypography variant="body2" color="text.secondary">
                Manages issuance, retirement, buybacks, reinvestment, and fee logic
              </MKTypography>
            ),
          },
          {
            layer: (
              <MKTypography variant="button" fontWeight="medium">
                Token Layer (NKP)
              </MKTypography>
            ),
            role: (
              <MKTypography variant="body2" color="text.secondary">
                ERC-20 token representing claim on future value and protocol access
              </MKTypography>
            ),
          },
        ]}
      />

      {/* Footer Paragraph */}
      <MKTypography variant="body2" color="text.secondary" mt={4}>
        This architecture allows credits to be verifiably represented, tracked, and retired on-chain
        while ensuring that underlying performance remains tied to real environmental outcomes.
      </MKTypography>
    </MKBox>
  );
}
