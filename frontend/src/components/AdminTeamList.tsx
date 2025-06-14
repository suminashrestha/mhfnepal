"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Edit, Trash2, Plus, Mail, Phone, UsersIcon } from "lucide-react"
import type { TeamMember } from "@/types/teams"


interface TeamListProps {
  teamMembers: TeamMember[]
  onEdit: (member: TeamMember) => void
  onDelete: (id: string) => void
  onCreateNew: () => void
}

export function AdminTeamList({ teamMembers, onEdit, onDelete, onCreateNew }: TeamListProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      Leadership: "bg-purple-100 text-purple-800",
      Programs: "bg-blue-100 text-blue-800",
      Marketing: "bg-green-100 text-green-800",
      Operations: "bg-orange-100 text-orange-800",
      Finance: "bg-red-100 text-red-800",
    }
    return colors[department] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
          <p className="text-gray-600 mt-2">Manage your organization's team and their roles</p>
        </div>
        <Button onClick={onCreateNew} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{member.position}</CardDescription>
                </div>
                <Badge variant={member.status === "active" ? "default" : "secondary"}>{member.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className={getDepartmentColor(member.department)}>{member.department}</Badge>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                {member.phone && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                )}
              </div>

              <div className="text-xs text-gray-500">Joined {new Date(member.joinDate).toLocaleDateString()}</div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={() => onEdit(member)} className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(member.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {teamMembers.length === 0 && (
        <div className="text-center py-12">
          <UsersIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No team members yet</h3>
          <p className="text-gray-600 mb-4">Get started by adding your first team member</p>
          <Button onClick={onCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            Add First Team Member
          </Button>
        </div>
      )}
    </div>
  )
}
