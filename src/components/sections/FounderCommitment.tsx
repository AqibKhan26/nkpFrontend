import { motion } from "framer-motion";
import { Shield, Award, TrendingUp } from "lucide-react";

export default function FounderCommitment() {
  return (
    <section id="founder-commitment" className="pt-12 pb-16 bg-gradient-to-b from-gray-900 to-black relative transition-all duration-1000">
      {/* Carbon mesh overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeiaxhbzimotgeniwtg2jm2vyscxgn6d2bkzz6aacba2eqttk53qfwm')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.04
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-16 min-h-[900px]">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.2', paddingBottom: '8px' }}
            >
              Founder-Led Commitment
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 border border-nkp-primary/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-nkp-primary" />
                </div>
                <div className="text-3xl font-bold text-nkp-primary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>200,000</div>
                <div className="text-sm text-white/80">Verified Carbon Credits Committed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 border border-nkp-primary/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-nkp-primary" />
                </div>
                <div className="text-3xl font-bold text-nkp-primary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>$5M+</div>
                <div className="text-sm professional-text-muted">Real-World Asset Value</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 border border-nkp-primary/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-nkp-primary" />
                </div>
                <div className="text-3xl font-bold text-nkp-primary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>2</div>
                <div className="text-sm text-white/80">Major Projects Sourced</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8 text-lg leading-relaxed text-white"
            >
              <p style={{ color: '#ffffff' }}>
                <span className="font-bold bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent">William Schuman</span>, founder and CEO of <strong className="text-white font-bold">Midori Earth</strong> and <strong className="text-white font-bold">NKP</strong>, has committed 200,000 verified carbon credits to the platform, sourced from two major projects: Chaco Vivo and a Waste-to-Value initiative in the Dominican Republic. These credits represent a real-world asset value of over $5 million USD, reflecting both institutional and founder confidence in the protocol's operational strength and ability to generate long-term value.
              </p>
              
              <p style={{ color: '#ffffff' }}>
                Through arms-length associations with the founder's other ventures, <strong className="text-white font-bold">Midori Earth</strong> gains unique access to a broader pipeline of high-integrity impact projects and verified carbon assets. This positions the platform far beyond typical Web3 offerings—delivering unmatched, transparent exposure to real projects, real revenues, and real environmental impact.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 border border-nkp-primary/20 text-center shadow-sm"
              >
                <p className="text-nkp-primary font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  No speculation. No smoke and mirrors.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  Just verifiable value, delivered at scale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}