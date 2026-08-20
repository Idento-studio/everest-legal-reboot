import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/data/site";

export const Route = createFileRoute("/expertises/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Niet gevonden — Everest advocaten" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const description = `${service.tagline}. ${service.intro.slice(0, 120)}…`;
    return {
      meta: [
        { title: `${service.title} — Everest advocaten` },
        { name: "description", content: description },
        { property: "og:title", content: `${service.title} — Everest advocaten` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-20 lg:py-28">
          <Link
            to="/expertises"
            className="link-underline text-xs uppercase tracking-[0.16em] text-accent"
          >
            ← Alle expertises
          </Link>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[1.08] sm:text-6xl">{service.title}</h1>
          <p className="mt-6 font-display text-2xl text-accent">{service.tagline}</p>
        </div>
      </section>

      <section className="container-x grid gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          <p className="text-xl leading-relaxed">{service.intro}</p>

          <h2 className="mt-16 text-3xl">Waarmee wij u bijstaan</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-4 py-4 text-[1.0625rem]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-3xl">Uit de praktijk</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {service.cases.map((item) => (
              <article key={item.title} className="border border-border bg-card p-8">
                <h3 className="text-xs uppercase tracking-[0.16em] text-accent">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div className="bg-sand p-8">
            <h2 className="font-display text-2xl">Een vraag over {service.title.toLowerCase()}?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We bekijken uw dossier vrijblijvend en zeggen u meteen waar u staat.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground"
            >
              Contacteer ons
            </Link>
          </div>

          <div>
            <h2 className="eyebrow text-muted-foreground">Verwante expertises</h2>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    to="/expertises/$slug"
                    params={{ slug: other.slug }}
                    className="block py-4 text-sm transition-colors hover:text-accent"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
