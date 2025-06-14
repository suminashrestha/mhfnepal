export interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  email: string
  phone?: string
  bio: string
  status: "active" | "inactive"
  joinDate: string
}
