import { PlusCircle, Target, Activity, FileText, LucideIcon, Stethoscope, BarChart2, BookOpen } from 'lucide-react';
import { AssessmentRegistry } from '@/assessments/registry';

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
    title: "Take Assessment",
    icon: Stethoscope,
    href: AssessmentRegistry.getDirectoryRoute(),
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
