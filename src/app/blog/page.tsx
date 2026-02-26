import React from "react";
import Link from "next/link";

const posts = [
  {
    slug: "introducing-ai-task-engine",
    category: "Product",
    title: "Introducing the Sirene AI Task Engine",
    excerpt: "Today we're launching the most significant update to Sirene yet — an intelligent task engine that learns how your team works and optimizes your workflow automatically.",
    readTime: "5 min read",
    date: "Feb 14, 2026",
    featured: true,
    color: "#071952",
  },
  {
    slug: "async-work-playbook",
    category: "Guide",
    title: "The Async-First Team Playbook",
    excerpt: "How the best remote teams ship faster without more meetings. A practical guide to async communication, documentation, and decision-making.",
    readTime: "8 min read",
    date: "Feb 7, 2026",
    featured: false,
    color: "#0B666A",
  },
  {
    slug: "velocity-vs-speed",
    category: "Engineering",
    title: "Velocity vs. Speed: Why Rushing Slows You Down",
    excerpt: "There's a paradox at the heart of every fast-moving team: the harder you push for speed, the more velocity you lose. Here's how to break the cycle.",
    readTime: "6 min read",
    date: "Jan 28, 2026",
    featured: false,
    color: "#35A29F",
  },
  {
    slug: "saas-onboarding-lessons",
    category: "Growth",
    title: "What 1,000 User Onboardings Taught Us",
    excerpt: "We analysed the first 30 days of 1,000 Sirene users to find the exact moments that predict long-term retention. The results surprised us.",
    readTime: "7 min read",
    date: "Jan 20, 2026",
    featured: false,
    color: "#97FEED",
  },
  {
    slug: "building-sirene-design-system",
    category: "Design",
    title: "Building a Design System for Dark UIs",
    excerpt: "Dark mode isn't just an inversion. Our design team shares the principles, tokens, and component decisions that make Sirene's UI feel premium.",
    readTime: "10 min read",
    date: "Jan 12, 2026",
    featured: false,
    color: "#0B666A",
  },
  {
    slug: "series-a-announcement",
    category: "Company",
    title: "Sirene Raises $18M Series A",
    excerpt: "We're thrilled to announce our $18M Series A led by Sequoia Capital, with participation from Andreessen Horowitz and Y Combinator.",
    readTime: "3 min read",
    date: "Dec 15, 2025",
    featured: false,
    color: "#071952",
  },
];

const categories = ["All", "Product", "Engineering", "Design", "Guide", "Growth", "Company"];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p
              className="text-primary text-[13px] font-semibold uppercase tracking-widest mb-4"
            >
              Blog
            </p>
            <h1
              className="text-[52px] sm:text-[64px] font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ideas, stories &
              <br />
              <span className="gradient-text">deep dives</span>
            </h1>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${cat === "All"
                  ? "bg-primary text-primary-foreground"
                  : "glass text-foreground/60 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="block">
            <div className="glass rounded-3xl overflow-hidden card-hover mb-6">
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${featured.color}20`, color: featured.color }}
                  >
                    {featured.category}
                  </span>
                  <span
                    className="text-foreground/30 text-[13px]">{featured.date}</span>
                  <span className="text-foreground/30 text-[13px]">{featured.readTime}</span>
                </div>
                <h2
                  className="text-[32px] md:text-[42px] font-bold text-foreground mb-4 max-w-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-foreground/50 text-[16px] leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-[14px]">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="glass rounded-2xl p-7 h-full card-hover">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: `${post.color}20`, color: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    className="text-foreground font-bold text-[18px] mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-foreground/40 text-[13px] leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-foreground/30 text-[12px]">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
