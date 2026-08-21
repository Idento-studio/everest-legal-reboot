import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { lawyers } from "@/data/lawyers";
import { services } from "@/data/site";

export const Route = createFileRoute("/advocaten/$slug")({
  loader: ({ params }) => {
    const lawyer = lawyers.find((l) => l.slug === params.slug);
    if (!lawyer) throw notFound();
    return { lawyer };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Niet gevonden — Everest advocaten" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { lawyer } = loaderData;
    const description =
      lawyer.bio[0]?.slice(0, 155) ??
      `${lawyer.name}, ${lawyer.role} bij Everest advocaten${lawyer.office ? ` in ${lawyer.office}` : ""}.`;
    return {
      meta: [
        { title: `${lawyer.name} — Everest advocaten` },
        { name: "description", content: description },
        { property: "og:title", content: `${lawyer.name} — Everest advocaten` },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LawyerPage,
});

function LawyerPage() {
  const { lawyer } = Route.useLoaderData();
  const colleagues = lawyers.filter((l) => l.slug !== lawyer.slug && l.office === lawyer.office).slice(0, 5);

  const linkedServices = lawyer.expertises
    .map((name) => services.find((s) => s.title.toLowerCase() === name.toLowerCase()))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-20 lg:py-28">
          <Link
            to="/advocaten"
            className="link-underline text-xs uppercase tracking-[0.16em] text-accent"
          >
            ← Alle advocaten
          </Link>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[1.08] sm:text-6xl">{lawyer.name}</h1>
          <p className="mt-6 font-display text-2xl text-accent">
            {lawyer.role}
            {lawyer.office ? ` · ${lawyer.office}` : ""}
          </p>
        </div>
      </section>

      <section className="container-x grid gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          {lawyer.bio.length > 0 ? (
            lawyer.bio.map((paragraph, i) => (
              <p
                key={i}
                className={i === 0 ? "text-xl leading-relaxed" : "mt-6 text-[1.0625rem] leading-relaxed"}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-xl leading-relaxed">
              {lawyer.name} maakt deel uit van het team van Everest
              {lawyer.office ? ` in ${lawyer.office}` : ""} en staat ondernemingen bij in hun
              dagelijkse juridische vraagstukken.
            </p>
          )}

          {linkedServices.length > 0 && (
            <>
              <h2 className="mt-16 text-3xl">Expertises</h2>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {linkedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to="/expertises/$slug"
                      params={{ slug: service.slug }}
                      className="flex items-baseline justify-between gap-4 py-4 text-[1.0625rem] transition-colors hover:text-accent"
                    >
                      {service.title}
                      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        Lees meer
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div className="bg-sand p-8">
            <h2 className="font-display text-2xl">Contact</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {lawyer.email && (
                <div>
                  <dt className="eyebrow text-muted-foreground">E-mail</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${lawyer.email}`} className="link-underline break-all">
                      {lawyer.email}
                    </a>
                  </dd>
                </div>
              )}
              {lawyer.phone && (
                <div>
                  <dt className="eyebrow text-muted-foreground">Telefoon</dt>
                  <dd className="mt-1">
                    <a href={`tel:${lawyer.phone.replace(/[^+\d]/g, "")}`} className="link-underline">
                      {lawyer.phone}
                    </a>
                  </dd>
                </div>
              )}
              {lawyer.office && (
                <div>
                  <dt className="eyebrow text-muted-foreground">Kantoor</dt>
                  <dd className="mt-1">{lawyer.office}</dd>
                </div>
              )}
            </dl>
            <Link
              to="/contact"
              className="mt-8 inline-block bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground"
            >
              Maak een afspraak
            </Link>
          </div>

          {colleagues.length > 0 && (
            <div>
              <h2 className="eyebrow text-muted-foreground">
                Collega&apos;s {lawyer.office ? `in ${lawyer.office}` : ""}
              </h2>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {colleagues.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/advocaten/$slug"
                      params={{ slug: c.slug }}
                      className="block py-4 text-sm transition-colors hover:text-accent"
                    >
                      {c.name}
                      <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {c.role}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
