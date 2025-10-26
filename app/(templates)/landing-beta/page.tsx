"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { Testimonial } from "@/components/testimonial"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function LandingBetaPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setSubscribed(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Subscription failed:", error)
    }
  }

  return (
    <div data-theme="beta" className="min-h-screen">
      <Header
        logo="Beta"
        links={[
          { href: "#benefits", label: "Benefits" },
          { href: "#use-cases", label: "Use Cases" },
          { href: "#testimonials", label: "Testimonials" },
        ]}
      />

      <main className="pt-24">
        {/* Hero Section */}
        <Section className="pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">Introducing Beta</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-[1.1]">
              Design That Speaks for Itself
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
              A minimal approach to web design that prioritizes content, readability, and user experience above all
              else.
            </p>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section id="benefits" className="py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Minimal Design</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Less is more. Focus on what matters most to your users.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-border flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">01</div>
                </div>
                <h3 className="text-2xl font-bold">Clarity First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Remove distractions and let your content shine. Every element serves a purpose.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-border flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">02</div>
                </div>
                <h3 className="text-2xl font-bold">Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lightweight design means faster load times and better user experience across all devices.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-border flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">03</div>
                </div>
                <h3 className="text-2xl font-bold">Timeless</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Minimal design never goes out of style. Build something that lasts.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Use Cases Section */}
        <Section id="use-cases" subdued className="py-32">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect For</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Versatile design that adapts to your needs
              </p>
            </div>

            {/* Use Case 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Publishing</Badge>
                <h3 className="text-3xl font-bold mb-4">Editorial Content</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ideal for blogs, magazines, and content-focused websites. Typography and readability take center
                  stage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Optimized reading experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Beautiful typography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Distraction-free layout</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-square rounded-2xl bg-muted/50 border border-border" />
            </div>

            {/* Use Case 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-2xl bg-muted/50 border border-border md:order-first" />
              <div>
                <Badge className="mb-4">Business</Badge>
                <h3 className="text-3xl font-bold mb-4">Professional Services</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Perfect for agencies, consultants, and service providers who want to project professionalism and
                  trust.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clean, professional aesthetic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Focus on credibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Easy to navigate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Products</Badge>
                <h3 className="text-3xl font-bold mb-4">SaaS & Startups</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Launch your product with a design that communicates value clearly and converts visitors into
                  customers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clear value proposition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conversion optimized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Modern and trustworthy</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-square rounded-2xl bg-muted/50 border border-border" />
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials" className="py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What People Say</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Trusted by designers and developers</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Testimonial
                quote="The minimal design approach helped us focus on our content. Our engagement metrics improved significantly."
                author="Sarah Chen"
                role="Content Director"
              />
              <Testimonial
                quote="Clean, professional, and exactly what we needed. The editorial style perfectly matches our brand."
                author="Michael Torres"
                role="Founder, Design Co"
              />
              <Testimonial
                quote="Finally, a template that doesn't get in the way. Our users love the simplicity and clarity."
                author="Emma Wilson"
                role="Product Manager"
              />
              <Testimonial
                quote="The attention to typography and spacing is exceptional. This is how web design should be."
                author="David Park"
                role="Creative Director"
              />
            </div>
          </div>
        </Section>

        {/* Newsletter Section */}
        <Section subdued className="py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Get design insights and updates delivered to your inbox
            </p>

            {subscribed ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <p className="font-medium">Thanks for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Section>

        {/* CTA Footer */}
        <Section className="py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Experience the power of minimal design for your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-muted transition-colors text-lg"
              >
                View Examples
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
