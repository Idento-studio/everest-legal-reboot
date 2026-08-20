import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artikel niet gevonden — Everest advocaten" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Everest advocaten` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x max-w-3xl py-20 lg:py-28">
          <Link to="/blog" className="link-underline text-xs uppercase tracking-[0.16em] text-accent">
            ← Alle berichten
          </Link>
          <h1 className="mt-8 text-4xl leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-xs uppercase tracking-[0.14em] text-ink-muted">
            {post.category} · {post.displayDate}
          </p>
        </div>
      </section>

      <article className="container-x max-w-3xl py-16 lg:py-24">
        <p className="text-xl leading-relaxed">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 bg-sand p-8">
          <h2 className="font-display text-2xl">Vragen over dit onderwerp?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Onze advocaten bekijken graag wat dit concreet voor uw dossier betekent.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground"
          >
            Contacteer ons
          </Link>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <h2 className="eyebrow text-muted-foreground">Lees ook</h2>
          <ul className="mt-6 space-y-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: item.slug }}
                  className="link-underline font-display text-xl"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
