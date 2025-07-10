import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

export default function WhitepaperConclusion() {
  return (
    <MKBox id="conclusion" mb={16} textAlign='left' sx={{scrollMarginTop: '100px',}}>
      {/* Title */}
      <MKTypography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{ fontFamily: "Montserrat, sans-serif" }}
        color="text.primary"
      >
        7. Conclusion
      </MKTypography>

      {/* Content */}
      <MKBox sx={{color: "text.secondary", lineHeight: 1.8 }}>
        <MKTypography variant="body2" mb={3}>
          The Non Kyoto Protocol redefines impact. It transforms carbon credits from opaque certificates into verifiable, liquid, and programmable financial assets. NKP is not a concept waiting for execution. It is a live system built on real-world infrastructure, measurable outcomes, and transparent technology.
        </MKTypography>

        <MKTypography variant="body2" mb={3}>
          This platform is designed for long-term value creation. Verified carbon credits generate off-chain revenue. That revenue flows into locked token buybacks and reinvestment. As Midori Earth grows its asset base, the NKP ecosystem expands, rewarding holders through direct exposure to high-integrity environmental performance.
        </MKTypography>

        <MKTypography variant="body2">
          What sets NKP apart is its ability to deliver impact with returns, and returns with purpose. Every tonne of carbon avoided or removed creates measurable ecological value and drives tokenholder upside.
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}
