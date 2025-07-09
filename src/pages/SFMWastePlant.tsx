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

import RecyclingIcon from '@mui/icons-material/Recycling';
import FactoryIcon from '@mui/icons-material/Factory';
import BoltIcon from '@mui/icons-material/Bolt';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SFMWastePlant() {
    const [, setLocation] = useLocation();

    const stats = [
        { label: 'Waste Processed Daily', value: '550', unit: 'tons (scaling to 1000+)' },
        { label: 'GHG Emissions Reduced', value: '730,000', unit: 'tCO₂e per year' },
        { label: 'Jobs Created', value: '150+', unit: 'formal workers' }
    ];

    const impactAreas = [
        {
            icon: RecyclingIcon,
            title: 'Waste Processing Excellence',
            description: 'Processes 550 tons of municipal solid waste daily with plans to scale to 1000+ tons. Recovers 50,000+ tons of recyclables annually while producing 40,000 tons of refuse-derived fuel (RDF).'
        },
        {
            icon: FactoryIcon,
            title: 'Environmental Protection',
            description: 'Prevents 7.63 million gallons of leachate discharge per year and stops 495 tons of plastic leakage. All wastewater and leachate treated on-site to protect rivers and groundwater.'
        },
        {
            icon: BoltIcon,
            title: 'Climate Action Impact',
            description: 'Avoids 165,000 tCO₂e in methane emissions annually with total GHG reduction of 730,000 tCO₂e per year. Permanently closed the Hatillo dumpsite in San Francisco de Macorís.'
        },
        {
            icon: LocationOnIcon,
            title: 'Economic & Social Development',
            description: 'Created 150+ formal jobs while transitioning workers from informal waste picking. Advances 9 UN Sustainable Development Goals through public-private collaboration.'
        }
    ];

    const selectedSDGs = [3, 6, 7, 8, 9, 11, 12, 13, 17];

    const sdgIcons = selectedSDGs.map(
        (num) =>
            `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(num).padStart(2, "0")}.jpg`
    );


    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>

            {/* Hero Section */}
            <Box sx={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreiaj7oyunmdszlynsko4nik6l3vhn3a2isf4ff23k27jir3fejvsoe"
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
                                SFM Waste Valorization Plant
                            </Typography>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <Typography variant="h5" fontWeight={300} color="#fff">
                                Turning Trash Into Climate Action
                            </Typography>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={2}>
                                <MapPin size={20} />
                                <Typography> Dominican Republic • San Francisco de Macorís • Duarte Province</Typography>
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
                            Waste Valorization Plant
                        </Typography>

                        <Box component="div" sx={{ typography: "body1", color: "text.secondary", lineHeight: 1.8, textAlign: 'justify' }}>
                            <Typography paragraph>
                                The San Francisco de Macorís Waste Valorization Plant is one of the most impactful infrastructure projects in the Caribbean. This facility is solving a decades-old environmental crisis by turning waste into value through advanced technology and best-in-class environmental safeguards.
                            </Typography>

                            <Typography paragraph>
                                The plant permanently closed the Hatillo dumpsite and proves that modern waste management can be both clean and profitable. It's setting a precedent for what's possible across Latin America and the Caribbean, showing how sustainability and profitability work together.
                            </Typography>

                            <Typography paragraph>
                                Key Impacts:
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                <Box component="li" sx={{ display: "flex", alignItems: "start", mb: 1 }}>
                                    <Typography sx={{ color: "success.main", fontWeight: "bold", mr: 1 }}>•</Typography>
                                    <Typography component="span">
                                        Currently processing 550 tons daily, scaling to 1000+ tons within 6 months
                                    </Typography>
                                </Box>

                                <Box component="li" sx={{ display: "flex", alignItems: "start", mb: 1 }}>
                                    <Typography sx={{ color: "success.main", fontWeight: "bold", mr: 1 }}>•</Typography>
                                    <Typography component="span">
                                        Avoids 165,000 tCO₂e in methane emissions with 730,000 tCO₂e total GHG reduction annually
                                    </Typography>
                                </Box>

                                <Box component="li" sx={{ display: "flex", alignItems: "start", mb: 1 }}>
                                    <Typography sx={{ color: "success.main", fontWeight: "bold", mr: 1 }}>•</Typography>
                                    <Typography component="span">
                                        Created 150+ formal jobs while transitioning workers from informal waste picking
                                    </Typography>
                                </Box>

                                <Box component="li" sx={{ display: "flex", alignItems: "start", mb: 1 }}>
                                    <Typography sx={{ color: "success.main", fontWeight: "bold", mr: 1 }}>•</Typography>
                                    <Typography component="span">
                                        Recovers 50,000+ tons of recyclables and produces 40,000 tons of RDF annually
                                    </Typography>
                                </Box>
                            </Box>

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

            <Box py={10}>
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
                            This project advances the Dominican Republic's commitment to multiple SDGs
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
                                Direct SDG Impact
                            </Typography>
                            <Grid container spacing={4} color="grey.600">
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight="bold" mb={1} color="grey.800">
                                        Health & Environment
                                    </Typography>
                                    <Typography variant="body2">
                                        Eliminates exposure to toxic dumpsites, prevents leachate contamination, and reduces pollution-related illness through proper waste management.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight="bold" mb={1} color="grey.800">
                                        Clean Energy & Infrastructure
                                    </Typography>
                                    <Typography variant="body2">
                                        Produces RDF to replace fossil fuels and brings advanced waste processing technology to the region.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight="bold" mb={1} color="grey.800">
                                        Climate & Partnership
                                    </Typography>
                                    <Typography variant="body2">
                                        Reduces 730,000 tCO₂e annually through public-private collaboration and global financing.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
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
                                    $35.0
                                </Typography>
                                <Typography color="rgba(255,255,255,0.8)">+ $3.50 (+11.1%)</Typography>
                            </Box>

                            <Grid container spacing={3} mb={6}>
                                <Grid item xs={12} md={4} textAlign="center">
                                    <Typography variant="h5" color="common.white" fontWeight="bold" mb={0.5}>
                                        $31.20
                                    </Typography>
                                    <Typography variant="body2" color="rgba(255,255,255,0.7)">7-day avg</Typography>
                                </Grid>
                                <Grid item xs={12} md={4} textAlign="center">
                                    <Typography variant="h5" color="common.white" fontWeight="bold" mb={0.5}>
                                        $29.85
                                    </Typography>
                                    <Typography variant="body2" color="rgba(255,255,255,0.7)">30-day avg</Typography>
                                </Grid>
                                <Grid item xs={12} md={4} textAlign="center">
                                    <Typography variant="h5" color="common.white" fontWeight="bold" mb={0.5}>
                                        $42.1
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
                                    Buy Credits - $35.0/tonne - Coming Soon
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
