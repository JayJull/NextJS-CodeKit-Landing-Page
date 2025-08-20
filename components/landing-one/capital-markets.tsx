import { BarChart3, TrendingUp, FileText, Users, Mail, Linkedin, Youtube } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CapitalMarkets() {
  const services = [
    {
      icon: BarChart3,
      title: "IPO Planning & Regulatory Advisory",
      description: "Comprehensive IPO preparation and regulatory compliance guidance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: TrendingUp,
      title: "Qualified Institutional Placement (QIP) & QIB Services", 
      description: "Expert structuring and execution of institutional placement programs.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: FileText,
      title: "Preferential Placement Structuring",
      description: "Strategic preferential allotment planning and execution.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Users,
      title: "Merchant Banking Coordination for Indian Listings",
      description: "End-to-end merchant banking services for Indian market listings.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center"
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Indian & Global Capital Markets Consultancy
            </h2>
            <p className="text-xl text-[#D7B459] font-semibold mb-4">
              Tap Into Institutional Investment & Public Markets
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of specialists provides seamless access to Indian and international stock markets, helping you
              achieve your listing and capital-raising ambitions.
            </p>
          </div>

          {/* Services Cards - 4 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-[#D7B459]" />
                    </div>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-gray-900 leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
                  <div className="pt-2">
                    <button className="text-[#D7B459] text-sm font-medium hover:text-[#D7B459]/80 transition-colors flex items-center">
                      DISCOVER MORE
                      <span className="ml-2 w-4 h-4 bg-[#D7B459] rounded-full flex items-center justify-center text-white text-xs">→</span>
                    </button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Grid - Content */}
              <div>
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-1">Stay <span className="text-[#D7B459] font-semibold">up to date</span> with our</p>
                  <p className="text-gray-600">latest news & insights</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#D7B459] rounded-full flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-[#D7B459] rounded-full flex items-center justify-center">
                      <Youtube className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              

              {/* Right Grid - Newsletter Signup */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Public Markets?</h3>
                <p className="text-gray-600 mb-6">
                  From pre-IPO planning to post-listing compliance, we guide you through every step of your capital
                  markets journey.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Regulatory compliance and documentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Investor roadshows and presentations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Post-listing support and compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}