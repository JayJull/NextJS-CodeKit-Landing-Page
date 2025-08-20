import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex">
      {/* Left Content - White Background */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 md:px-12 py-16">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Your Gateway to{" "}
            <span className="text-[#D7B459]">Global Business</span> Success
          </h1>
          
          {/* Mobile Video - Only visible on small screens */}
          <div className="lg:hidden mb-8">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            >
              <source src="/footage.mp4" type="video/mp4" />
            </video>
          </div>
          
          <p className="font-normal text-gray-900 mb-8 leading-tight">
            Strategic Business Advisory | Audit & Tax Compliance | Investment
            Banking Solutions
          </p>

          <Button
            size="lg"
            className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white px-8 py-3 rounded-full"
          >
            Request a call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

        </div>
      </div>

      {/* Desktop Video - Only visible on large screens */}
      <div className="hidden lg:flex w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full min-h-screen object-cover rounded-l-full"
        >
          <source src="/footage.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}