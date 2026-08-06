import { PlusCircle, BarChart2, BookOpen, LucideIcon } from "lucide-react";

export interface QuickAction {
  id: string;
  title: string;
  href: string | ((context: any) => string);
  icon: LucideIcon;
  color: "emerald" | "blue" | "purple" | "orange";
}

export const quickActionsConfig: QuickAction[] = [
  {
    id: "new-assessment",
    title: "Start New Assessment",
    href: "/assessments",
    icon: PlusCircle,
    color: "emerald"
  },
  {
    id: "latest-report",
    title: "View Latest Report",
    href: (context) => `/dashboard/report/${context.latestAssessmentId || ''}`,
    icon: BarChart2,
    color: "blue"
  },
  {
    id: "history",
    title: "Assessment History",
    href: "/dashboard/history",
    icon: BookOpen,
    color: "purple"
  }
];
