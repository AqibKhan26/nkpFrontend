import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero fade-in immediately
    setHeroVisible(true);
  }, []);

  return (
    <section className="overflow-hidden bg-black relative -mt-20" style={{ height: 'calc(100vh + 5rem)' }}>

        {/* Background Image (Fallback) */}
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url('https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeihwxijby6cugggjvfidixibflhh46zt7c4kolicorbzhea3l5rqpu')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'saturate(0.8) brightness(0.6)'
          }}
        />
        
        {/* Video Background (All Devices) */}
        <motion.div 
          className="absolute inset-0 z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            controls={false}
            className="w-full h-full object-cover"
            style={{ 
              pointerEvents: 'none',
              outline: 'none',
              filter: 'saturate(0.8)',
              transform: 'scale(1.05)',
              objectPosition: 'center center',
              willChange: 'auto',
              visibility: videoLoaded ? 'visible' : 'hidden'
            }}
            onCanPlay={() => {
              setVideoLoaded(true);
            }}
            onLoadedMetadata={(e) => {
              // Start playing as soon as metadata is loaded
              e.currentTarget.play().catch(() => {
                console.log('Video autoplay blocked');
              });
            }}
          >
            <source src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeih6rro7336h2gb57wtobblhd3znrrputhdbzikar3frc3hz25vg5u" type="video/webm" />
            <source src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeib7kuatc6tr2td2hhieakq6ecpreanatu3zfzydbsjyakckbrhhiq" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

        {/* Main content container with fade-in */}
        <motion.div 
          className="relative z-[5] flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 translate-y-[20px] md:-translate-y-[100px]" 
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Hero heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="mb-12"
            >
              <h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8 text-white max-w-6xl mx-auto flex flex-col items-center"
                style={{
                  textShadow: '2px 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.6)',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                <div className="flex justify-center mb-2">
                  <div className="w-full max-w-[1200px] h-[400px] overflow-visible flex items-center justify-center">
                    <motion.img 
                      src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeibibye6ba32fhd5k5coog4ehroovm3gimgdwpszxp64b2wvpj22ti"
                      alt="NKP Logo"
                      className="w-[min(85vw,380px)] md:w-[min(75vw,800px)] h-auto md:translate-y-[35px] hero-logo"
                      loading="eager"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: videoLoaded ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{ 
                        filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))',
                        transformOrigin: 'center',
                        objectFit: 'contain',
                        willChange: 'opacity'
                      }}
                    />
                  </div>
                </div>
              </h1>
              <div 
                className="w-24 h-1 bg-gradient-to-r from-nkp-primary to-nkp-secondary mx-auto mb-4"
                style={{ transform: 'translateY(-50px)' }}
              ></div>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90 max-w-5xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: videoLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{
                  textShadow: '1px 1px 8px rgba(0,0,0,0.8)',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.01em',
                  transform: 'translateY(-20px)'
                }}
              >
                Unlocking opportunity through innovation, asset-backed value, and returns with real impact.
              </motion.p>
              
              {/* Scroll Down Arrow - Desktop Only */}
              <motion.div 
                className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="cursor-pointer"
                  onClick={() => {
                    const nextSection = document.querySelector('#why-nkp');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors duration-300" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
    </section>
  );
}