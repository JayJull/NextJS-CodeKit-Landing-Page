import { FileText, Calculator, Shield, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AuditTax() {
  const services = [
    {
      icon: FileText,
      title: "Bookkeeping",
      description: "End-to-end accounting, reconciliations, and robust reporting systems.",
    },
    {
      icon: Calculator,
      title: "VAT Filing & Compliance",
      description: "UAE VAT registration, returns, and expert advisory services.",
    },
    {
      icon: Shield,
      title: "Corporate Tax Filing",
      description: "Calculation, filing, and comprehensive compliance management.",
    },
    {
      icon: Globe,
      title: "Global Audit Services",
      description: "Specialized offshore audits (BVI, Cayman Islands, Seychelles, and more).",
    },
  ]

  return (
    <section id="audit-tax" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Audit & Tax Consultancy</h2>
            <p className="text-lg text-gray-600 mb-2">via RK Book Keeping & Tax Consultancy</p>
            <p className="text-xl text-[#D7B459] font-semibold mb-4">
              Regulatory Compliance, Reporting & Assurance—Globally
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team delivers precise, reliable audit and tax solutions in line with UAE and international standards,
              empowering your business to operate with confidence and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center transition-shadow duration-300 border-0 shadow-none">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D7B459]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-[#D7B459]" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#D7B459]/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Audit Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Internal and external audits
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Forensic analysis and investigation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    IFRS and UAE law adherence
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Risk assessment and mitigation
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to ensure compliance?</h4>
                <Button className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white">Get Tax & Audit Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
