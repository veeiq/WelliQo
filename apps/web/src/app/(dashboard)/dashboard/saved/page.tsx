import { getSavedResources } from "../actions";
import { getKnowledgeContentById } from "@/lib/knowledge-engine";
import { SavedClient } from "./SavedClient";
import { KnowledgeContent } from "@/types/knowledge";

export default async function SavedResourcesPage() {
  const savedDbItems = await getSavedResources();
  
  // Hydrate with full knowledge content
  const savedResources: KnowledgeContent[] = [];
  for (const item of savedDbItems) {
    const fullContent = await getKnowledgeContentById(item.resourceId);
    if (fullContent) {
      savedResources.push(fullContent);
    }
  }

  return <SavedClient savedResources={savedResources} />;
}
