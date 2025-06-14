"use client"

import { BarChart3, FileText, Home, Heart, Users, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  currentView: string
  onViewChange: (view: string) => void
}

export function AdminSidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "blogs", label: "Blog Posts", icon: FileText },
    { id: "team", label: "Team Members", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "volunteers", label: "Volunteers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-red-500" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Mahabir Health Foundation </h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                    currentView === item.id
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
