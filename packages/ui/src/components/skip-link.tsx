export function SkipLink({ targetId }: Readonly<{ targetId: string }>) {
  return (
    <a
      className="sr-only z-50 rounded bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      href={`#${targetId}`}
    >
      Skip to main content
    </a>
  );
}
