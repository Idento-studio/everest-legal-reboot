import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/site";

export const Route = createFileRoute("/expertises/")({
  head: () => ({
    meta: [
      { title: "Expertises — Everest advocaten" },
      {
        name: "description",
        content:
          "Veertien expertisedomeinen, van ondernemingsrecht en insolventie tot overheidsopdrachten, fiscaliteit en IP/ICT.",
      },
      { property: "og:title", content: "Expertises — Everest advocaten" },
      {
        property: "og:description",
        content: "Veertien expertisedomeinen voor ondernemingen, bestuurders en overheden.",
      },
    ],
  }),
  component: ExpertisesPage,
});

function ExpertisesPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-24 lg:py-32">
          <p className="eyebrow text-accent">Expertises</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
            Specialisatie waar het verschil maakt.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted">
            Elk dossier krijgt de advocaat die het domein dagelijks beoefent. Kies hieronder uw
            vakgebied voor een concreet overzicht van wat wij voor u doen.
          </p>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <ul className="divide-y divide-border border-y border-border">
          {services.map((service, i) => (
            <li key={service.slug}>
              <Link
                to="/expertises/$slug"
                params={{ slug: service.slug }}
                className="group grid items-baseline gap-3 py-8 md:grid-cols-[4rem_1fr_auto]"
              >
                <span className="text-xs tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="font-display text-3xl transition-colors group-hover:text-accent">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {service.tagline}
                  </span>
                </span>
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-accent">
                  Lees meer
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
