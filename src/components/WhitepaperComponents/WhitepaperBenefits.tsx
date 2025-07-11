import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Table from "components/Table";

export default function WhitepaperBenefits() {
  return (
    <MKBox id="benefits" mb={16} textAlign="left" sx={{
        scrollMarginTop: '100px',
    }}>
      {/* Heading */}
      <MKTypography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{ fontFamily: "Montserrat, sans-serif" }}
        color="text.primary"
      >
        5. Benefits and Differentiators
      </MKTypography>

      {/* Intro Paragraph */}
      <MKTypography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.75, maxWidth: "100%" }}
        mb={4}
      >
        NKP is designed to solve fundamental challenges in the carbon credit market — access, trust,
        and scalability. It delivers an ecosystem that connects real-world assets to on-chain
        infrastructure, offering powerful advantages to buyers, investors, developers, and partners.
      </MKTypography>

      {/* Subsection */}
      <MKTypography
      id="benefits-5-1"
        variant="h5"
        mb={3}
        sx={{color: "var(--nkp-primary)",  scrollMarginTop: '100px'}}
      >
        5.1 For Market Participants
      </MKTypography>

      {/* Table */}
      <Table
        columns={[
          { name: "stakeholder", align: "left" },
          { name: "benefit", align: "left" },
        ]}
        rows={[
          {
            stakeholder: (
              <MKTypography variant="button" fontWeight="medium">
                Buyers
              </MKTypography>
            ),
            benefit: (
              <MKTypography variant="body2" color="text.secondary">
                Access to high-integrity credits with full transparency, provenance, and retirement proof
              </MKTypography>
            ),
          },
          {
            stakeholder: (
              <MKTypography variant="button" fontWeight="medium">
                Investors
              </MKTypography>
            ),
            benefit: (
              <MKTypography variant="body2" color="text.secondary">
                Exposure to real-world yield backed by verified revenue and locked buyback mechanics
              </MKTypography>
            ),
          },
          {
            stakeholder: (
              <MKTypography variant="button" fontWeight="medium">
                Corporates
              </MKTypography>
            ),
            benefit: (
              <MKTypography variant="body2" color="text.secondary">
                Automated retirement, ESG reporting, and SDG-mapped documentation
              </MKTypography>
            ),
          },
          {
            stakeholder: (
              <MKTypography variant="button" fontWeight="medium">
                Project Developers
              </MKTypography>
            ),
            benefit: (
              <MKTypography variant="body2" color="text.secondary">
                Faster access to markets, reduced verification costs, and AI-powered monitoring
              </MKTypography>
            ),
          },
          {
            stakeholder: (
              <MKTypography variant="button" fontWeight="medium">
                Governments
              </MKTypography>
            ),
            benefit: (
              <MKTypography variant="body2" color="text.secondary">
                Bilateral agreement tracking and public credit retirement frameworks
              </MKTypography>
            ),
          },
        ]}
      />

      {/* Closing Statement */}
      <MKTypography variant="body2" color="text.secondary" mt={4}>
        NKP democratizes access to climate infrastructure and simplifies how carbon offsets are
        purchased, verified, and retired.
      </MKTypography>
    </MKBox>
  );
}
