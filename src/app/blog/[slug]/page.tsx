import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, { category: string; title: string; date: string; readTime: string; content: string; color: string }> = {
  "introducing-ai-task-engine": {
    category: "Product",
    color: "#071952",
    title: "Introducing the Sirene AI Task Engine",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    content: `
Today we're launching the most significant update to Sirene yet — an intelligent task engine that learns how your team works and optimizes your workflow automatically.

## What is the AI Task Engine?

The AI Task Engine is a persistent, learning layer that sits across your entire workspace. It observes patterns in how tasks are created, assigned, completed, and escalated — then uses that understanding to make real-time recommendations.

## How it works

When you create a task, the engine analyzes:

- Historical completion times for similar tasks
- Current team capacity and workload distribution
- Project dependencies and critical path impact
- Individual velocity trends

From this, it suggests the optimal assignee, due date, and priority level. Over time, these suggestions become increasingly accurate.

## Why we built this

We kept seeing the same problem: talented people spending hours every week in planning meetings, manually shuffling tasks and adjusting priorities. That time should be spent building, not managing.

The AI Task Engine is our answer. It handles the coordination overhead so your team can focus on execution.

## Getting started

The AI Task Engine is available today on all Pro and Enterprise plans. Head to your workspace settings to enable it.

We can't wait to see how your team uses it.
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[48px] font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Post not found
          </h1>
          <Link href="/blog" className="text-primary hover:underline">← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <article className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        <Link href="/blog" className="inline-flex items-center gap-2 text-foreground/40 hover:text-foreground text-[14px] mb-10 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 7H3M7 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-primary-foreground"
            style={{ background: post.color }}
          >
            {post.category}
          </span>
          <span className="text-foreground/30 text-[13px]">{post.date}</span>
          <span className="text-foreground/30 text-[13px]">{post.readTime}</span>
        </div>

        <h1
          className="text-[42px] sm:text-[52px] font-bold text-foreground mb-8 leading-[1.1]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h1>

        <div className="h-px bg-border/20 mb-10" />

        <div className="prose prose-invert max-w-none">
          {post.content.trim().split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-[24px] font-bold text-foreground mt-10 mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("- ")) {
              return (
                <ul key={i} className="space-y-2 mb-6">
                  {block.split("\n").map((line, j) => (
                    <li key={j} className="flex items-start gap-3 text-foreground/60 text-[16px]">
                      <span className="text-primary mt-1.5">·</span>
                      {line.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-foreground/60 text-[16px] leading-relaxed mb-6">
                {block}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
}
