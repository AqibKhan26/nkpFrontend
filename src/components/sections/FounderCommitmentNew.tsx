import { motion } from "framer-motion";
import { Shield, Award, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function FounderCommitmentNew() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="founder-commitment" className="pt-12 pb-16 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-16">
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">200,000</h3>
                <p className="text-gray-600 text-sm">Verified Carbon Credits Committed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 border border-nkp-primary/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-nkp-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">$5M+</h3>
                <p className="text-gray-600 text-sm">Real Asset Value</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 border border-nkp-primary/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-nkp-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">2</h3>
                <p className="text-gray-600 text-sm">Major Projects</p>
              </motion.div>
            </div>

            {/* Dropdown Section */}
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 p-4 rounded-lg transition-all duration-300 flex items-center justify-between text-white"
                >
                  <span className="text-xl font-semibold">Learn More About Our Commitment</span>
                  <ChevronDown 
                    className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </motion.button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-4">
                <div className="bg-gray-900 p-8 rounded-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-lg leading-relaxed text-white"
                  >
                    <p>
                      <span className="font-bold bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent">William Schuman</span>, founder and CEO of <strong className="text-white font-bold">Midori Earth</strong> and <strong className="text-white font-bold">NKP</strong>, has committed 200,000 verified carbon credits to the platform, sourced from two major projects: Chaco Vivo and a Waste-to-Value initiative in the Dominican Republic. These credits represent both institutional and founder confidence in the protocol's operational strength and ability to generate long-term value.
                    </p>
                    
                    <p>
                      Through arms-length associations with the founder's other ventures, <strong className="text-white font-bold">Midori Earth</strong> gains unique access to a broader pipeline of high-integrity impact projects and verified carbon assets. This positions the platform far beyond typical Web3 offerings—delivering unmatched, transparent exposure to real projects, real revenues, and real environmental impact.
                    </p>

                    <p>
                      This founder-led commitment ensures that <strong className="text-white font-bold">NKP</strong> launches with substantial backing from day one, providing token holders with immediate exposure to verified environmental assets and ongoing revenue streams from operational carbon credit projects.
                    </p>
                  </motion.div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </motion.div>
      </div>
    </section>
  );
}