import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D7B459]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D7B459]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23D7B459' fillOpacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D7B459]/20 border border-[#D7B459]/30 text-[#D7B459] text-sm font-medium mb-8 backdrop-blur-sm">
            <Globe className="w-4 h-4 mr-2" />
            Trusted by 500+ Global Enterprises
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Your Gateway to{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B459] to-[#F4E4A6]">
                Global Business
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D7B459] to-[#F4E4A6] rounded-full"></div>
            </span>{" "}
            Success
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
            Strategic Business Advisory | Audit & Tax Compliance | Investment Banking Solutions
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            A boutique consultancy headquartered in Dubai, UAE, with a truly global footprint. We specialize in guiding
            entrepreneurs, fast-growing SMEs, and large enterprises with end-to-end business advisory, tax consultancy,
            and strategic financial solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#D7B459] to-[#F4E4A6] hover:from-[#C5A347] hover:to-[#D7B459] text-slate-900 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-[#D7B459]/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#D7B459] text-[#D7B459] hover:bg-[#D7B459] hover:text-slate-900 px-10 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm hover:shadow-xl hover:shadow-[#D7B459]/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </Button>
          </div>
          
          {/* Feature cards with glassmorphism effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#D7B459]/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D7B459]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D7B459]/20 to-[#D7B459]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-[#D7B459]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-gray-400">International expertise with local market insights</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#D7B459]/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D7B459]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D7B459]/20 to-[#D7B459]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-[#D7B459]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Growth Focused</h3>
                <p className="text-gray-400">From startup to IPO - we scale with you</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#D7B459]/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D7B459]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D7B459]/20 to-[#D7B459]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-[#D7B459]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Compliance First</h3>
                <p className="text-gray-400">Regulatory expertise and risk mitigation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}