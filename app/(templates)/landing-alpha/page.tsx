import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { Check } from "lucide-react"

export const metadata = {
  title: "Landing Alpha - Neon Glass Design",
  description: "Build the future of the web with our futuristic neon glass design template",
  openGraph: {
    title: "Landing Alpha - Neon Glass Design",
    description: "Build the future of the web with our futuristic neon glass design template",
    images: ["/og-alpha.png"],
  },
}

export default function LandingAlphaPage() {
  const features = [
    { icon: 'Zap', title: 'Lightning Fast', description: 'Optimized performance with edge computing and instant page loads' },
    { icon: 'Shield', title: 'Secure by Default', description: 'Enterprise-grade security with automatic SSL and DDoS protection' },
    { icon: 'Rocket', title: 'Deploy Instantly', description: 'Push to production in seconds with zero configuration required' },
    { icon: 'Globe', title: 'Global CDN', description: 'Content delivered from the edge, closest to your users worldwide' },
    { icon: 'Code', title: 'Developer First', description: 'Built for modern workflows with Git integration and preview URLs' },
    { icon: 'Sparkles', title: 'AI Powered', description: 'Intelligent optimization and automatic performance enhancements' },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for personal projects",
      features: ["100GB bandwidth", "Unlimited sites", "SSL certificates", "Community support"],
    },
    {
      name: "Pro",
      price: "$20",
      description: "For professional developers",
      features: ["1TB bandwidth", "Advanced analytics", "Priority support", "Custom domains"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited bandwidth", "Dedicated support", "SLA guarantee", "Custom contracts"],
    },
  ]

  const faqs = [
    {
      question: "How does deployment work?",
      answer: "Connect your Git repository and we automatically deploy on every push to your main branch.",
    },
    {
      question: "What frameworks are supported?",
      answer: "We support Next.js, React, Vue, Svelte, and many other modern web frameworks.",
    },
    {
      question: "Can I use my own domain?",
      answer: "Yes, custom domains are supported on all plans with automatic SSL certificates.",
    },
    {
      question: "Is there a free tier?",
      answer: "Yes, our Starter plan is free forever with generous limits for personal projects.",
    },
    {
      question: "How is billing calculated?",
      answer: "Billing is based on bandwidth usage and additional features. No hidden fees.",
    },
    {
      question: "What about support?",
      answer: "Community support is available for all users, with priority support for Pro and Enterprise.",
    },
  ]

  return (
    <div data-theme="alpha" className="min-h-screen">
      <Header
        logo="Alpha"
        links={[
          { href: "#features", label: "Features" },
          { href: "#pricing", label: "Pricing" },
          { href: "#faq", label: "FAQ" },
        ]}
      />

      <main className="pt-24">
        {/* Hero Section */}
        <Section className="pt-12">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Hero
                title="Build the Future of the Web"
                subtitle="Deploy your applications instantly with zero configuration. Experience the next generation of web development."
                cta={{
                  primary: { label: "Get Started Free", href: "#" },
                  secondary: { label: "View Documentation", href: "#" },
                }}
              />
            </div>
          </div>
        </Section>

        {/* Features Section */}
        <Section id="features" className="pt-20">
          <div className="text-center mb-12">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful features designed for modern web development workflows
            </p>
          </div>
          <FeatureGrid features={features} />
        </Section>

        {/* Problem/Solution Section */}
        <Section subdued>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 mt-4">The Challenge</Badge>
              <h2 className="text-3xl font-bold mb-4">Traditional Hosting is Broken</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Complex configurations, slow deployments, and unpredictable scaling make traditional hosting a
                bottleneck for modern teams.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No more server management or DevOps overhead</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Automatic scaling without configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Deploy in seconds, not hours</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 glow">
              <Badge className="mb-2">The Solution</Badge>
              <h3 className="text-2xl font-bold mb-4">Deploy with Confidence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our platform handles all the complexity so you can focus on building great products. Push your code and
                we take care of the rest.
              </p>
            </div>
          </div>
        </Section>

        {/* Social Proof */}
        <Section>
          <div className="text-center mb-8">
            <Badge className="mt-2 mb-2">Trusted By</Badge>
            <h2 className="text-2xl font-bold mb-4">Used by Leading Teams</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company) => (
              <div key={company} className="text-2xl font-bold">
                {company}
              </div>
            ))}
          </div>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" subdued>
          <div className="text-center mb-8">
            <Badge className="mt-2 mb-2">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl border ${
                  tier.featured
                    ? "border-primary bg-card glass glow scale-105"
                    : "border-border bg-card hover:border-primary/50"
                } transition-all`}
              >
                {tier.featured && (
                  <Badge className="mb-4" variant="default">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <div className="text-center mb-12">
            <Badge className="mt-8 mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Footer */}
        <Section subdued>
          <div className="text-center max-w-3xl mx-auto glass rounded-2xl p-12 glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join thousands of developers building the future of the web
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Start Building Free
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
