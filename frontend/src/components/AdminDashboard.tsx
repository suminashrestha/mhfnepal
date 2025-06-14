import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Heart, TrendingUp } from "lucide-react"
import type { Blog } from "@/types/blog"
import type { TeamMember } from "@/types/teams"


interface DashboardProps {
  blogs: Blog[]
  teamMembers: TeamMember[]
}

export function AdminDashboard({ blogs, teamMembers }: DashboardProps) {
  const publishedBlogs = blogs.filter((blog) => blog.status === "published")
  const draftBlogs = blogs.filter((blog) => blog.status === "draft")

  const stats = [
    {
      title: "Total Blog Posts",
      value: blogs.length,
      description: "All blog posts",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Published Posts",
      value: publishedBlogs.length,
      description: "Live on website",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Team Members",
      value: teamMembers.filter((member) => member.status === "active").length,
      description: "Active team members",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Draft Posts",
      value: draftBlogs.length,
      description: "Pending publication",
      icon: FileText,
      color: "text-yellow-600",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your non-profit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
            <CardDescription>Your latest blog posts and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogs.slice(0, 5).map((blog) => (
                <div key={blog.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{blog.title}</h4>
                    <p className="text-xs text-gray-500">
                      by {blog.author} • {blog.createdAt}
                    </p>
                  </div>
                  <Badge variant={blog.status === "published" ? "default" : "secondary"}>{blog.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Create New Blog Post</p>
                  <p className="text-xs text-gray-500">Write and publish content</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Manage Volunteers</p>
                  <p className="text-xs text-gray-500">View and organize volunteers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                <Heart className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-sm font-medium">Donation Reports</p>
                  <p className="text-xs text-gray-500">Track fundraising progress</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
