import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function CompanyFormation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    "Business Incorporation: Seamless setup in UAE mainland and freezones",
    "Strategic Planning: Vision setting, market entry, and growth blueprints",
    "Compliance & Tax Planning: VAT strategies, tax optimization, and regulatory reporting",
    "Regulatory Approvals: Licensing, permits, and government liaison",
    "Financial Planning & Budgeting: Dynamic business models and capital stewardship",
    "Operational Governance: Robust organizational structure and compliance frameworks",
    "IT & Digital Advisory: Next-gen systems integration and digital transformation",
    "Market Research & Entry Strategy: Feasibility studies and global target market analysis",
  ]

  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Dubai Business Hub",
      description: "Strategic location connecting East and West markets"
    },
    {
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Infrastructure",
      description: "World-class facilities and cutting-edge technology"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Business Excellence",
      description: "Premium office spaces and professional environment"
    },
    {
      image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Innovation Gateway",
      description: "Access to emerging markets and investment opportunities"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="company-formation" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Formation & Strategic Business Setup
            </h2>
            <p className="text-xl text-[#D7B459] font-semibold mb-4">
              Empowering Visionaries to Launch, Scale, and Succeed
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to expand across borders or establish a solid foothold in the UAE? We provide 360° guidance for
              every stage of your business journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Services:</h3>
              <div className="space-y-4 flex-1">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start group hover:bg-white/50 p-3 rounded-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#D7B459] mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-700 group-hover:text-gray-900">{service}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-[#D7B459] hover:bg-[#D7B459]/90 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-80 rounded-full">
                Start Your Business Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative h-full">
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 h-full">
                <div className="relative flex-1 overflow-hidden" style={{ height: 'calc(100% - 60px)' }}>
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselItems.map((item, index) => (
                      <div key={index} className="min-w-full h-full relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{carouselItems[currentSlide].title}</h3>
                    <p className="text-gray-200 text-sm">{carouselItems[currentSlide].description}</p>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-center space-x-2">
                    {carouselItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index 
                            ? 'bg-[#D7B459] scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#D7B459]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#D7B459]/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}