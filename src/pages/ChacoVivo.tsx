// Material UI + Framer Motion version of ChacoVivo
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { ArrowLeft, MapPin, Leaf, Users, Shield } from 'lucide-react';
import {
    Box,
    Button,
    Container,
    Typography,
    Grid,
    Paper,
    IconButton,
    buttonGroupClasses,
} from '@mui/material';

import SecurityIcon from '@mui/icons-material/Security';           // for Shield
import NatureIcon from '@mui/icons-material/Nature';                     // for Leaf
import GroupIcon from '@mui/icons-material/Group';                 // for Users
import LocationOnIcon from '@mui/icons-material/LocationOn';       // for MapPin

export default function ChacoVivo() {
    const [, setLocation] = useLocation();

    const stats = [
        { label: 'Protected Area', value: '187,000', unit: 'hectares' },
        { label: 'CO₂ Sequestration', value: '2.5M', unit: 'tonnes annually' },
        { label: 'Biodiversity', value: '500+', unit: 'species protected' },
    ];

    const impactAreas = [
        {
            icon: SecurityIcon,
            title: 'Forest Protection',
            description:
                'Advanced monitoring systems prevent deforestation and illegal logging activities using satellite technology and ground-based sensors.',
        },
        {
            icon: NatureIcon,
            title: 'Active Regeneration',
            description:
                'Scientific reforestation programs restore degraded areas with native species, enhancing ecosystem resilience and biodiversity.',
        },
        {
            icon: GroupIcon,
            title: 'Community Engagement',
            description:
                'Local communities receive sustainable livelihood opportunities through eco-tourism, agroforestry, and conservation training programs.',
        },
        {
            icon: LocationOnIcon,
            title: 'Verified Credits',
            description:
                'Blockchain-verified carbon credits provide transparent, immutable proof of environmental impact and regenerative outcomes.',
        },
    ];

    const sdgIcons = Array.from({ length: 17 }, (_, i) => `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(i + 1).padStart(2, "0")}.jpg`);

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>

            {/* Hero Section */}
            <Box sx={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreibbwdyrqn2mmj4ulrbuton3bmrhd3ramqbwrzde4ern37zhk2muba"
                    alt="Chaco Vivo Forest"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
                <Box
                    sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Box textAlign="center" px={3} color="#fff">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <Typography variant="h1" fontWeight={700} gutterBottom color="#fff">
                                Chaco Vivo
                            </Typography>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <Typography variant="h5" fontWeight={300} color="#fff">
                                Forest Conservation & Regeneration
                            </Typography>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={2}>
                                <MapPin size={20} />
                                <Typography>Paraguay • Gran Chaco Region</Typography>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Box>

            {/* Stats Section */}
            <Box py={8} bgcolor="#fff">
                <Container>
                    <Grid container spacing={4} justifyContent="center">
                        {stats.map((stat, index) => (
                            <Grid item xs={12} md={4} key={stat.label}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Typography variant="h2" fontWeight={700} color="#0d8548">
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {stat.unit}
                                    </Typography>
                                    <Typography variant="overline" fontWeight={600}>
                                        {stat.label}
                                    </Typography>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box component="section" py={8} bgcolor="#f9fafb">
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                        >
                            Project Overview
                        </Typography>

                        <Typography
                            variant="h6"
                            component="h3"
                            fontWeight={600}
                            gutterBottom
                            align="center"
                            color="#0d8548"
                            sx={{ mb: 4 }}
                        >
                            Ecosystem-Scale Conservation Initiative
                        </Typography>

                        <Box component="div" sx={{ typography: "body1", color: "text.secondary", lineHeight: 1.8, textAlign: 'justify' }}>
                            <Typography paragraph>
                                The Gran Chaco ecosystem represents one of South America's most critical yet threatened landscapes.
                                Spanning across Paraguay, Argentina, Bolivia, and Brazil, this vast dry forest is home to extraordinary
                                biodiversity and serves as a crucial carbon sink for global climate stability.
                            </Typography>

                            <Typography paragraph>
                                Our Chaco Vivo initiative focuses on the Paraguayan region, where deforestation rates have reached
                                alarming levels due to agricultural expansion and illegal logging. Through advanced satellite monitoring,
                                community-based conservation programs, and blockchain-verified carbon credit generation, we're creating
                                a sustainable model for forest protection that benefits both the environment and local communities.
                            </Typography>

                            <Typography paragraph>
                                This project tackles one of the planet's most urgent environmental challenges by preventing the
                                destruction of 187,000 hectares of critical habitat while sequestering over 2.5 million tonnes of
                                CO₂ annually. The initiative represents a new paradigm in conservation finance, where environmental
                                protection generates sustainable economic returns through transparent, blockchain-verified impact measurement.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            <Box py={10} bgcolor="white">
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            align="center"
                            fontWeight="bold"
                            color="text.primary"
                            mb={2}
                        >
                            Conservation Impact
                        </Typography>

                        <Typography
                            variant="h6"
                            align="center"
                            color="text.secondary"
                            mb={6}
                        >
                            Multi-faceted approach to ecosystem preservation and regeneration
                        </Typography>

                        <Grid container spacing={4}>
                            {impactAreas.map((area, index) => (
                                <Grid item xs={12} md={6} key={area.title}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 3,
                                                bgcolor: '#f5f5f5', // or your theme value
                                                height: '100%',
                                                p: 3,
                                                textAlign: 'left'
                                            }}
                                        >
                                            <Box display="flex" alignItems="center" gap={2} mb={2} textAlign='left'>
                                                <Box
                                                    width={48}
                                                    height={48}
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    borderRadius={2}
                                                    sx={{
                                                        bgcolor: "#0d8548", // or a custom theme color
                                                    }}
                                                >
                                                    <area.icon style={{ width: 24, height: 24, color: "white" }} />
                                                </Box>
                                                <Typography variant="h6" fontWeight="bold" color="text.primary">
                                                    {area.title}
                                                </Typography>
                                            </Box>
                                            <Typography color="text.secondary" lineHeight={1.6}>
                                                {area.description}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            <Box py={10} bgcolor="grey.50">
                <Box maxWidth="lg" mx="auto" px={3}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            textAlign="center"
                            mb={2}
                            color="grey.800"
                        >
                            UN Sustainable Development Goals
                        </Typography>
                        <Typography
                            variant="h6"
                            color="grey.600"
                            textAlign="center"
                            mb={6}
                        >
                            This project contributes to all 17 UN Sustainable Development Goals
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Grid container spacing={2} justifyContent="center" mb={6}>
                            {sdgIcons.map((url, index) => (
                                <Grid item xs={3} sm={2} md={1.5} key={index}>
                                    <Box
                                        width={{ xs: 64, sm: 80 }}
                                        height={{ xs: 64, sm: 80 }}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        bgcolor="common.white"
                                        boxShadow={1}
                                        borderRadius={2}
                                        p={1}
                                        sx={{ transition: "box-shadow .3s", '&:hover': { boxShadow: 4 } }}
                                    >
                                        <Box
                                            component="img"
                                            src={url}
                                            alt={`SDG ${index + 1}`}
                                            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Paper sx={{ p: 4, mb: 6 }}>
                            <Typography variant="h5" fontWeight="bold" mb={3} color="grey.800">
                                Forest Conservation Impact Across All SDGs
                            </Typography>
                            <Grid container spacing={4} color="grey.600">
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight="bold" mb={1} color="grey.800">
                                        Environmental Protection
                                    </Typography>
                                    <Typography variant="body2">
                                        Preserves biodiversity, prevents deforestation, sequesters carbon,
                                        and protects watersheds critical for climate stability.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight="bold" mb={1} color="grey.800">
                                        Economic Development
                                    </Typography>
                                    <Typography variant="body2">
                                        Creates sustainable livelihoods through eco-tourism, research
                                        opportunities, and carbon credit revenues for local communities.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight="bold" mb={1} color="grey.800">
                                        Social Innovation
                                    </Typography>
                                    <Typography variant="body2">
                                        Advances indigenous rights, promotes education, ensures gender
                                        equality in conservation programs, and builds institutional capacity.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Box textAlign="center">
                            <Button
                                variant="contained"
                                href="https://transparenc.earth/insights/chaco-vivo/journey?callbackUrl=/insights"
                                target="_blank"
                                rel="noopener noreferrer"
                                endIcon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        style={{ width: 20, height: 20 }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                }
                                sx={{
                                    bgcolor: "#0d8548",
                                    color: "common.white",
                                    px: 4,
                                    py: 2,
                                    borderRadius: 9999,
                                    fontWeight: 600,
                                    '&:hover': { bgcolor: "#0d8548", opacity: 0.9 },
                                }}
                            >
                                View Project on TransparenC
                            </Button>
                            <Typography variant="body2" mt={2} color="grey.600">
                                Access detailed transparency reports, monitoring data, and real-time impact verification
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </Box>

            <Box
                py={16}
                sx={{
                    background: "linear-gradient(to bottom right, #0d8548, #9fc45b)", // replace with theme values if needed
                }}
            >
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box textAlign="center" maxWidth="md" mx="auto" mb={8}>
                            <Typography variant="h1" component="h2" fontWeight="bold" color="common.white" gutterBottom>
                                Price Predictions
                            </Typography>
                            <Typography color="rgba(255,255,255,0.8)">
                                Powered by Midori Earth AI Analytics
                            </Typography>
                        </Box>

                        {/* Price Card */}
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(4px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: 4,
                                p: 6,
                                mb: 8,
                            }}
                        >
                            <Typography variant="h4" color="common.white" fontWeight="600" mb={4}>
                                Carbon Credit Price (per tonne)
                            </Typography>

                            <Box textAlign="center" mb={6}>
                                <Typography variant="body1" color="rgba(255,255,255,0.7)" mb={1}>
                                    Live market data
                                </Typography>
                                <Typography variant="h2" fontWeight="bold" color="common.white" mb={1}>
                                    $25.5
                                </Typography>
                                <Typography color="rgba(255,255,255,0.8)">+ $2.15 (+9.2%)</Typography>
                            </Box>

                            <Grid container spacing={3} mb={6}>
                                <Grid item xs={12} md={4} textAlign="center">
                                    <Typography variant="h5" color="common.white" fontWeight="bold" mb={0.5}>
                                        $23.80
                                    </Typography>
                                    <Typography variant="body2" color="rgba(255,255,255,0.7)">7-day avg</Typography>
                                </Grid>
                                <Grid item xs={12} md={4} textAlign="center">
                                    <Typography variant="h5" color="common.white" fontWeight="bold" mb={0.5}>
                                        $22.45
                                    </Typography>
                                    <Typography variant="body2" color="rgba(255,255,255,0.7)">30-day avg</Typography>
                                </Grid>
                                <Grid item xs={12} md={4} textAlign="center">
                                    <Typography variant="h5" color="common.white" fontWeight="bold" mb={0.5}>
                                        $28.60
                                    </Typography>
                                    <Typography variant="body2" color="rgba(255,255,255,0.7)">Projected</Typography>
                                </Grid>
                            </Grid>

                            <Box textAlign="center">
                                <Button
                                    href="/marketplace"
                                    variant="contained"
                                    disabled
                                    sx={{
                                        bgcolor: "common.white",
                                        color: "#0d8548", // use your custom theme or hex if needed
                                        fontWeight: "600",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 9999,
                                        '&:hover': {
                                            bgcolor: "rgba(255,255,255,0.9)",
                                        },
                                    }}
                                >
                                    Buy Credits - $25.5/tonne - Coming Soon
                                </Button>
                            </Box>
                        </Paper>

                        <Typography textAlign="center" color="rgba(255,255,255,0.6)" variant="body2">
                            Real-time pricing based on verified carbon credit market data and AI-powered analytics
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

        </Box >
    );
}
