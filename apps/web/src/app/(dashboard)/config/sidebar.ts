import { 
  Home, 
  BarChart2, 
  ClipboardList, 
  Heart, 
  Target, 
  User, 
  Settings,
  LucideIcon
} from "lucide-react";

export interface SidebarItem {
  href: string;
  label: string;
  icon: LucideIcon;
  requiresAuth: boolean;
}

export const sidebarConfig: SidebarItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: Home, requiresAuth: true },
  { href: "/dashboard/reports", label: "My Reports", icon: BarChart2, requiresAuth: true },
  { href: "/dashboard/history", label: "Assessment History", icon: ClipboardList, requiresAuth: true },
  { href: "/dashboard/saved", label: "Saved Resources", icon: Heart, requiresAuth: true },
  { href: "/dashboard/goals", label: "My Goals", icon: Target, requiresAuth: true },
  { href: "/dashboard/profile", label: "Profile", icon: User, requiresAuth: true },
  { href: "/dashboard/settings", label: "Settings", icon: Settings, requiresAuth: true },
];
