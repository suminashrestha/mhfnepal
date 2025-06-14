

import { useState } from "react"

import type { Blog } from "@/types/blog"
import type { TeamMember } from "@/types/teams"
import { AdminDashboard } from "@/components/AdminDashboard"
import { AdminBlogList } from "@/components/AdminBlogList"
import { AdminBlogForm } from "@/components/AdminBlogForm"
import { AdminTeamList } from "@/components/AdminTeamList"
import { AdminTeamForm } from "@/components/AdminTeamForm"
import { AdminSidebar } from "@/components/ui/AdminSidebar"

// Mock data for demonstration
const initialBlogs: Blog[] = [
  {
    id: "1",
    title: "Community Garden Project Launch",
    content:
      "We're excited to announce the launch of our community garden project that will provide fresh produce to local families in need.",
    author: "Sarah Johnson",
    status: "published",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Volunteer Appreciation Event",
    content:
      "Join us for our annual volunteer appreciation event where we celebrate the amazing contributions of our community volunteers.",
    author: "Mike Chen",
    status: "draft",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-12",
  },
  {
    id: "3",
    title: "Winter Clothing Drive Success",
    content:
      "Thanks to your generous donations, we collected over 500 winter clothing items for families in need this season.",
    author: "Emily Rodriguez",
    status: "published",
    createdAt: "2024-01-08",
    updatedAt: "2024-01-08",
  },
]

const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Executive Director",
    department: "Leadership",
    email: "sarah@hopefoundation.org",
    phone: "(555) 123-4567",
    bio: "Sarah has been leading our organization for over 8 years, bringing extensive experience in non-profit management and community development.",
    status: "active",
    joinDate: "2016-03-15",
  },
  {
    id: "2",
    name: "Mike Chen",
    position: "Program Manager",
    department: "Programs",
    email: "mike@hopefoundation.org",
    phone: "(555) 234-5678",
    bio: "Mike oversees our community programs and ensures we're making maximum impact in the communities we serve.",
    status: "active",
    joinDate: "2018-07-22",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "Communications Director",
    department: "Marketing",
    email: "emily@hopefoundation.org",
    phone: "(555) 345-6789",
    bio: "Emily manages our communications strategy and helps tell the stories of the communities we impact.",
    status: "active",
    joinDate: "2019-01-10",
  },
  {
    id: "4",
    name: "David Wilson",
    position: "Volunteer Coordinator",
    department: "Operations",
    email: "david@hopefoundation.org",
    phone: "(555) 456-7890",
    bio: "David coordinates our amazing volunteer network and ensures everyone can contribute meaningfully to our mission.",
    status: "active",
    joinDate: "2020-05-18",
  },
]

export default function AdminLayout() {
  const [currentView, setCurrentView] = useState("dashboard")
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)
  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(null)

  const handleCreateBlog = (blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">) => {
    const newBlog: Blog = {
      ...blogData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    }
    setBlogs([newBlog, ...blogs])
    setCurrentView("blogs")
  }

  const handleUpdateBlog = (blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">) => {
    if (!editingBlog) return

    const updatedBlog: Blog = {
      ...editingBlog,
      ...blogData,
      updatedAt: new Date().toISOString().split("T")[0],
    }

    setBlogs(blogs.map((blog) => (blog.id === editingBlog.id ? updatedBlog : blog)))
    setEditingBlog(null)
    setCurrentView("blogs")
  }

  const handleDeleteBlog = (id: string) => {
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog)
    setCurrentView("blog-form")
  }

  const handleCreateTeamMember = (memberData: Omit<TeamMember, "id" | "joinDate">) => {
    const newMember: TeamMember = {
      ...memberData,
      id: Date.now().toString(),
      joinDate: new Date().toISOString().split("T")[0],
    }
    setTeamMembers([newMember, ...teamMembers])
    setCurrentView("team")
  }

  const handleUpdateTeamMember = (memberData: Omit<TeamMember, "id" | "joinDate">) => {
    if (!editingTeamMember) return

    const updatedMember: TeamMember = {
      ...editingTeamMember,
      ...memberData,
    }

    setTeamMembers(teamMembers.map((member) => (member.id === editingTeamMember.id ? updatedMember : member)))
    setEditingTeamMember(null)
    setCurrentView("team")
  }

  const handleDeleteTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  const handleEditTeamMember = (member: TeamMember) => {
    setEditingTeamMember(member)
    setCurrentView("team-form")
  }

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <AdminDashboard blogs={blogs} teamMembers={teamMembers} />
      case "blogs":
        return (
          <AdminBlogList
            blogs={blogs}
            onEdit={handleEditBlog}
            onDelete={handleDeleteBlog}
            onCreateNew={() => {
              setEditingBlog(null)
              setCurrentView("blog-form")
            }}
          />
        )
      case "blog-form":
        return (
          <AdminBlogForm
            blog={editingBlog}
            onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog}
            onCancel={() => {
              setEditingBlog(null)
              setCurrentView("blogs")
            }}
          />
        )
      case "team":
        return (
          <AdminTeamList
            teamMembers={teamMembers}
            onEdit={handleEditTeamMember}
            onDelete={handleDeleteTeamMember}
            onCreateNew={() => {
              setEditingTeamMember(null)
              setCurrentView("team-form")
            }}
          />
        )
      case "team-form":
        return (
          <AdminTeamForm
            teamMember={editingTeamMember}
            onSubmit={editingTeamMember ? handleUpdateTeamMember : handleCreateTeamMember}
            onCancel={() => {
              setEditingTeamMember(null)
              setCurrentView("team")
            }}
          />
        )
      default:
        return <AdminDashboard blogs={blogs} teamMembers={teamMembers} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-auto">{renderContent()}</main>
    </div>
  )
}
