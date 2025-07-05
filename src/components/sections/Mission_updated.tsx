import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="pt-12 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative transition-all duration-1000 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">




        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-16 border-l-4 border-red-500">
            <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>What's Holding Us Back</h3>
            <p className="text-lg text-white/80 mb-8 md:mb-12 text-center italic">Barriers, gatekeepers, and broken incentives</p>
            <ul className="grid md:grid-cols-2 gap-4 md:gap-6 text-white/90 text-base md:text-lg">
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Access to high-return environmental assets is limited to large institutions and insiders</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Everyday investors are locked out of carbon markets and tech-driven impact finance</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Complex legal, compliance, and capital barriers prevent participation in major sustainability projects</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Decentralized finance has yet to reach the real-world impact space in any meaningful way</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Most investors cannot verify what they're funding or whether it creates real value</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">High-impact projects are hard to find, harder to trust, and nearly impossible to join early</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Global climate finance is centralized and gatekept, leaving profit and impact on the table</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Traditional investment platforms lack the infrastructure to handle small-scale environmental investments efficiently</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-16 border-l-4 border-nkp-primary">
            <h3 className="text-2xl md:text-3xl font-bold text-nkp-primary mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>The Path Forward</h3>
            <p className="text-lg text-white/80 mb-8 md:mb-12 text-center italic">NKP makes it open, verifiable, and built to scale</p>
            <ul className="grid md:grid-cols-2 gap-4 md:gap-6 text-white/90 text-base md:text-lg">
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Democratizes access to large-scale, high-integrity environmental projects once closed to the public</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Eliminates entry barriers by tokenizing real-world impact and enabling open participation</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Leverages blockchain and AI to verify, track, and link impact to financial performance</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Connects capital to trusted, revenue-generating projects with massive upside</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Removes red tape, middlemen, and institutional blockers through decentralized infrastructure</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Puts everyday investors at the core of impact finance, with transparency, liquidity, and control</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Delivers a single ecosystem where you can earn returns and drive real change</span>
              </li>
              <li className="flex items-start mb-3 md:mb-0">
                <div className="w-3 h-3 bg-nkp-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                <span className="leading-relaxed">Creates a scalable platform that grows with the expanding global demand for verified environmental assets</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}