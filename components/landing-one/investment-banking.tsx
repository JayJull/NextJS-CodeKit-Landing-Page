import {
  TrendingUp,
  DollarSign,
  Building,
  Users,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export function InvestmentBanking() {
  const [activeAccordion, setActiveAccordion] = useState("banking");

  const services = [
    {
      icon: TrendingUp,
      title: "Venture Capital & Private Equity",
      description:
        "Full-spectrum support for funding rounds, strategic alliances, and public listings.",
      features: [
        "Series A-C funding rounds",
        "Strategic partnerships",
        "Exit planning",
        "Investor relations",
      ],
    },
    {
      icon: DollarSign,
      title: "Mortgage & Business Financing",
      description:
        "Smart loan structuring for both individuals and large enterprises.",
      features: [
        "Business loans",
        "Asset financing",
        "Working capital",
        "Trade finance",
      ],
    },
    {
      icon: Building,
      title: "Banking Consultancy",
      description:
        "Prime global banking connections and actionable financial strategies.",
      features: [
        "Banking relationships",
        "Account opening",
        "Treasury management",
        "Cash flow optimization",
      ],
    },
    {
      icon: Users,
      title: "Risk Management & Due Diligence",
      description:
        "Rigorous vetting and risk mitigation—transparency at every stage.",
      features: [
        "Financial due diligence",
        "Risk assessment",
        "Compliance review",
        "Transaction advisory",
      ],
    },
  ];

  const industries = [
    {
      value: "banking",
      title: "Banking",
      description:
        "We assist commercial, retail and investment banks with regulatory, strategy, compliance, AML and risk management support.",
    },
    {
      value: "fund-management",
      title: "Fund & Asset Management",
      description:
        "Comprehensive solutions for fund managers and asset management companies.",
    },
    {
      value: "capital-markets",
      title: "Capital Markets",
      description:
        "Strategic advisory for capital markets operations and trading activities.",
    },
    {
      value: "fintechs",
      title: "Fintechs",
      description:
        "Specialized support for financial technology companies and digital innovation.",
    },
    {
      value: "crypto",
      title: "Crypto & Digital Assets",
      description:
        "Expert guidance in cryptocurrency and blockchain-based financial services.",
    },
    {
      value: "government",
      title: "Government and Sovereign Wealth Funds",
      description:
        "Advisory services for government entities and sovereign investment funds.",
    },
    {
      value: "family-offices",
      title: "Family Offices",
      description:
        "Tailored wealth management and investment strategies for ultra-high-net-worth families.",
    },
  ];

  return (
    <section id="investment-banking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://plus.unsplash.com/premium_photo-1694475089773-2ddc8068dc3e?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dubai city skyline"
                  className="w-full h-[600px] object-cover grayscale"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <p className="text-gray-700 text-lg mb-2">
                  We specialise in supporting organisations across
                </p>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-gray-900">multiple</span>{" "}
                  <span className="text-orange-600">industries</span>
                </h2>
              </div>

              {/* Industries Accordion */}
              <div className="space-y-3">
                {industries.map((industry) => (
                  <div
                    key={industry.value}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      className="w-full text-left py-4 px-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === industry.value
                            ? ""
                            : industry.value
                        )
                      }
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {industry.title}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            activeAccordion === industry.value
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeAccordion === industry.value
                          ? "max-h-32 pb-4"
                          : "max-h-0"
                      }`}
                    >
                      <div className="px-6">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Investment Banking Services Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Investment Banking & Financial Advisory
              </h2>
              <p className="text-xl text-[#D7B459] font-semibold mb-4">
                Funding, Structuring & Scaling: Capital That Powers Growth
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We unlock value for corporates and high-growth startups through
                strategic capital strategies and deep market insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-[#D7B459]/50 hover:shadow-md transition-all duration-200"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[#D7B459]" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-[#D7B459] rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-[#D7B459]/10 to-[#D7B459]/5 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Scale Your Business?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Whether you're seeking venture capital, planning an IPO, or
                  need strategic financial advisory, our investment banking team
                  has the expertise and network to make it happen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Discuss Funding Options
                  </button>
                  <button className="border-2 border-[#D7B459] text-[#D7B459] hover:bg-[#D7B459] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Schedule Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
