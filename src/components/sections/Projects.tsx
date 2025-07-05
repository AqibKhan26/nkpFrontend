import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Factory, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="flex items-center mb-1">
            <Clock className="h-5 w-5 text-nkp-primary mr-2" />
            <p className="professional-text font-semibold text-lg">Next Auction Payout</p>
          </div>
          <p className="professional-text-muted text-sm">October 1, 2025 - <strong>NKP</strong> Distribution</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white rounded-lg p-2 border border-slate-200">
          <div className="text-nkp-primary font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{timeLeft.days}</div>
          <div className="text-xs professional-text-muted">Days</div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-slate-200">
          <div className="text-nkp-primary font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{timeLeft.hours}</div>
          <div className="text-xs professional-text-muted">Hours</div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-slate-200">
          <div className="text-nkp-primary font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{timeLeft.minutes}</div>
          <div className="text-xs professional-text-muted">Min</div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-slate-200">
          <div className="text-nkp-primary font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{timeLeft.seconds}</div>
          <div className="text-xs professional-text-muted">Sec</div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="professional-section pt-12 pb-16 bg-gradient-to-br from-white via-slate-50 to-white relative">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent"
            style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.3', paddingBottom: '12px', letterSpacing: '-0.02em' }}
          >
            Our Projects
          </h2>
          <h3 className="text-xl md:text-2xl professional-text-muted mb-6 font-medium">
            Buy Carbon Credit NFTs from Our Portfolio
          </h3>
          <p className="professional-text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of verified environmental projects creating real-world impact 
            through innovative carbon credit solutions and regenerative technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Chaco Vivo Project */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="professional-card h-full overflow-hidden group hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Active Status Badge */}
                <div className="absolute top-4 right-4 flex items-center bg-green-100 rounded-full px-3 py-1 z-10">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-700 text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Active</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-nkp-primary/10 rounded-xl mr-4">
                    <Leaf className="h-10 w-10 text-nkp-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-nkp-primary to-nkp-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>Chaco Vivo</h3>
                    <p className="text-nkp-primary font-medium">Forest Conservation & Regeneration</p>
                  </div>
                </div>
                
                <p className="text-black mb-6 flex-grow leading-relaxed">
                  A groundbreaking conservation initiative protecting and regenerating the vital Chaco 
                  ecosystem in Paraguay. Through innovative blockchain technology, we're creating verifiable 
                  carbon credits while preserving one of South America's most important biodiversity hotspots.
                </p>

                {/* Countdown Timer */}
                <CountdownTimer />

                {/* Carbon Credits Progress */}
                <div className="mb-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="professional-text font-semibold text-lg">Carbon Credits Unlocked</p>
                        <p className="professional-text-muted text-sm">
                          100,000 of 30,260,000 credits
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-nkp-primary font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          $2,500,000
                        </p>
                        <p className="professional-text-muted text-sm">$25/credit</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-nkp-primary to-nkp-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "0.33%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 text-xs professional-text-muted">
                      <span>0%</span>
                      <span className="text-nkp-primary font-medium">0.33% unlocked</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <Button className="w-full bg-gradient-to-r from-nkp-primary to-nkp-secondary hover:from-nkp-primary/90 hover:to-nkp-secondary/90 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-nkp-primary/30 transform hover:scale-105 py-4 px-6">
                    Purchase Carbon Credits
                  </Button>
                  <Link href="/projects/chaco-vivo">
                    <Button className="w-full bg-nkp-primary hover:bg-nkp-primary/90 text-white transition-all duration-300 py-3 px-6">
                      Explore Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Landfill Methane Capture Project */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="professional-card h-full overflow-hidden group hover:shadow-lg transition-all duration-300 relative opacity-60 grayscale">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Under Verification Status Badge */}
                <div className="absolute top-4 right-4 flex items-center bg-yellow-100 rounded-full px-3 py-1 z-10">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-yellow-700 text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Under Verification</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-nkp-secondary/10 rounded-xl mr-4">
                    <Factory className="h-10 w-10 text-nkp-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold professional-text" style={{ fontFamily: 'Montserrat, sans-serif' }}>Landfill Methane Capture</h3>
                    <p className="text-nkp-secondary font-medium">Waste-to-Energy Innovation</p>
                  </div>
                </div>
                
                <p className="text-black mb-8 flex-grow leading-relaxed">
                  One of the most impactful infrastructure projects in the Caribbean, solving decades-old 
                  environmental crisis by processing 550 tons of waste daily. Prevents 730,000 tCO₂e 
                  emissions annually while creating 150+ formal jobs and closing legacy dumpsites.
                </p>

                {/* Verification Progress */}
                <div className="mb-6">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="professional-text font-semibold text-lg">Project Verification</p>
                        <p className="professional-text-muted text-sm">
                          Carbon credit validation in progress
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-nkp-secondary font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Verifying
                        </p>
                        <p className="professional-text-muted text-sm">Stage 3/4</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-nkp-secondary to-amber-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 text-xs professional-text-muted">
                      <span>0%</span>
                      <span className="text-nkp-secondary font-medium">75% complete</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                {/* Carbon Credits Progress */}
                <div className="mb-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="professional-text font-semibold text-lg">Carbon Credits Unlocked</p>
                        <p className="professional-text-muted text-sm">
                          100,000 of 7,500,000 credits
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-nkp-secondary font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          $3,500,000
                        </p>
                        <p className="professional-text-muted text-sm">$35/credit</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-nkp-secondary to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "1.33%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 text-xs professional-text-muted">
                      <span>0%</span>
                      <span className="text-nkp-secondary font-medium">0.067% unlocked</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <Button 
                    disabled 
                    className="w-full bg-gray-400 text-gray-600 font-bold py-4 px-6 cursor-not-allowed opacity-50 relative"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Purchase Carbon Credits
                    </span>
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Verifying
                    </span>
                  </Button>
                  <Link href="/projects/landfill">
                    <Button className="w-full bg-nkp-secondary hover:bg-nkp-secondary/90 text-white transition-all duration-300 py-3 px-6">
                      Explore Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>


      </div>
    </section>
  );
}