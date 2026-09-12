"use client";

import { useEffect, useState } from "react";

const routes = [
  {
    method: "POST",
    path: "/books",
    label: "PDF upload",
    status: "201",
    color: "text-green-400",
  },
  {
    method: "GET",
    path: "/books/:id/chunks/12",
    label: "Read chunk",
    status: "200",
    color: "text-blue-400",
  },
  {
    method: "PATCH",
    path: "/reading/:bookId",
    label: "Save progress",
    status: "200",
    color: "text-yellow-400",
  },
  {
    method: "POST",
    path: "/stats/session",
    label: "Reading session",
    status: "201",
    color: "text-green-400",
  },
  {
    method: "POST",
    path: "/quotes/:bookId",
    label: "Save quote",
    status: "201",
    color: "text-green-400",
  },
];

export default function QuillApiCover() {
  const [active, setActive] = useState(1);
  const [progress, setProgress] = useState(67);

  useEffect(() => {
    const routeTimer = setInterval(() => {
      setActive((current) => (current + 1) % routes.length);
    }, 1700);

    const progressTimer = setInterval(() => {
      setProgress((current) => (current >= 92 ? 42 : current + 1));
    }, 140);

    return () => {
      clearInterval(routeTimer);
      clearInterval(progressTimer);
    };
  }, []);

  const current = routes[active];

  return (
    <div className="group relative aspect-video w-full h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909] font-mono text-white shadow-2xl">
      {/* Ambient light */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-amber-500/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/[0.025] blur-3xl" />

      {/* Terminal header */}
      <div className="relative flex h-10 items-center border-b border-white/[0.07] bg-[#0d0d0d] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] text-white/20">
          quill-api
        </div>

        <div className="ml-auto flex items-center gap-1.5 text-[9px] text-green-400/60">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          READING ENGINE
        </div>
      </div>

      <div className="relative grid h-[calc(100%-2.5rem)] grid-cols-[0.95fr_1.05fr]">
        {/* LEFT — Book / pipeline */}
        <div className="flex flex-col justify-center border-r border-white/[0.06] px-8">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                REST API
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="text-[9px] text-white/20">
                v1
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Book icon */}
              <div className="flex h-11 w-9 items-center justify-center rounded-r-md border border-white/10 bg-white/[0.035]">
                <div className="h-6 w-0.5 bg-white/20" />
              </div>

              <div>
                <h1 className="text-3xl font-semibold tracking-[-0.05em] text-white/90">
                  Quill
                </h1>

                <p className="mt-1 text-[9px] text-white/30">
                  Read. Track. Remember.
                </p>
              </div>
            </div>
          </div>

          {/* Processing pipeline */}
          <div className="space-y-2">
            {[
              ["01", "PDF", "uploaded"],
              ["02", "TEXT", "extracted"],
              ["03", "CHUNKS", "indexed"],
              ["04", "PROGRESS", "tracked"],
            ].map(([number, name, state], index) => (
              <div
                key={name}
                className="flex items-center gap-3 text-[8px]"
              >
                <span className="text-white/15">{number}</span>

                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index < 3
                      ? "bg-green-400/60"
                      : "animate-pulse bg-blue-400/70"
                  }`}
                />

                <span className="w-14 text-white/40">
                  {name}
                </span>

                <span className="text-white/15">
                  {state}
                </span>
              </div>
            ))}
          </div>

          {/* Book progress */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-[8px]">
              <span className="text-white/25">
                reading progress
              </span>

              <span className="text-white/40">
                {progress}%
              </span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-white/30 transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {[
              "TypeScript",
              "Express 5",
              "MongoDB",
              "Cloudinary",
              "JWT",
              "OAuth",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[8px] text-white/25"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — API */}
        <div className="flex flex-col justify-center px-7">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Live requests
              </p>

              <p className="mt-1 text-[8px] text-white/15">
                reading activity
              </p>
            </div>

            <span className="rounded border border-white/[0.07] px-2 py-1 text-[8px] text-white/20">
              authenticated
            </span>
          </div>

          {/* Routes */}
          <div className="space-y-1.5">
            {routes.map((route, index) => {
              const isActive = index === active;

              return (
                <div
                  key={route.path}
                  className={`relative overflow-hidden rounded-lg border px-3 py-2.5 transition-all duration-500 ${
                    isActive
                      ? "border-white/[0.12] bg-white/[0.045]"
                      : "border-white/[0.04] bg-white/[0.015]"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-y-0 left-0 w-px bg-blue-400/70" />
                  )}

                  <div className="flex items-center gap-3">
                    <span
                      className={`w-11 text-[8px] font-bold ${route.color}`}
                    >
                      {route.method}
                    </span>

                    <span
                      className={`flex-1 truncate text-[9px] ${
                        isActive
                          ? "text-white/65"
                          : "text-white/30"
                      }`}
                    >
                      /api/v1{route.path}
                    </span>

                    <span className="text-[8px] text-green-400/60">
                      {route.status}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 pl-[59px]">
                    <span className="text-[7px] text-white/20">
                      {route.label}
                    </span>

                    {isActive && (
                      <>
                        <span className="h-px w-3 bg-white/10" />

                        <span className="animate-pulse text-[7px] text-blue-400/50">
                          processing
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Response */}
          <div className="mt-3 rounded-lg border border-white/[0.06] bg-black/30 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[7px] uppercase tracking-widest text-white/20">
                response
              </span>

              <span className="text-[7px] text-green-400/50">
                {current.status} OK
              </span>
            </div>

            <div className="space-y-1 text-[8px]">
              <div className="text-white/20">
                {"{"}
              </div>

              <div className="pl-3">
                <span className="text-blue-300/50">
                  "book"
                </span>

                <span className="text-white/15">
                  :{" "}
                </span>

                <span className="text-green-300/50">
                  "The Alchemist"
                </span>
              </div>

              <div className="pl-3">
                <span className="text-blue-300/50">
                  "chunk"
                </span>

                <span className="text-white/15">
                  :{" "}
                </span>

                <span className="text-yellow-300/50">
                  12
                </span>
              </div>

              <div className="pl-3">
                <span className="text-blue-300/50">
                  "progress"
                </span>

                <span className="text-white/15">
                  :{" "}
                </span>

                <span className="text-yellow-300/50">
                  {progress}
                </span>
              </div>

              <div className="text-white/20">
                {"}"}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-3 flex items-center gap-4 border-t border-white/[0.06] pt-3">
            {["MongoDB", "Cloudinary", "JWT", "OAuth"].map(
              (service) => (
                <div
                  key={service}
                  className="flex items-center gap-1.5 text-[7px] text-white/20"
                >
                  <span className="h-1 w-1 rounded-full bg-green-400/60" />
                  {service}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Subtle scan line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
