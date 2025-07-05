import { motion } from "framer-motion";
import { Leaf, Globe, TrendingUp, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isKyotoExpanded, setIsKyotoExpanded] = useState(false);
  return (
    <section id="about" className="pt-16 pb-12 bg-white relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Protocol Card - Side by Side Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-black" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}>
                  TRANSFORMING MARKETS
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-nkp-primary to-nkp-secondary mx-auto mt-2"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}>
                THE NON KYOTO PROTOCOL MODEL
              </h3>
            </div>
          </div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 items-stretch min-h-[28rem]">
              {/* Left Side - Image with Text Overlay */}
              <div className="relative h-[24rem] lg:h-[28rem] overflow-hidden flex-1">
                <motion.img 
                  src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeiajgq2sv77lceyhqjsrbencsvksrvulviftsth6e2kl2fulw4m3xu"
                  alt="Environmental landscape"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.1 }}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-white/60"></div>
                <motion.div 
                  className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold leading-tight text-black mb-3 text-center whitespace-nowrap" style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      textShadow: '2px 2px 8px rgba(255,255,255,0.8)',
                      fontWeight: 'bold',
                      lineHeight: '1.2'
                    }}>
                      The Kyoto Protocol
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-2xl mb-3" style={{
                      textShadow: '1px 1px 6px rgba(255,255,255,0.8)',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '600',
                      lineHeight: '1.7'
                    }}>
                      was the world's first major international agreement aimed at reducing greenhouse gas emissions. Signed in 1997, it set binding targets for industrialized countries to cut emissions. The protocol became bogged down in complex negotiations, limited participation, and slow implementation.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={() => setIsKyotoExpanded(!isKyotoExpanded)}
                      className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 text-xs sm:text-sm font-medium"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        textShadow: 'none'
                      }}
                    >
                      {isKyotoExpanded ? (
                        <ChevronLeft className="mr-2 h-4 w-4" />
                      ) : (
                        <ChevronLeft className="mr-2 h-4 w-4" />
                      )}
                      Learn about Kyoto Protocol
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <motion.div 
                className="flex flex-col justify-between p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white h-[24rem] lg:h-[28rem] flex-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: imageLoaded ? 1 : 0, x: imageLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold leading-tight text-gray-900 mb-3 text-center whitespace-nowrap" style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.2'
                  }}>
                    <span className="bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent">The Non Kyoto Protocol</span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-3" style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: '1.7',
                    fontWeight: '600'
                  }}>
                    takes a fundamentally different approach. Rather than relying on top-down mandates, NKP connects verified real-world assets to open blockchain infrastructure, allowing anyone to participate in impact investing. It is built to move faster, operate transparently, and deliver measurable economic and climate value – a true <span className="font-bold text-nkp-primary">Triple Bottom Line</span> opportunity.
                  </p>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/whitepaper"
                    className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-nkp-primary to-nkp-secondary text-white hover:opacity-90 transition-colors duration-200 text-xs sm:text-sm font-medium"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Read the NKP Whitepaper
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Kyoto Protocol Info Modal */}
        {isKyotoExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsKyotoExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  The Kyoto Protocol - Detailed Information
                </h3>
                <button
                  onClick={() => setIsKyotoExpanded(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6 text-gray-700" style={{ 
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: '1.6'
              }}>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Features:</h4>
                  <ul className="space-y-3 ml-4">
                    <li><strong>Binding Emission Reduction Targets:</strong> Set legally binding targets for 37 industrialized countries and the European Community for 2008-2012.</li>
                    <li><strong>Average Reduction Target:</strong> Countries were to reduce greenhouse gas emissions by an average of 5% below 1990 levels.</li>
                    <li><strong>Greenhouse Gases Covered:</strong> Six main gases including CO2, methane, nitrous oxide, HFCs, PFCs, and sulphur hexafluoride.</li>
                    <li><strong>Flexibility Mechanisms:</strong> Introduced international emissions trading, joint implementation, and the Clean Development Mechanism (CDM).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Background and Context:</h4>
                  <p>The Kyoto Protocol is a response to the scientific consensus that climate change is happening and that human activities are a significant contributor. It aimed to operationalize the UNFCCC's goal of stabilizing greenhouse gas concentrations in the atmosphere at a safe level. The protocol recognized that developed countries have historically been the main emitters of greenhouse gases and therefore bear a greater responsibility for addressing climate change.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Criticisms and Shortcomings:</h4>
                  <ul className="space-y-3 ml-4">
                    <li>The United States, a major emitter, did not ratify the protocol.</li>
                    <li>Exemption of developing countries from binding targets weakened the agreement.</li>
                    <li>Questions about the effectiveness of flexibility mechanisms and overall ambition of targets.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Legacy:</h4>
                  <p>Despite limitations, the Kyoto Protocol was the first legally binding international agreement on greenhouse gas reductions and laid groundwork for the Paris Agreement, which aims to be more inclusive and comprehensive. The Paris Agreement, unlike the Kyoto Protocol, is not legally obligatory, but it is seen as a more comprehensive and potentially more effective approach.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}



        {/* Value Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nkp-primary mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Real Assets. Diversified Portfolio. Growing Value.
          </h2>
          <div className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700">
            Real-world physical assets generate stable, verified off-chain revenue that fuels the NKP value engine and sets it apart from typical Web3 projects.
          </div>
        </motion.div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-48 md:h-48 overflow-hidden">
              <img 
                src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafybeietnb6n4uvv33jajv323pbbwhcn2eipivdyaf7upxttzbu5ytso7e"
                alt="Real World Assets"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Real World Assets</h3>
              <p className="text-base md:text-lg font-medium mb-3 text-gray-700">revenue generation</p>
              <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                Our projects generate tangible financial instruments and products that generate real-world revenue streams and are backed by real-world impact and trusted third party standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-48 md:h-48 overflow-hidden">
              <img 
                src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreidhkc5rcwv4lh23gaozp5xavqo634swn6aovizynuxuohvbokt5b4"
                alt="Worldwide Reach"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Worldwide Reach</h3>
              <p className="text-base md:text-lg font-medium mb-3 text-gray-700">project diversity</p>
              <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                From impact projects in South America to waste management in the Caribbean, our projects represent a diversified portfolio of value creation for our stakeholders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-48 md:h-48 overflow-hidden">
              <img 
                src="https://violet-abundant-gamefowl-535.mypinata.cloud/ipfs/bafkreifyfcauxalszujoqxajh2b363oijp7e6p2j34ga6acexeodpbickm"
                alt="Web3 Connectivity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Web3 Connectivity</h3>
              <p className="text-base md:text-lg font-medium mb-3 text-gray-700">blockchain trading</p>
              <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                Built on blockchain technology, every transaction is transparent, immutable, and accessible to ensure trust and accountability and value to NKP holders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}