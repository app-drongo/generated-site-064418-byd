// Enhanced by AI on 2025-08-07T21:26:38.399Z
// Section: contact
// Category: contact

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  FileText,
  Shield,
  ArrowRight,
  Briefcase
} from "lucide-react"
import Link from "next/link"

export default function Services() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const services = [
    {
      icon: BarChart,
      title: "Financial Analysis",
      description: "Comprehensive analysis of your financial statements to identify strengths, weaknesses, and opportunities for growth.",
      features: ["Ratio Analysis", "Cash Flow Assessment", "Profitability Review"]
    },
    {
      icon: TrendingUp,
      title: "Investment Strategy",
      description: "Personalized investment strategies tailored to your risk tolerance, financial goals, and market conditions.",
      features: ["Portfolio Optimization", "Risk Assessment", "Return Maximization"]
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Strategic budget development to optimize resource allocation and achieve your financial objectives.",
      features: ["Expense Tracking", "Revenue Forecasting", "Cash Management"]
    }
  ]

  const specialties = [
    {
      area: "Small Business",
      description: "Tailored financial solutions for startups and small businesses",
      expertise: "Growth Strategy"
    },
    {
      area: "Corporate Finance",
      description: "Strategic financial planning for established corporations",
      expertise: "Capital Structure"
    },
    {
      area: "Personal Finance",
      description: "Individual wealth management and retirement planning",
      expertise: "Wealth Building"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Expert Financial
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Consulting Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlock your financial potential with customized consulting solutions designed to 
            maximize growth and ensure long-term stability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Services Overview */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Briefcase className="size-6 text-primary" />
                Core Services
              </CardTitle>
              <CardDescription>
                Comprehensive financial consulting tailored to your specific needs and goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="p-5 border border-border/50 rounded-lg hover:border-primary/20 transition-colors group">
                      <div className="flex items-start gap-4">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="size-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, i) => (
                              <Badge key={i} variant="secondary" className="font-normal">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                <Button className="w-full text-base py-6 group" asChild>
                  <Link href="/contact">
                    Request a Consultation
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Why Choose Me */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Shield className="size-5 text-primary" />
                Why Choose My Services
              </h3>
              <div className="grid gap-4">
                <Card className="border-border/50 hover:border-primary/20 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FileText className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Personalized Approach</h4>
                        <p className="text-sm text-muted-foreground">Every client receives a customized financial strategy tailored to their unique situation and goals.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 hover:border-primary/20 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <PieChart className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Data-Driven Insights</h4>
                        <p className="text-sm text-muted-foreground">All recommendations are backed by thorough analysis and industry best practices.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 hover:border-primary/20 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <TrendingUp className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Proven Results</h4>
                        <p className="text-sm text-muted-foreground">Track record of helping clients achieve significant financial growth and stability.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="size-5 text-primary" />
                Areas of Expertise
              </h3>
              <div className="space-y-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{specialty.area}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{specialty.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {specialty.expertise}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-border/50 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <DollarSign className="size-5 text-primary" />
                  Ready to Transform Your Finances?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take the first step toward financial clarity and growth with a personalized consultation.
                </p>
                <Button className="w-full group" asChild>
                  <Link href="/contact">
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}