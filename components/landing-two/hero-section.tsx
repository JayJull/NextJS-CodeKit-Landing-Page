import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Business background"
          className="w-full h-full object-cover"
        />
        {/* Overlay supaya teks tetap jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#D7B459]/20 text-[#D7B459] text-sm font-medium mb-10 border border-[#D7B459]/30 backdrop-blur-sm">
            <Globe className="w-4 h-4 mr-2" />
            Trusted by 500+ Global Enterprises
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your Gateway to{" "}
            <span className="relative inline-block">
              <span className="text-[#D7B459]">Global Business</span>
              <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#D7B459]/40 rounded-full"></span>
            </span>{" "}
            Success
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
            Strategic Business Advisory | Audit & Tax Compliance | Investment Banking Solutions
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A boutique consultancy headquartered in Dubai, UAE, with a truly global footprint. We specialize in guiding
            entrepreneurs, fast-growing SMEs, and large enterprises with end-to-end business advisory, tax consultancy,
            and strategic financial solutions.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <Button
              size="lg"
              className="group bg-[#D7B459] hover:bg-[#C5A347] text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#D7B459] text-[#D7B459] hover:bg-[#D7B459] hover:text-black px-10 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D7B459]/20 rounded-xl flex items-center justify-center">
                <Globe className="h-8 w-8 text-[#D7B459]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-gray-200">International expertise with local market insights</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D7B459]/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-[#D7B459]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Focused</h3>
              <p className="text-gray-200">From startup to IPO - we scale with you</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D7B459]/20 rounded-xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-[#D7B459]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance First</h3>
              <p className="text-gray-200">Regulatory expertise and risk mitigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
