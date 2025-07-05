import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline width="1280" height="720" onCanPlay={() => {
        setVideoLoaded(true);
      }}
        onLoadedMetadata={(e) => {
          // Start playing as soon as metadata is loaded
          e.currentTarget.play().catch(() => {
            console.log('Video autoplay blocked');
          });
        }}>
        <source
          src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeih6rro7336h2gb57wtobblhd3znrrputhdbzikar3frc3hz25vg5u"
          type="video/webm"
        />
        <source
          src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeib7kuatc6tr2td2hhieakq6ecpreanatu3zfzydbsjyakckbrhhiq"
          type="video/mp4"
        />
      </video>

      <div className="overlay" >
        <motion.img
          src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeibibye6ba32fhd5k5coog4ehroovm3gimgdwpszxp64b2wvpj22ti"
          alt="NKP Logo"
          className="logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            maxWidth: "80vw",
            width: 600,
            zIndex: 1,
            height: "auto",
            marginBottom: "0.5rem",    // reduced spacing here
            filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8))",
          }}
        />
        <motion.div
          className="gradient-line"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          Unlocking opportunity through innovation, asset-backed value, and returns
          with real impact.
        </motion.p>
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors duration-300" />
      </div>
    </div>
  );
}
