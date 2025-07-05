import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Shield, 
  Database, 
  Cloud, 
  Cpu, 
  Network, 
  Lock,
  FileCheck,
  Satellite,
  Code,
  ArrowRight,
  BookOpen,
  Puzzle,
  Brain
} from "lucide-react";

export default function TechnologyStack() {
  const techStack = [
    {
      category: "Data & Verification",
      icon: Database,
      items: ["CAD Trust", "IPFS", "Tableland"],
      description: "On-chain registry with decentralized metadata storage"
    },
    {
      category: "Smart Contracts",
      icon: Code,
      items: ["Ethereum", "ERC-1155", "ERC-20"],
      description: "Token infrastructure with automated trading and NFT credits"
    },
    {
      category: "AI Analytics",
      icon: Brain,
      items: ["Morphware AI", "LLaMA"],
      description: "Predictive pricing and risk analysis for carbon markets"
    },
    {
      category: "Project Monitoring",
      icon: Satellite,
      items: ["TransparenC", "WalletConnect"],
      description: "Real-time satellite tracking and governance systems"
    },
    {
      category: "Registry Engine",
      icon: Shield,
      items: ["Verra", "Gold Standard", "ISO", "Article 6"],
      description: "Multi-standard support for evolving carbon frameworks"
    },
    {
      category: "Compliance Certificates",
      icon: FileCheck,
      items: ["Zero-Knowledge Proofs", "PDF Generation"],
      description: "Automated retirement proofs with ESG reporting"
    }
  ];

  return (
    <section id="homepage-technology" className="pt-12 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative transition-all duration-1000 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.3', paddingBottom: '12px', letterSpacing: '-0.02em' }}>
            Technology Stack
          </h2>
          <p className="text-lg text-white/90 mb-8">
            NKP's technological architecture combines blockchain, AI, and traditional carbon market infrastructure into a seamless stack designed for scale, compliance, and trust.
          </p>
          <h3 className="text-2xl font-bold text-center text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Core Components
          </h3>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {techStack.map((tech, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <tech.icon className="w-8 h-8 text-nkp-primary mr-3" />
                  <h3 className="text-lg font-bold text-white">{tech.category}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="text-xs px-2 py-1 bg-nkp-primary/20 text-nkp-primary rounded-full border border-nkp-primary/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}