import { createFileRoute, Link } from "@tanstack/react-router";
import { vacancies } from "@/data/site";

export const Route = createFileRoute("/vacatures")({
  head: () => ({
    meta: [
      { title: "Vacatures — Everest advocaten" },
      {
        name: "description",
        content:
          "Werken bij Everest: vacatures voor advocaten, stagiairs en paralegals in Brussel, Antwerpen, Gent en Hasselt.",
      },
      { property: "og:title", content: "Vacatures — Everest advocaten" },
      {
        property: "og:description",
        content: "Openstaande posities voor advocaten, stagiairs en paralegals bij Everest.",
      },
    ],
  }),
  component: VacaturesPage,
});

function VacaturesPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-24 lg:py-32">
          <p className="eyebrow text-accent">Vacatures</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
            Klimmen doe je in team.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted">
            Bij Everest krijgt u snel eigen dossiers, een vaste mentor en de ruimte om uw domein
            echt te beheersen. Geen anonieme piramide, wel korte lijnen.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-10 py-20 sm:grid-cols-3 lg:py-24">
        {[
          ["Eigen dossiers", "Van bij de start werkt u mee aan echte dossiers, met begeleiding maar zonder ghostwriting."],
          ["Opleiding", "Interne seminaries, externe specialisatieopleidingen en een jaarlijks opleidingsbudget."],
          ["Evenwicht", "Vier vestigingen, flexibele regelingen en respect voor de agenda buiten kantoor."],
        ].map(([title, text]) => (
          <div key={title} className="border-t border-foreground/20 pt-6">
            <h2 className="font-display text-2xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-sand py-20 lg:py-28">
        <div className="container-x">
          <h2 className="text-4xl sm:text-5xl">Openstaande posities</h2>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {vacancies.map((job) => (
              <li key={job.title} className="grid gap-4 py-8 lg:grid-cols-[1.4fr_1fr_auto]">
                <div>
                  <h3 className="font-display text-2xl">{job.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
                <dl className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="text-accent">Vestiging</dt>
                    <dd>{job.office}</dd>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <dt className="text-accent">Regime</dt>
                    <dd>{job.type}</dd>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <dt className="text-accent">Profiel</dt>
                    <dd>{job.experience}</dd>
                  </div>
                </dl>
                <a
                  href={`mailto:info@everest-law.eu?subject=${encodeURIComponent(`Sollicitatie: ${job.title}`)}`}
                  className="self-start border border-foreground/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
                >
                  Solliciteer
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Geen passende vacature gevonden? Spontane kandidaturen zijn welkom via{" "}
            <a href="mailto:info@everest-law.eu" className="link-underline text-foreground">
              info@everest-law.eu
            </a>
            . Vermeld uw voorkeursvestiging en interessedomein.{" "}
            <Link to="/contact" className="link-underline text-foreground">
              Contactgegevens per kantoor
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
