import { ContentAdapter } from '@welliqo/content';
// Ensure the compiler has run and dist/index.json exists
import compiledIndex from '@welliqo/content/data';

// Assert the correct type (since TS imports JSON as a generic object)
import type { CompiledContentIndex } from '@welliqo/content';

const index = compiledIndex as unknown as CompiledContentIndex;

// We export a singleton ContentAdapter to be used anywhere in the React app (Server or Client)
export const contentAdapter = new ContentAdapter(index);
