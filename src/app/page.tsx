"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, Rocket, Zap, Mail, Github, Linkedin, ArrowRight } from 'lucide-react'

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    alert(`Thanks for signing up with ${email}!`)
    setEmail("")
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      {/* Header */}
      <header className="w-full py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">PortfolioGen</h1>
        <nav className="space-x-3 md:space-x-6 text-gray-300 flex flex-wrap justify-center">
          <a href="#features" className="hover:text-blue-400 transition px-2 py-1">
            Features
          </a>
          <a href="#contact" className="hover:text-blue-400 transition px-2 py-1">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Instantly Generate & Deploy Your Portfolio 🚀
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Create, customize, and deploy your personal portfolio in minutes. Stand out to employers with a professional
            online presence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 rounded-xl transition shadow-lg flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
            <Link href="#features">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 text-lg px-8 py-3 rounded-xl transition shadow-lg"
              >
                View Examples
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to create a stunning portfolio that showcases your skills and projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
                <Rocket className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">One-Click Deploy</h3>
              <p className="text-gray-400">
                Deploy your portfolio to Vercel, Netlify, or GitHub Pages with a single click.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
                <Briefcase className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Project Showcase</h3>
              <p className="text-gray-400">
                Highlight your best work with beautiful project cards and detailed descriptions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
              <p className="text-gray-400">
                Get discovered by recruiters with built-in SEO optimization for your portfolio.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
                <Github className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub Integration</h3>
              <p className="text-gray-400">
                Connect your GitHub account to automatically import and display your repositories.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
                <Linkedin className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Integration</h3>
              <p className="text-gray-400">
                Connect your social profiles and make it easy for visitors to find you online.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-900/50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from developers who have used PortfolioGen to showcase their work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Frontend Developer",
                quote:
                  "PortfolioGen helped me create a stunning portfolio in under an hour. I got three interview requests within a week of sharing it!",
              },
              {
                name: "Sarah Chen",
                role: "UX Designer",
                quote:
                  "The templates are beautiful and so easy to customize. My portfolio perfectly showcases my design skills and projects.",
              },
              {
                name: "Michael Rodriguez",
                role: "Full Stack Developer",
                quote:
                  "The GitHub integration is amazing! All my projects were automatically imported and displayed beautifully.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-400">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                    <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Have questions or feedback? We&apos;d love to hear from you.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <a href="mailto:support@portfoliogen.com" className="text-gray-300 hover:text-blue-400 transition">
                    support@portfoliogen.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-blue-400 mr-3" />
                  <a
                    href="https://github.com/portfoliogen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    github.com/portfoliogen
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-blue-400 mr-3" />
                  <a
                    href="https://linkedin.com/company/portfoliogen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    linkedin.com/company/portfoliogen
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-blue-900/30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest templates, features, and tips.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/50 to-gray-800/50 rounded-2xl p-8 md:p-12 border border-blue-500/30"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your Work?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of developers who have already created stunning portfolios with PortfolioGen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 rounded-xl transition shadow-lg"
                >
                  Get Started for Free
                </motion.button>
              </Link>
              <Link href="#features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 text-lg px-8 py-3 rounded-xl transition shadow-lg"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 text-center border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-left mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PortfolioGen</h3>
              <p className="text-gray-400 text-sm">Create, customize, and deploy your personal portfolio in minutes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-blue-400 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-blue-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-blue-400 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/blog" className="hover:text-blue-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-blue-400 transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/tutorials" className="hover:text-blue-400 transition">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-blue-400 transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/about" className="hover:text-blue-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-blue-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-blue-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-blue-400 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} PortfolioGen. Built for Cloud Learners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
