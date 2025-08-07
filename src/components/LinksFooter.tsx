// Enhanced by AI on 2025-08-07T21:27:05.086Z
// Section: footer
// Category: footer

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  BarChart,
  TrendingUp,
  DollarSign
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Financial Analysis", href: "#services" },
        { name: "Investment Strategy", href: "#services" },
        { name: "Retirement Planning", href: "#services" },
        { name: "Tax Optimization", href: "#services" },
        { name: "Business Consulting", href: "#services" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "My Approach", href: "#about" },
        { name: "Experience", href: "#about" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Credentials", href: "#about" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Financial Guides", href: "#resources" },
        { name: "Market Insights", href: "#resources" },
        { name: "FAQ", href: "#faq" },
        { name: "Financial Calculators", href: "#resources" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Regulatory Information", href: "/regulatory" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">FC</span>
                </div>
                <span className="font-bold text-xl">FinancePro Consulting</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Providing expert financial guidance to help you achieve your financial goals. 
                With over 15 years of experience in financial analysis and strategic planning, 
                I deliver personalized solutions for individuals and businesses.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@financeproconsulting.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-4321</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Financial District, Suite 500</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Financial Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Subscribe for monthly financial tips, market updates, and exclusive insights.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 FinancePro Consulting. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Certified Financial Advisor <Heart className="size-3 text-red-500 fill-current" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/disclaimer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Financial Disclaimer
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}