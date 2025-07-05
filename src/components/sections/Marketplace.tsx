import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function Marketplace() {
  return (
    <section id="marketplace" className="pt-12 pb-16 bg-gradient-to-br from-nkp-primary/5 via-white to-nkp-secondary/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent"
            style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.3', paddingBottom: '12px' }}
          >
            Explore the NKP Marketplace
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Buy tokenized, fractionalized carbon credits from verified real-world projects or invest in&nbsp;carbon 
            credit futures from upcoming initiatives. Transparent, accessible, and&nbsp;built&nbsp;for&nbsp;real&nbsp;impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-nkp-primary to-nkp-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Trading?</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Access verified carbon credits from our portfolio of real-world environmental projects.
              </p>
            </div>
            
            <a href="/marketplace">
              <Button 
                className="w-full bg-gradient-to-r from-nkp-primary to-nkp-secondary hover:from-nkp-primary/90 hover:to-nkp-secondary/90 text-white font-bold py-4 px-8 text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enter Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}