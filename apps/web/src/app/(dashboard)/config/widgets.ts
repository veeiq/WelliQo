import React from "react";

export interface WidgetConfig {
  id: string;
  title: string;
  description?: string;
  component: React.ComponentType<any>;
  requiredData: string[];
  permissions: string[];
}

export const widgetRegistry: Record<string, WidgetConfig> = {
  // We will populate this registry with widget definitions as we build them out in Phase 3.
  // Example structure:
  // "latest-score": {
  //   id: "latest-score",
  //   title: "Latest Wellness Score",
  //   component: LatestScoreWidget,
  //   requiredData: ["latestAssessment"],
  //   permissions: ["authenticated"],
  // }
};
