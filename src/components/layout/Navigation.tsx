import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSwapModal } from "contexts/SwapModalContext";
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const { openSwap } = useSwapModal();
  const isMdUp = useMediaQuery(theme.breakpoints.up("lg"));

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Team", href: "/#team" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Whitepaper", href: "/whitepaper" },
    {
      name: "Buy NKP",
      standOut: true,
      onClick: () => openSwap(),
    },
  ];

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.clientHeight || 600;
      setScrolledPastHero(window.scrollY > heroHeight - 80); // 80 = header height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 300, p: 2 }}>
      <IconButton
        onClick={() => setDrawerOpen(false)}
        aria-label="close menu"
        sx={{ mb: 2 }}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            {item.onClick ? (
              <ListItemButton
                onClick={() => {
                  setDrawerOpen(false);
                  item.onClick?.();
                }}
                sx={{
                  fontWeight: item.standOut ? "bold" : "normal",
                  background: 'linear-gradient(90deg, #0d8548, #9fc45b)',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #0b6c3a, #85b143)',
                  },
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ) : (
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: item.standOut ? "common.white" : "text.primary",
                  fontWeight: item.standOut ? "bold" : "normal",
                  bgcolor: item.standOut ? "primary.main" : "transparent",
                  borderRadius: '8px',
                  "&:hover": {
                    bgcolor: item.standOut
                      ? "primary.dark"
                      : "action.hover",
                  }, '&:hover .MuiListItemText-primary': {
                    color: '#0d8548', // your desired green
                  }
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"          // fixed to top, overlays content
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(6px)",
        bgcolor: "rgba(0,0,0,0.2)",
        zIndex: (theme) => theme.zIndex.drawer - 1,
        color: "#fff", // very high z-index to stay on top
        backgroundColor: scrolledPastHero ? "#000" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 80 }}>
        {/* Logo and text */}
        <Button
          onClick={handleLogoClick}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textTransform: "none",
          }}
        >
          <Box
            component="img"
            src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreihzchdvovtotd3hzhlhgk2xrvir2zbuhk5zh2clxqkcaqly66yklu"
            alt="NKP Logo"
            sx={{
              height: { xs: 40, md: 64 },
              width: "auto",
              filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))",
            }}
          />
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: 600,
              color: "white",
              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap",
              display: { xs: "none", sm: "inline" },
            }}
          >
            <Box
              component="span"
              sx={{ color: "#0D8548", mr: 0.5 }}
            >
              NON
            </Box>
            <Box
              component="span"
              sx={{ color: "#9FC45B", mr: 0.5 }}
            >
              KYOTO
            </Box>
            <Box component="span" sx={{ color: "#0D8548" }}>
              PROTOCOL
            </Box>
          </Typography>
        </Button>

        {/* Desktop navigation */}
        {isMdUp ? (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) =>
              item.onClick ? (
                <HashLink smooth to={item.to} style={{ textDecoration: "none" }}>
                  <Button
                    key={item.name}
                    sx={{
                      textTransform: "none",
                      fontWeight: item.standOut ? "bold" : "normal",
                      color: "#fff",
                      background: item.standOut ? "linear-gradient(90deg, #0d8548, #9fc45b)" : "transparent",
                      '&:hover': {
                        background: item.standOut ? "linear-gradient(90deg, #0b6c3a, #85b143)" : "rgba(255,255,255,0.1)"
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </HashLink>
              ) : (
                <Button
                  key={item.name}
                  component="a"
                  href={item.href}
                  variant={item.standOut ? "contained" : "text"}
                  color={item.standOut ? "primary" : "inherit"}
                  sx={{
                    color: '#fff',
                    fontWeight: "900",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                    textTransform: "none",
                    "&:hover": {
                      opacity: 0.8,
                      color: '#0b6c3a',
                    },
                  }}
                >
                  {item.name}
                </Button>
              )
            )}
          </Box>
        ) : (
          // Mobile Hamburger Menu
          <>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              edge="end"
              color="inherit"
              aria-label="open menu"
              sx={{
                bgcolor: "rgba(13,133,72,255.5)",
                "&:hover": { bgcolor: "rgba(13,133,72,255.7)" },
              }}
            >
              <MenuIcon color="#9fc45b" />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {drawer}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
