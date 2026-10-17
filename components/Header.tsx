import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="top">
      <nav className="crumb" aria-label="Breadcrumb">
        <i className="live" aria-hidden="true"></i>
        <a href="https://www.fredrin.com/careers" target="_blank" rel="noopener">careers</a>
        <span className="sep">/</span>
        <a href="https://www.fredrin.com/careers/ui-ux-designer" target="_blank" rel="noopener">ui-ux-designer</a>
        <span className="sep">/</span>
        <a className="here" href="#top">majeed-raji</a>
      </nav>
      <nav className="nav" aria-label="Page sections">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#fit">Fit</a>
          <a href="#ask">Why Fredrin</a>
          <a href="#contact">Contact</a>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
