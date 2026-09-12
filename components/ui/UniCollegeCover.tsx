"use client";

import { useEffect, useState } from "react";

const requests = [
  {
    method: "POST",
    path: "/exams/generate",
    service: "Gemini AI",
    status: "200",
    time: "142ms",
    color: "text-green-400",
  },
  {
    method: "POST",
    path: "/timetables/generate",
    service: "AI Scheduler",
    status: "200",
    time: "318ms",
    color: "text-green-400",
  },
  {
    method: "GET",
    path: "/users/me",
    service: "JWT Auth",
    status: "200",
    time: "18ms",
    color: "text-blue-400",
  },
  {
    method: "POST",
    path: "/submissions/:id/submit",
    service: "Inngest",
    status: "202",
    time: "24ms",
    color: "text-green-400",
  },
  {
    method: "PATCH",
    path: "/assignments/:id/grade",
    service: "Grading",
    status: "200",
    time: "31ms",
    color: "text-yellow-400",
  },
];

export default function UniCollegeCover() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % requests.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  const current = requests[active];

  return (
    <div className="group group-hover:scale-103 transition-transform duration-700 ease-out relative aspect-video w-full h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] font-mono text-white shadow-2xl">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-500/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

      {/* Window bar */}
      <div className="relative flex h-10 items-center border-b border-white/[0.07] bg-[#0d0d0d] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] tracking-wide text-white/20">
          uni-college-api
        </div>

        <div className="ml-auto flex items-center gap-1.5 text-[9px] text-green-400/60">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          ONLINE
        </div>
      </div>

      {/* Main */}
      <div className="relative grid h-[calc(100%-2.5rem)] grid-cols-[0.9fr_1.1fr]">
        {/* Left */}
        <div className="flex flex-col justify-center border-r border-white/[0.06] px-8">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                REST API
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="text-[9px] text-white/20">v1</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white/90">
              Uni-College
            </h1>

            <p className="mt-2 max-w-[270px] text-[10px] leading-5 text-white/35">
              AI-powered learning management
              <br />
              system built for modern education.
            </p>
          </div>

          {/* Command */}
          <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3.5 py-3">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-green-400">$</span>

              <span className="text-white/30">curl</span>

              <span className="truncate text-white/50">
                api.unicollege.dev/v1
              </span>

              <span className="h-3 w-px animate-pulse bg-green-400" />
            </div>
          </div>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "Gemini",
              "Inngest",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[8px] text-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center px-7">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Live requests
              </p>

              <p className="mt-1 text-[8px] text-white/15">
                API activity monitor
              </p>
            </div>

            <div className="rounded border border-white/[0.07] px-2 py-1 text-[8px] text-white/20">
              5 routes
            </div>
          </div>

          {/* Requests */}
          <div className="space-y-1.5">
            {requests.map((request, index) => {
              const isActive = index === active;

              return (
                <div
                  key={request.path}
                  className={`relative overflow-hidden rounded-lg border px-3 py-2.5 transition-all duration-500 ${
                    isActive
                      ? "border-white/[0.12] bg-white/[0.045]"
                      : "border-white/[0.04] bg-white/[0.015]"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-y-0 left-0 w-px bg-green-400/70" />
                  )}

                  <div className="flex items-center gap-3">
                    <span
                      className={`w-11 text-[8px] font-bold ${request.color}`}
                    >
                      {request.method}
                    </span>

                    <span
                      className={`flex-1 truncate text-[9px] transition-colors ${
                        isActive ? "text-white/65" : "text-white/30"
                      }`}
                    >
                      /api/v1{request.path}
                    </span>

                    <span
                      className={`text-[8px] ${
                        isActive ? "text-green-400/80" : "text-white/20"
                      }`}
                    >
                      {request.status}
                    </span>

                    <span className="w-8 text-right text-[7px] text-white/15">
                      {request.time}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 pl-[59px]">
                    <span className="text-[7px] text-white/20">
                      {request.service}
                    </span>

                    {isActive && (
                      <>
                        <span className="h-px w-3 bg-white/10" />

                        <span className="animate-pulse text-[7px] text-green-400/50">
                          processing
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Response preview */}
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
              <p>
                <span className="text-white/20">{"{"}</span>
              </p>

              <p className="pl-3">
                <span className="text-blue-300/50">"service"</span>
                <span className="text-white/20">: </span>
                <span className="text-green-300/50">"{current.service}"</span>
                <span className="text-white/20">,</span>
              </p>

              <p className="pl-3">
                <span className="text-blue-300/50">"status"</span>
                <span className="text-white/20">: </span>
                <span className="text-green-300/50">"success"</span>
              </p>

              <p>
                <span className="text-white/20">{"}"}</span>
              </p>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="mt-3 flex items-center gap-4 border-t border-white/[0.06] pt-3">
            {["MongoDB", "JWT", "Inngest", "Gemini"].map((service) => (
              <div
                key={service}
                className="flex items-center gap-1.5 text-[7px] text-white/20"
              >
                <span className="h-1 w-1 rounded-full bg-green-400/60" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scan line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
