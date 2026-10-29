"use client";
import { useEffect, useState } from "react";
import { profile, nav } from "@/data/content";

const icon = "h-6 w-6 fill-current";

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = nav.map((n) => n.toLowerCase());
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4)
        cur = ids[ids.length - 1];
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{profile.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.pitch}</p>

        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {nav.map((n) => {
              const id = n.toLowerCase();
              const on = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${on ? "w-16 bg-slate-200" : "w-8 bg-slate-600"}`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${on ? "text-slate-200" : "text-slate-500"}`}
                    >
                      {n}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media"
      >
        <li>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition hover:text-slate-200"
          >
            <svg viewBox="0 0 16 16" className={icon}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition hover:text-slate-200"
          >
            <svg viewBox="0 0 24 24" className={icon}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="text-slate-500 transition hover:text-slate-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}
