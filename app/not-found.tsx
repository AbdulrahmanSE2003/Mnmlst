import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Big 404 background text */}
      <span className="absolute text-[30vw] font-black text-foreground/4 select-none pointer-events-none leading-none">
        404
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          404 — page not found
        </span>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          This page doesn&apos;t exist.
        </h1>

        <p className="text-muted-foreground font-light text-sm max-w-xs leading-relaxed">
          The page you&apos;re looking for has been moved, deleted, or never
          existed.
        </p>

        <Link
          href="/"
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 border border-border hover:border-foreground/30 px-5 py-2.5 rounded-lg"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
