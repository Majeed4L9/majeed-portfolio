import ThemeToggle from "./ThemeToggle";

// Stub: the header ticket fills in the breadcrumb and section links.
export default function Header() {
  return (
    <header className="top">
      <nav className="nav" aria-label="Page sections">
        <ThemeToggle />
      </nav>
    </header>
  );
}
