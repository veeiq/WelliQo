import Link from 'next/link';

const navigationItems = [{ href: '/', label: 'Home' }] as const;

export function SiteHeader() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold tracking-tight text-foreground" href="/">
          WelliQo
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
