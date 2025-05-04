"use client"
import type React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
}

type Education = {
  degree: string
  institution: string
  year: string
}

type Experience = {
  role: string
  company: string
  period: string
  description: string
}

type Achievement = string

const PortfolioPreview: React.FC = () => {
  const searchParams = useSearchParams()

  // Parse the query parameter safely with fallback handling
  const parse = <T,>(key: string, defaultValue: T): T => {
    const value = searchParams.get(key)
    if (!value) return defaultValue

    try {
      return JSON.parse(value) as T
    } catch (error) {
      console.error(`Error parsing ${key}:`, error)
      return defaultValue
    }
  }

  // Get data from query params, providing fallback values if not present
  const data = {
    name: searchParams.get("name") || "John Doe",
    email: searchParams.get("email") || "john.doe@example.com",
    contact: searchParams.get("contact") || "+1 (555) 123-4567",
    address: searchParams.get("address") || "San Francisco, CA",
    university: searchParams.get("university") || "Stanford University",
    education: parse<Education[]>("education", []),
    projects: parse<Project[]>("projects", []),
    achievements: parse<Achievement[]>("achievements", []),
    experience: parse<Experience[]>("experience", []),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/get-started" className="text-gray-300 hover:text-gray-100 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Edit Details
          </Link>
          <div className="flex gap-3">
            <Link
              href={{
                pathname: "/download-pdf",
                query: searchParams.toString(),
              }}
            >
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                <Download className="h-4 w-4 mr-1" /> Download PDF
              </button>
            </Link>
            <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center text-sm">
              <ExternalLink className="h-4 w-4 mr-1" /> Deploy Portfolio
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <p className="text-gray-300 mt-2">{data.university}</p>
                <p className="text-gray-400 mt-1">{data.address}</p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 text-gray-400 mr-2" />
                  <a href={`mailto:${data.email}`} className="text-gray-300 hover:text-white">
                    {data.email}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <Github className="h-4 w-4 text-gray-400 mr-2" />
                  <a href="#" className="text-gray-300 hover:text-white">
                    github.com/{data.name.toLowerCase().replace(/\s+/g, "")}
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-4 w-4 text-gray-400 mr-2" />
                  <a href="#" className="text-gray-300 hover:text-white">
                    linkedin.com/in/{data.name.toLowerCase().replace(/\s+/g, "")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Education Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4 text-gray-300">Education</h2>
              {data.education.length > 0 ? (
                <div className="space-y-4">
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="bg-gray-700/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No education details provided.</p>
              )}
            </section>

            {/* Experience Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4 text-gray-300">
                Work Experience
              </h2>
              {data.experience.length > 0 ? (
                <div className="space-y-6">
                  {data.experience.map((exp, idx) => (
                    <div key={idx} className="bg-gray-700/30 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <span className="text-gray-400 font-medium">{exp.company}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                      {exp.description && <p className="text-gray-300">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No experience details provided.</p>
              )}
            </section>

            {/* Projects Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4 text-gray-300">Projects</h2>
              {data.projects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {data.projects.map((proj, idx) => (
                    <div key={idx} className="bg-gray-700/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
                      <p className="text-gray-300">{proj.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No project details provided.</p>
              )}
            </section>

            {/* Achievements Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4 text-gray-300">Achievements</h2>
              {data.achievements.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {data.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 italic">No achievements provided.</p>
              )}
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-900 p-6 text-center">
            <p className="text-gray-400 text-sm">
              Created with <span className="text-gray-300">PortfolioGen</span> • {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioPreview
