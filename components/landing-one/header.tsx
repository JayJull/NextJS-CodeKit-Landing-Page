"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Company Formation", href: "#company-formation" },
    { name: "Audit & Tax", href: "#audit-tax" },
    { name: "Investment Banking", href: "#investment-banking" },
    { name: "Capital Markets", href: "#capital-markets" },
    { name: "About", href: "#why-choose-us" },
  ];

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="MS Global Services"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-xs font-medium transition-all duration-200 hover:text-[#D7B459] relative py-2 ${
                    activeSection === item.href
                      ? "text-[#D7B459]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D7B459] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center">
            <div className="hidden lg:flex">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#D7B459] hover:bg-[#C4A347] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="lg:hidden flex-shrink-0"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] px-4">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>

                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left text-base font-medium transition-colors hover:text-[#D7B459] py-2 ${
                        activeSection === item.href
                          ? "text-[#D7B459] border-l-2 border-[#D7B459] pl-3"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  
                  <div className="pt-6 border-t border-gray-200">
                    <Button
                      onClick={() => scrollToSection("#contact")}
                      className="w-full bg-[#D7B459] hover:bg-[#C4A347] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}