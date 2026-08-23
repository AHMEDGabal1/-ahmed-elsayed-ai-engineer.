"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { repositories, type RepositoryCategory } from "@/lib/repositories";

type Filter = RepositoryCategory;

const filters: Filter[] = [
  "All",
  "AI & ML",
  "Web apps",
  "Web experiences",
  "Tools & docs",
  "Profile",
  "Other",
];

const formatUpdatedDate = (date: string) =>
  new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
    new Date(date),
  );

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filteredRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return repositories.filter((repository) => {
      const matchesFilter =
        activeFilter === "All" || repository.category === activeFilter;
      const searchableText = [
        repository.title,
        repository.name,
        repository.description,
        repository.language,
        repository.category,
      ]
        .join(" ")
        .toLowerCase();

      return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeFilter, query]);

  const totalStars = repositories.reduce((total, repository) => total + repository.stars, 0);

  return (
    <section id="projects" className="section-padding">
      <div className="max-width">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-400">
              <span>Repositories</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-stone-50 md:text-3xl">
              A living index of my public work in <span className="text-accent">AI, software, and product engineering.</span>
            </p>
          </div>
          <a
            href="https://github.com/AHMEDGabal1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            View GitHub profile
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="glass rounded-lg px-4 py-3">
            <div className="text-2xl font-semibold text-stone-50">{repositories.length}</div>
            <div className="text-xs uppercase tracking-[0.16em] text-stone-500">Public repositories</div>
          </div>
          <div className="glass rounded-lg px-4 py-3">
            <div className="text-2xl font-semibold text-stone-50">{totalStars}</div>
            <div className="text-xs uppercase tracking-[0.16em] text-stone-500">GitHub stars</div>
          </div>
          <div className="glass rounded-lg px-4 py-3">
            <div className="text-2xl font-semibold text-stone-50">{filters.length - 1}</div>
            <div className="text-xs uppercase tracking-[0.16em] text-stone-500">Areas of practice</div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-lg border border-stone-800 bg-stone-950/40 p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Filter repositories by category">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded border px-3 py-1.5 text-xs font-medium transition ${
                  activeFilter === filter
                    ? "border-accent bg-accent text-white"
                    : "border-stone-700 bg-stone-900 text-stone-300 hover:border-stone-500 hover:text-stone-50"
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <label className="relative block w-full md:max-w-xs">
            <span className="sr-only">Search repositories</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search repositories"
              className="w-full rounded border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-accent"
            />
          </label>
        </div>

        <div className="mt-5 flex items-center justify-between text-xs text-stone-500">
          <span>
            Showing <span className="text-stone-300">{filteredRepositories.length}</span> of {repositories.length} repositories
          </span>
          {query && (
            <button type="button" onClick={() => setQuery("")} className="text-accent hover:text-orange-300">
              Clear search
            </button>
          )}
        </div>

        {filteredRepositories.length > 0 ? (
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {filteredRepositories.map((repository, index) => (
              <motion.article
                key={repository.name}
                className="glass group flex min-h-[260px] flex-col rounded-lg p-5 transition-colors hover:border-stone-500 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: Math.min(index * 0.04, 0.2) }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">
                      <span className="text-accent">{repository.category}</span>
                      {repository.archived && <span>Archived</span>}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-stone-50 md:text-xl">
                      {repository.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 text-xs text-stone-500" title="GitHub stars">
                    <span aria-hidden="true">★</span> {repository.stars}
                  </div>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                  {repository.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span className="tag-pill">{repository.language}</span>
                  <span>Updated {formatUpdatedDate(repository.updatedAt)}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 border-t border-stone-800 pt-4">
                  <a
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2 px-4 py-2"
                  >
                    <GitHubIcon />
                    Source code
                  </a>
                  {repository.homepage && (
                    <a
                      href={repository.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-4 py-2"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="glass mt-4 rounded-lg p-10 text-center">
            <p className="text-lg font-medium text-stone-100">No repositories match that search.</p>
            <p className="mt-2 text-sm text-stone-500">Try another keyword or reset the category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
