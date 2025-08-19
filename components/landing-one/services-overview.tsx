import { Building2, Calculator, TrendingUp, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesOverview() {
  const services = [
    {
      icon: Building2,
      title: "Company Formation & Strategic Business Setup",
      description:
        "Seamless business incorporation in UAE mainland and freezones with comprehensive strategic planning.",
      features: ["Business Incorporation", "Strategic Planning", "Regulatory Approvals", "Market Entry Strategy"],
    },
    {
      icon: Calculator,
      title: "Audit & Tax Consultancy",
      description:
        "Precise audit and tax solutions in line with UAE and international standards for complete compliance.",
      features: ["VAT Filing & Compliance", "Corporate Tax Filing", "Audit Services", "Global Audit Solutions"],
    },
    {
      icon: TrendingUp,
      title: "Investment Banking & Financial Advisory",
      description: "Strategic capital solutions and market insights to unlock value for corporates and startups.",
      features: ["Venture Capital & PE", "Business Financing", "Banking Consultancy", "Risk Management"],
    },
    {
      icon: BarChart3,
      title: "Capital Markets Consultancy",
      description: "Seamless access to Indian and international stock markets for listing and capital-raising.",
      features: ["IPO Planning", "QIP & QIB Services", "Preferential Placement", "Merchant Banking"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Business Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ideation to IPO—and everything in between. Our end-to-end services empower your business at every stage
            of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-[#D7B459]/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[#D7B459]" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
