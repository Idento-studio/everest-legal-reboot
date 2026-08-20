import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog en juridische inzichten — Everest advocaten" },
      {
        name: "description",
        content:
          "Analyses en updates van onze advocaten over ondernemingsrecht, overheidsopdrachten, insolventie, fiscaliteit en technologie.",
      },
      { property: "og:title", content: "Blog en juridische inzichten — Everest advocaten" },
      {
        property: "og:description",
        content: "Analyses en updates van de advocaten van Everest.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [lead, ...rest] = posts;

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-24 lg:py-32">
          <p className="eyebrow text-accent">Blog</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
            Wat er verandert, en wat het voor u betekent.
          </h1>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <article className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">{lead.category}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {lead.displayDate}
            </p>
          </div>
          <div>
            <h2 className="text-4xl leading-tight">
              <Link to="/blog/$slug" params={{ slug: lead.slug }} className="link-underline">
                {lead.title}
              </Link>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{lead.excerpt}</p>
            <Link
              to="/blog/$slug"
              params={{ slug: lead.slug }}
              className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.16em]"
            >
              Lees meer
            </Link>
          </div>
        </article>

        <ul className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {rest.map((post) => (
            <li key={post.slug} className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">{post.category}</p>
              <h2 className="mt-4 text-2xl leading-snug">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="link-underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {post.displayDate}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
