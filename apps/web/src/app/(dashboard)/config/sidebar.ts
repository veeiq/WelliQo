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
  group?: 'primary' | 'preferences';
}

export const sidebarConfig: SidebarItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: Home, requiresAuth: true, group: 'primary' },
  { href: "/dashboard/reports", label: "My Reports", icon: BarChart2, requiresAuth: true, group: 'primary' },
  { href: "/dashboard/history", label: "Assessment History", icon: ClipboardList, requiresAuth: true, group: 'primary' },
  { href: "/dashboard/saved", label: "Saved Resources", icon: Heart, requiresAuth: true, group: 'primary' },
  { href: "/dashboard/goals", label: "My Goals", icon: Target, requiresAuth: true, group: 'primary' },
  { href: "/dashboard/profile", label: "Profile & Settings", icon: User, requiresAuth: true, group: 'preferences' },
];
