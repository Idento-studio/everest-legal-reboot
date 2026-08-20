import { createFileRoute, Link } from "@tanstack/react-router";
import heroSummit from "@/assets/hero-summit.jpg";
import officeTower from "@/assets/office-tower.jpg";
import { offices, posts, services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Everest advocaten — On top of your business" },
      {
        name: "description",
        content:
          "Everest advocaten begeleidt ondernemingen in Brussel, Antwerpen, Gent en Hasselt. Veertien expertisedomeinen, één vast aanspreekpunt.",
      },
      { property: "og:title", content: "Everest advocaten — On top of your business" },
      {
        property: "og:description",
        content:
          "Advocatenkantoor met bijzondere focus op de ondernemingswereld. Vier vestigingen in België.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroSummit}
          alt="Besneeuwde bergtop boven een wolkendek bij zonsopgang"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="container-x relative flex min-h-[78vh] flex-col justify-end py-24">
          <p className="eyebrow animate-rise text-accent">Advocaten · Avocats · Attorneys</p>
          <h1 className="animate-rise mt-6 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Op de top van uw
            <br />
            onderneming.
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-ink-muted">
            Samen met u schrijven we het juridische hoofdstuk dat past binnen uw verhaal. Een
            gespecialiseerd team, verspreid over vier vestigingen, altijd dichtbij.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4">
            <Link
              to="/expertises"
              className="bg-accent px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Onze expertises
            </Link>
            <Link
              to="/contact"
              className="border border-ink-border px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
            >
              Contacteer ons
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <div>
          <p className="eyebrow rule-accent text-accent">Everest advocaten</p>
          <h2 className="mt-8 text-4xl leading-tight sm:text-5xl">
            Een advocatenkantoor dat de ondernemingswereld van binnenuit kent.
          </h2>
        </div>
        <div className="space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
          <p>
            Welkom bij Everest, een advocatenkantoor met bijzondere focus op de ondernemingswereld.
            Onze professionele en persoonlijke aanpak, in combinatie met onze deskundigheid, vormt
            de basis van een succesvolle samenwerking.
          </p>
          <p>
            Wij denken mee vanaf de eerste structuurkeuze tot en met de procedure die u liever niet
            had gevoerd. Kort op de bal, in heldere taal, en met een vast aanspreekpunt dat uw
            dossier én uw sector kent.
          </p>
          <dl className="grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
            {[
              ["14", "Expertisedomeinen"],
              ["4", "Vestigingen"],
              ["25+", "Advocaten"],
              ["3", "Werktalen"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-4xl text-foreground">{value}</dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-border bg-sand py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-accent">Expertises</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Elk domein, één specialist</h2>
            </div>
            <Link to="/expertises" className="link-underline text-sm uppercase tracking-[0.14em]">
              Bekijk alle expertises
            </Link>
          </div>

          <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <li key={service.slug} className="bg-background">
                <Link
                  to="/expertises/$slug"
                  params={{ slug: service.slug }}
                  className="group flex h-full flex-col justify-between gap-8 p-8 transition-colors hover:bg-ink hover:text-ink-foreground"
                >
                  <span className="text-xs tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-2xl leading-snug">
                      {service.title}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground group-hover:text-ink-muted">
                      {service.tagline}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <img
          src={officeTower}
          alt="Glazen kantoortoren tijdens het blauwe uur"
          width={1200}
          height={1504}
          loading="lazy"
          className="h-[34rem] w-full object-cover"
        />
        <div>
          <p className="eyebrow rule-accent text-accent">Onze vestigingen</p>
          <h2 className="mt-8 text-4xl sm:text-5xl">Uw juridische partner, steeds dichtbij</h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {offices.map((office) => (
              <li key={office.city} className="flex items-baseline justify-between gap-6 py-5">
                <span className="font-display text-2xl">{office.city}</span>
                <span className="text-right text-sm text-muted-foreground">
                  {office.lines[0]} · {office.phone}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="link-underline mt-10 inline-block text-sm uppercase tracking-[0.14em]"
          >
            Plan een kennismaking
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-sand py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-accent">Inzichten</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Laatste blogberichten</h2>
            </div>
            <Link to="/blog" className="link-underline text-sm uppercase tracking-[0.14em]">
              Naar de blog
            </Link>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug} className="border-t border-foreground/20 pt-6">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">{post.category}</p>
                <h3 className="mt-4 text-2xl leading-snug">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="link-underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {post.displayDate}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
