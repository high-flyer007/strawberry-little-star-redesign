export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,192,203,0.55),transparent_34%),linear-gradient(180deg,#fffdf9,#fff4ef)] px-6">
      <div className="text-center">
        <div className="mx-auto flex size-20 animate-pulse items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff6f7d,#ffd166)] text-3xl text-white shadow-[0_20px_80px_rgba(255,111,125,0.35)]">
          *
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.42em] text-stone-500">Preparing the school story</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-stone-950">Strawberry Little Star</h1>
      </div>
    </div>
  );
}
