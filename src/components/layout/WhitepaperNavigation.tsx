import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListSubheader,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigationItems = [
  {
    id: "vision",
    title: "1. Vision",
    subsections: [
      { id: "vision-1-1", title: "1.1 Redefining Access to High-Integrity Environmental Assets" },
      { id: "vision-1-2", title: "1.2 The NKP Advantage, Purpose-Built for Profitable Impact" },
      { id: "vision-1-3", title: "1.3 Exclusive Asset Pipeline" }
    ]
  },
  {
    id: "market",
    title: "2. Market Position and Outlook",
    subsections: [
      { id: "market-2-1", title: "2.1 Carbon Credit Demand is Exploding" },
      { id: "market-2-2", title: "2.2 Competitive Advantage and Market Differentiation" },
      { id: "market-2-3", title: "2.3 Supply Scarcity Creates Long-Term Value" }
    ]
  },
  {
    id: "tokenomics",
    title: "3. Tokenomics",
    subsections: [
      { id: "tokenomics-3-1", title: "3.1 Token Supply and Allocation" },
      { id: "tokenomics-3-2", title: "3.2 LP Security and Pair Information" },
      { id: "tokenomics-3-3", title: "3.3 Buyback and Reinvestment Engine" },
      { id: "tokenomics-3-4", title: "3.4 Market Trading Fee" }
    ]
  },
  {
    id: "technology",
    title: "4. Technology Stack",
    subsections: [
      { id: "technology-4-1", title: "4.1 Core Components" },
      { id: "technology-4-2", title: "4.2 AI-Powered Monitoring and Verification" }
    ]
  },
  {
    id: "benefits",
    title: "5. Benefits and Differentiators",
    subsections: [
      { id: "benefits-5-1", title: "5.1 For Market Participants" }
    ]
  },
  {
    id: "architecture",
    title: "6. Architecture and Compliance",
    subsections: [
      { id: "architecture-6-1", title: "6.1 System Architecture Overview" }
    ]
  },
  {
    id: "conclusion",
    title: "7. Conclusion",
    subsections: []
  }
];

const WhitepaperNavigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderList = () => (
    <List
      sx={{
        width: 350,
        p: 2,
        textAlign: "left",
      }}
      subheader={<li />}
    >
      {navigationItems.map((section) => (
        <Box key={`section-${section.id}`} component="li" sx={{ listStyle: "none", p: 0, m: 0 }}>
          <ListSubheader
            disableSticky
            sx={{
              px: 0,
              bgcolor: "transparent",
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            <a
              href={`#${section.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                paddingLeft: 16,
              }}
            >
              {section.title}
            </a>
          </ListSubheader>
          {section.subsections.map((sub) => (
            <ListItem
              key={sub.id}
              component="a"
              href={`#${sub.id}`}
              sx={{ pl: 4 }}
            >
              <ListItemText
                primary={sub.title}
                primaryTypographyProps={{
                  fontSize: '0.85rem',
                  fontWeight: 400,
                  color: 'text.secondary' 
                }}
              />
            </ListItem>
          ))}
        </Box>
      ))}
    </List>
  );


  return (
    <>
      {isMobile ? (
        <>
          {/* Mobile Menu Button */}
          {!mobileOpen && (
            <Box sx={{ position: "fixed", top: theme.spacing(10), left: 16, zIndex: 1300 }}>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                aria-label="open navigation menu"
                sx={{
                  bgcolor: '#9fc45b',   // green background from theme
                  borderRadius: '50%',     // makes it perfectly round
                  color: '#fff',          // white icon color for contrast
                  '&:hover': {
                    bgcolor: '#9fc45b', // darker green on hover
                  },
                  width: 40,
                  height: 40,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {/* Mobile Drawer */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton onClick={handleDrawerToggle} aria-label="close navigation menu">
                <CloseIcon />
              </IconButton>
            </Box>
            {renderList()}
          </Drawer>
        </>
      ) : (
        // Desktop Sidebar
        <Box
          sx={{
            height: '90vh',
            width: 400,
            overflowY: "auto",
            bgcolor: "background.paper",
            borderRight: 1,
            borderColor: "divider",
            p: 2,
            marginTop: 10
          }}
        >
          <Typography variant="h6" gutterBottom textAlign='left'>
            Content
          </Typography>
          {renderList()}
        </Box>
      )}
    </>
  );
};

export default WhitepaperNavigation;
