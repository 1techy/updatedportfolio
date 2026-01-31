export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[var(--accent)] border-t-transparent"></div>
        <p className="mt-4 text-[var(--muted-foreground)]">Loading...</p>
      </div>
    </div>
  );
}
