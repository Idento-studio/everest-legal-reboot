import { createFileRoute, Link } from "@tanstack/react-router";
import { lawyers, roleOrder } from "@/data/lawyers";

export const Route = createFileRoute("/advocaten/")({
  head: () => ({
    meta: [
      { title: "Advocaten — Everest advocaten" },
      {
        name: "description",
        content:
          "Ontmoet de advocaten van Everest in Brussel, Antwerpen, Gent en Hasselt: partners, counsels en associates per expertisedomein.",
      },
      { property: "og:title", content: "Advocaten — Everest advocaten" },
      {
        property: "og:description",
        content: "Partners, counsels en associates van Everest in Brussel, Antwerpen, Gent en Hasselt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LawyersPage,
});

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

function groupKey(role: string) {
  const found = roleOrder.find((r) => r.toLowerCase() === role.toLowerCase());
  return found ?? role;
}

function LawyersPage() {
  const groups = roleOrder
    .filter((r, i) => roleOrder.findIndex((x) => x.toLowerCase() === r.toLowerCase()) === i)
    .map((role) => ({
      role,
      people: lawyers.filter((l) => groupKey(l.role).toLowerCase() === role.toLowerCase()),
    }))
    .filter((g) => g.people.length > 0);

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-24 lg:py-32">
          <p className="eyebrow text-accent">Advocaten</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
            Het team achter elk dossier.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted">
            Meer dan vijftig advocaten in Brussel, Antwerpen, Gent en Hasselt. Elk dossier krijgt de
            advocaat die het domein dagelijks beoefent.
          </p>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        {groups.map((group) => (
          <div key={group.role} className="mb-20 last:mb-0">
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <h2 className="font-display text-3xl">{group.role}</h2>
              <span className="text-xs tabular-nums text-accent">
                {String(group.people.length).padStart(2, "0")}
              </span>
            </div>

            <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {group.people.map((lawyer) => (
                <li key={lawyer.slug} className="bg-background">
                  <Link
                    to="/advocaten/$slug"
                    params={{ slug: lawyer.slug }}
                    className="group flex h-full flex-col gap-4 p-8 transition-colors hover:bg-sand"
                  >
                    <span className="flex h-14 w-14 items-center justify-center border border-accent font-display text-lg text-accent">
                      {initials(lawyer.name)}
                    </span>
                    <span>
                      <span className="block font-display text-2xl transition-colors group-hover:text-accent">
                        {lawyer.name}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {lawyer.role}
                        {lawyer.office ? ` · ${lawyer.office}` : ""}
                      </span>
                    </span>
                    {lawyer.expertises.length > 0 && (
                      <span className="mt-auto block text-sm leading-relaxed text-muted-foreground">
                        {lawyer.expertises.join(" · ")}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
