"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex-center flex-col gap-6 px-6">
      <h1 className="text-6xl font-bold font-plus-jakarta-sans">Oops</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
      >
        Try Again
      </button>
    </main>
  );
}
