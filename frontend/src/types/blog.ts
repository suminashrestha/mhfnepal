export interface Blog {
  id: string
  title: string
  content: string
  author: string
  status: "draft" | "published"
  createdAt: string
  updatedAt: string
}
