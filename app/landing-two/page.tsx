"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Header } from "@/components/landing-two/header";
import { HeroSection } from "@/components/landing-two/hero-section";
import { ServicesOverview } from "@/components/landing-two/services-overview";
import { CompanyFormation } from "@/components/landing-two/company-formation";
import { AuditTax } from "@/components/landing-two/audit-tax";
import { InvestmentBanking } from "@/components/landing-two/investment-banking";
import { CapitalMarkets } from "@/components/landing-two/capital-markets";
import { WhyChooseUs } from "@/components/landing-two/why-choose-us";
import { ContactSection } from "@/components/landing-two/contact-section";
import { Footer } from "@/components/landing-two/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-gray-200/20">
        <Header />
      </div>

      <main>
        <div className="pt-16">
          <motion.section
            id="hero"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <HeroSection />
          </motion.section>

          <motion.section
            id="services"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ServicesOverview />
          </motion.section>

          <motion.section
            id="company-formation"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <CompanyFormation />
          </motion.section>

          <motion.section
            id="audit-tax"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <AuditTax />
          </motion.section>

          <motion.section
            id="investment-banking"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <InvestmentBanking />
          </motion.section>

          <motion.section
            id="capital-markets"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <CapitalMarkets />
          </motion.section>

          <motion.section
            id="why-choose-us"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <WhyChooseUs />
          </motion.section>

          {/* Custom Cards Section with Fade Left/Right Animation */}
          <motion.section 
            id="core-strengths"
            className="py-16 bg-gray-50"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Core Strengths
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Delivering excellence across multiple financial services with proven expertise
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Briefcase,
                    title: "Business Excellence",
                    description: "Strategic consulting and business development solutions tailored for your growth.",
                    color: "#D7B459"
                  },
                  {
                    icon: Shield,
                    title: "Risk Management",
                    description: "Comprehensive risk assessment and mitigation strategies for sustainable business operations.",
                    color: "#D7B459"
                  },
                  {
                    icon: Users,
                    title: "Client Partnership",
                    description: "Building long-term relationships through trust, transparency, and exceptional service delivery.",
                    color: "#D7B459"
                  },
                  {
                    icon: TrendingUp,
                    title: "Market Leadership",
                    description: "Industry-leading insights and innovative solutions that drive competitive advantage.",
                    color: "#D7B459"
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance",
                    description: "Rigorous quality control processes ensuring accuracy and compliance in all deliverables.",
                    color: "#D7B459"
                  },
                  {
                    icon: Star,
                    title: "Premium Service",
                    description: "White-glove service approach with dedicated support throughout your business journey.",
                    color: "#D7B459"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow duration-300"
                    initial={{ 
                      opacity: 0, 
                      x: index % 2 === 0 ? -60 : 60 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                         style={{ backgroundColor: `${feature.color}15` }}>
                      <feature.icon 
                        className="h-7 w-7" 
                        style={{ color: feature.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ContactSection />
          </motion.section>

          <Footer />
        </div>
      </main>
    </div>
  );
}