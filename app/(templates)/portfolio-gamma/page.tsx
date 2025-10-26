"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import DebugTheme from "@/components/debug-theme"
import { ExternalLink, Mail, CheckCircle2 } from "lucide-react"

export default function PortfolioGammaPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with payment integration",
      image: "/ecommerce-platform-interface.png",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and reporting",
      image: "/analytics-dashboard-charts.png",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial management application",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "TypeScript", "Firebase"],
      link: "#",
    },
    {
      title: "Content Management System",
      description: "Headless CMS with custom workflows",
      image: "/cms-interface.jpg",
      tags: ["Next.js", "Sanity", "Tailwind"],
      link: "#",
    },
    {
      title: "Social Media Platform",
      description: "Community-driven content sharing network",
      image: "/social-media-feed.jpg",
      tags: ["Next.js", "Supabase", "Redis"],
      link: "#",
    },
    {
      title: "AI Writing Assistant",
      description: "GPT-powered content generation tool",
      image: "/ai-writing-interface.jpg",
      tags: ["Next.js", "OpenAI", "Vercel AI"],
      link: "#",
    },
    {
      title: "Project Management Tool",
      description: "Collaborative workspace for teams",
      image: "/project-management-kanban.png",
      tags: ["React", "GraphQL", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Video Streaming Service",
      description: "On-demand video platform with live streaming",
      image: "/video-streaming-platform.jpg",
      tags: ["Next.js", "AWS", "WebRTC"],
      link: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Health and workout monitoring application",
      image: "/fitness-tracking-app-interface.png",
      tags: ["React Native", "HealthKit", "Charts"],
      link: "#",
    },
  ]

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "GraphQL",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "REST APIs",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      console.error("Contact form submission failed:", error)
    }
  }

  return (
    <div data-theme="gamma" className="min-h-screen">
      <Header
        logo="Gamma"
        links={[
          { href: "#projects", label: "Projects" },
          { href: "#about", label: "About" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      <DebugTheme />

      <main className="pt-24">
        {/* Hero Section */}
        <Section className="pt-12 pb-20">
          <div className="max-w-4xl">
            <Badge className="mb-6">Full-Stack Developer</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Building Digital Experiences</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-2xl">
              Specialized in creating modern web applications with focus on performance, scalability, and user
              experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Section>

        {/* Projects Grid Section */}
        <Section id="projects" subdued>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-muted-foreground leading-relaxed">
              A collection of recent work spanning web applications, mobile apps, and digital products
            </p>
          </div>

          {/* Masonry-like grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group block rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* About Section */}
        <Section id="about">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Full-stack developer with over 5 years of experience building web applications and digital products
                    for startups and enterprises.
                  </p>
                  <p>
                    I specialize in modern JavaScript frameworks, cloud infrastructure, and creating scalable solutions
                    that solve real business problems.
                  </p>
                  <p>
                    When I'm not coding, you'll find me contributing to open source, writing technical articles, or
                    exploring new technologies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-semibold mb-4">Experience</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Senior Developer</p>
                      <p className="text-sm text-muted-foreground">Tech Company • 2021 - Present</p>
                    </div>
                    <div>
                      <p className="font-medium">Full-Stack Developer</p>
                      <p className="text-sm text-muted-foreground">Startup Inc • 2019 - 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" subdued>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? Let's discuss how we can work together.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Note: This is a demo form. Submissions are not sent to external services.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-primary/10 border border-primary/20 text-center">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
