"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Trash2 } from "lucide-react"
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

const GetStartedPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    university: "",
    education: [] as Education[],
    projects: [{ title: "", description: "" }] as Project[],
    achievements: [] as Achievement[],
    experience: [] as Experience[],
  })

  const [currentEducation, setCurrentEducation] = useState<Education>({
    degree: "",
    institution: "",
    year: "",
  })

  const [currentExperience, setCurrentExperience] = useState<Experience>({
    role: "",
    company: "",
    period: "",
    description: "",
  })

  const [currentAchievement, setCurrentAchievement] = useState<Achievement>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleProjectChange = (index: number, field: "title" | "description", value: string) => {
    const updatedProjects = [...formData.projects]
    updatedProjects[index][field] = value
    setFormData({ ...formData, projects: updatedProjects })
  }

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "", description: "" }],
    })
  }

  const removeProject = (index: number) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index)
    setFormData({ ...formData, projects: updatedProjects })
  }

  const handleEducationChange = (field: keyof Education, value: string) => {
    setCurrentEducation({ ...currentEducation, [field]: value })
  }

  const addEducation = () => {
    if (currentEducation.degree && currentEducation.institution) {
      setFormData({
        ...formData,
        education: [...formData.education, currentEducation],
      })
      setCurrentEducation({ degree: "", institution: "", year: "" })
    }
  }

  const removeEducation = (index: number) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index)
    setFormData({ ...formData, education: updatedEducation })
  }

  const handleExperienceChange = (field: keyof Experience, value: string) => {
    setCurrentExperience({ ...currentExperience, [field]: value })
  }

  const addExperience = () => {
    if (currentExperience.role && currentExperience.company) {
      setFormData({
        ...formData,
        experience: [...formData.experience, currentExperience],
      })
      setCurrentExperience({ role: "", company: "", period: "", description: "" })
    }
  }

  const removeExperience = (index: number) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index)
    setFormData({ ...formData, experience: updatedExperience })
  }

  const handleAchievementChange = (value: string) => {
    setCurrentAchievement(value)
  }

  const addAchievement = () => {
    if (currentAchievement) {
      setFormData({
        ...formData,
        achievements: [...formData.achievements, currentAchievement],
      })
      setCurrentAchievement("")
    }
  }

  const removeAchievement = (index: number) => {
    const updatedAchievements = formData.achievements.filter((_, i) => i !== index)
    setFormData({ ...formData, achievements: updatedAchievements })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Convert the form data to a query string
    const queryParams = new URLSearchParams()

    // Add basic info
    queryParams.append("name", formData.name)
    queryParams.append("email", formData.email)
    queryParams.append("contact", formData.contact)
    queryParams.append("address", formData.address)
    queryParams.append("university", formData.university)

    // Add complex objects as JSON strings
    queryParams.append("education", JSON.stringify(formData.education))
    queryParams.append("projects", JSON.stringify(formData.projects))
    queryParams.append("achievements", JSON.stringify(formData.achievements))
    queryParams.append("experience", JSON.stringify(formData.experience))

    router.push(`/preview?${queryParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight">PortfolioGen</h1>
        <nav>
          <Link href="/" className="hover:text-blue-400 transition text-gray-300">
            Home
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Let's Build Your Portfolio 🚀</h2>
          <p className="text-gray-400 text-center mb-8">
            Fill in the details below to create your professional portfolio.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-1">
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    placeholder="+1 (555) 123-4567"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="San Francisco, CA"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="university" className="block text-sm font-medium text-gray-300 mb-1">
                    University/College
                  </label>
                  <input
                    id="university"
                    name="university"
                    type="text"
                    placeholder="Stanford University"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>

              {formData.education.length > 0 && (
                <div className="mb-6 space-y-3">
                  {formData.education.map((edu, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                      <div>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm text-gray-400">
                          {edu.institution} • {edu.year}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeEducation(idx)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="degree" className="block text-sm font-medium text-gray-300 mb-1">
                    Degree/Certificate
                  </label>
                  <input
                    id="degree"
                    type="text"
                    placeholder="BS in Computer Science"
                    value={currentEducation.degree}
                    onChange={(e) => handleEducationChange("degree", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-300 mb-1">
                    Institution
                  </label>
                  <input
                    id="institution"
                    type="text"
                    placeholder="University Name"
                    value={currentEducation.institution}
                    onChange={(e) => handleEducationChange("institution", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">
                    Year
                  </label>
                  <input
                    id="year"
                    type="text"
                    placeholder="2018-2022"
                    value={currentEducation.year}
                    onChange={(e) => handleEducationChange("year", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={addEducation}
                className="mt-3 flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Education
              </button>
            </div>

            {/* Projects */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Projects</h3>

              {formData.projects.map((proj, idx) => (
                <div key={idx} className="mb-6 bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Project {idx + 1}</h4>
                    {formData.projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(idx)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor={`project-title-${idx}`} className="block text-sm font-medium text-gray-300 mb-1">
                        Project Title
                      </label>
                      <input
                        id={`project-title-${idx}`}
                        type="text"
                        placeholder="E-commerce Website"
                        value={proj.title}
                        onChange={(e) => handleProjectChange(idx, "title", e.target.value)}
                        className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor={`project-desc-${idx}`} className="block text-sm font-medium text-gray-300 mb-1">
                        Project Description
                      </label>
                      <textarea
                        id={`project-desc-${idx}`}
                        placeholder="Describe your project, technologies used, and your role"
                        value={proj.description}
                        onChange={(e) => handleProjectChange(idx, "description", e.target.value)}
                        className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-24 resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addProject}
                className="flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Another Project
              </button>
            </div>

            {/* Experience */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Work Experience</h3>

              {formData.experience.length > 0 && (
                <div className="mb-6 space-y-3">
                  {formData.experience.map((exp, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                      <div>
                        <p className="font-medium">
                          {exp.role} at {exp.company}
                        </p>
                        <p className="text-sm text-gray-400">{exp.period}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeExperience(idx)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                    Role/Position
                  </label>
                  <input
                    id="role"
                    type="text"
                    placeholder="Software Engineer"
                    value={currentExperience.role}
                    onChange={(e) => handleExperienceChange("role", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Google"
                    value={currentExperience.company}
                    onChange={(e) => handleExperienceChange("company", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="period" className="block text-sm font-medium text-gray-300 mb-1">
                    Period
                  </label>
                  <input
                    id="period"
                    type="text"
                    placeholder="Jan 2020 - Present"
                    value={currentExperience.period}
                    onChange={(e) => handleExperienceChange("period", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="exp-description" className="block text-sm font-medium text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    id="exp-description"
                    placeholder="Describe your responsibilities and achievements"
                    value={currentExperience.description}
                    onChange={(e) => handleExperienceChange("description", e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-20 resize-none"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={addExperience}
                className="flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Experience
              </button>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Achievements</h3>

              {formData.achievements.length > 0 && (
                <div className="mb-6 space-y-2">
                  {formData.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                      <p>{achievement}</p>
                      <button
                        type="button"
                        onClick={() => removeAchievement(idx)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g., Won first place in hackathon"
                  value={currentAchievement}
                  onChange={(e) => handleAchievementChange(e.target.value)}
                  className="flex-1 p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={addAchievement}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition flex items-center"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-lg"
            >
              Preview Your Portfolio
            </motion.button>
          </form>
        </motion.div>
      </main>

      <footer className="w-full py-6 text-center text-sm text-gray-500 border-t border-gray-700 mt-16">
        © {new Date().getFullYear()} PortfolioGen.
      </footer>
    </div>
  )
}

export default GetStartedPage
