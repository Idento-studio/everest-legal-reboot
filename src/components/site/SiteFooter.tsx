import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { offices, services } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Logo className="text-ink-foreground" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              Advocatenkantoor met bijzondere focus op de ondernemingswereld. Vier vestigingen,
              één team, één standaard.
            </p>
            <p className="mt-8 font-display text-2xl text-accent">On top of your business</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.city}>
                <h3 className="eyebrow text-accent">{office.city}</h3>
                <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-ink-muted">
                  {office.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                  <div>{office.phone}</div>
                  <a href={`mailto:${office.email}`} className="link-underline inline-block">
                    {office.email}
                  </a>
                </address>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-ink-border pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-ink-muted">
            {services.slice(0, 7).map((s) => (
              <Link
                key={s.slug}
                to="/expertises/$slug"
                params={{ slug: s.slug }}
                className="link-underline"
              >
                {s.title}
              </Link>
            ))}
            <Link to="/expertises" className="link-underline text-accent">
              Alle expertises
            </Link>
          </div>
          <p className="mt-8 text-xs text-ink-muted">
            © {new Date().getFullYear()} Everest advocaten · advocaten . avocats . attorneys
          </p>
        </div>
      </div>
    </footer>
  );
}
