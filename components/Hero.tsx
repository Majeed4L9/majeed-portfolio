export default function Hero() {
  return (
    <section className="hero" aria-labelledby="h1">
      <div>
        <p className="eyebrow hero-eyebrow">Product designer · Nigeria</p>
        <h1 id="h1">Majeed Raji</h1>
        <p className="tagline">I design calm interfaces for complicated things.</p>
        <p className="lede">
          I&apos;m applying for a <strong>junior role</strong> at Fredrin, alongside the experienced designer you&apos;re hiring. Your listing stands as written, and I&apos;m not competing with the senior applicants. I&apos;m going the extra mile in case there&apos;s room for someone earlier in their career.
        </p>
        <div className="cta">
          <a className="btn primary" href="#work">See my work</a>
          <a className="btn" href="#ask">Why I want to join</a>
        </div>
      </div>

      <aside className="card app-ticket" aria-label="Application summary">
        <div className="tk-top">
          <span className="tk-id">UX-0001</span>
          <span className="pill is-run">Applying</span>
        </div>
        <div>
          <h2 className="tk-title">Junior designer</h2>
          <p className="tk-sub">Fredrin · Remote</p>
        </div>
        <dl className="kv">
          <dt>Applicant</dt><dd>Majeed Raji</dd>
          <dt>Time zone</dt><dd>West Africa Time, UTC+1</dd>
        </dl>
      </aside>
    </section>
  );
}
