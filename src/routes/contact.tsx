import { createFileRoute } from "@tanstack/react-router";
import { offices, services } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Everest advocaten" },
      {
        name: "description",
        content:
          "Contacteer Everest advocaten in Brussel, Antwerpen, Gent of Hasselt. Adressen, telefoonnummers en een rechtstreeks contactformulier.",
      },
      { property: "og:title", content: "Contact — Everest advocaten" },
      {
        property: "og:description",
        content: "Vier vestigingen in België. Bel, mail of stuur ons uw vraag.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-24 lg:py-32">
          <p className="eyebrow text-accent">Contact</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
            Laten we uw dossier bespreken.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted">
            Kies de vestiging die u het best uitkomt, of stuur ons uw vraag. U krijgt binnen één
            werkdag antwoord van een advocaat, niet van een wachtrij.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-16 py-20 lg:grid-cols-[1fr_1fr] lg:py-28">
        <div>
          <h2 className="text-3xl">Onze kantoren</h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {offices.map((office) => (
              <li key={office.city} className="py-8">
                <h3 className="font-display text-2xl">{office.city}</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
                  {office.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                  <div>
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="link-underline text-foreground"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <a href={`mailto:${office.email}`} className="link-underline text-foreground">
                      {office.email}
                    </a>
                  </div>
                  <div className="text-xs uppercase tracking-[0.14em]">KBO {office.kbo}</div>
                </address>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-sand p-8 lg:sticky lg:top-28 lg:self-start lg:p-10">
          <h2 className="text-3xl">Stel uw vraag</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Uw bericht komt rechtstreeks bij het juiste team terecht.
          </p>
          <form
            className="mt-8 space-y-5"
            action="mailto:info@everest-law.eu"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow text-muted-foreground">Naam</span>
                <input
                  name="naam"
                  required
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-muted-foreground">E-mail</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Vestiging</span>
              <select
                name="vestiging"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              >
                {offices.map((o) => (
                  <option key={o.city}>{o.city}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Expertise</span>
              <select
                name="expertise"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              >
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Uw vraag</span>
              <textarea
                name="bericht"
                rows={5}
                required
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-accent px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Verstuur bericht
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Door te verzenden gaat u ermee akkoord dat wij uw gegevens gebruiken om uw vraag te
              beantwoorden. Een e-mail creëert nog geen cliëntrelatie.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
