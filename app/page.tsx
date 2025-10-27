import Link from "next/link"
import { ArrowRight, Sparkles, FileText, Briefcase } from "lucide-react"
import ThemeToggle from "@/components/toggleButton"
export default function HomePage() {
  const templates = [
    {
      id: "landing-alpha",
      title: "Landing Alpha",
      subtitle: "Neon / Glass",
      description: "Futuristic landing page with glassmorphism effects and neon accents",
      href: "/landing-alpha",
      color: "from-violet-500/20 to-purple-500/20",
      icon: Sparkles,
    },
    {
      id: "landing-beta",
      title: "Landing Beta",
      subtitle: "Minimal / Editorial",
      description: "Clean editorial design with generous whitespace and typography focus",
      href: "/landing-beta",
      color: "from-cyan-500/20 to-blue-500/20",
      icon: FileText,
    },
    {
      id: "portfolio-gamma",
      title: "Portfolio Gamma",
      subtitle: "Projects Grid",
      description: "Modern portfolio layout with masonry grid and project showcase",
      href: "/portfolio-gamma",
      color: "from-green-500/20 to-emerald-500/20",
      icon: Briefcase,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Templates
          </Link>
          
          <ThemeToggle />
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Next.js Templates</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Professional, production-ready templates for your next project. Three distinct styles, all built with
              Next.js 14 and Tailwind CSS.
            </p>
          </div>

          {/* Template Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {templates.map((template) => (
              <Link key={template.id} href={template.href} className="group relative">
                <div className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <template.icon className="w-12 h-12 text-primary mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{template.title}</h2>
                    <p className="text-sm text-primary mb-3">{template.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{template.description}</p>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <span className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center group-hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        Open Preview
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Built for Production</h2>
            <p className="text-muted-foreground leading-relaxed">
              Each template is fully responsive, accessible, and optimized for performance. Dark mode included,
              SEO-ready, and easy to customize.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with Next.js 14 and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
