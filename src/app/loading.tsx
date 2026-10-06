import { Strawberry } from "@/components/decor/shapes";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,216,92,0.35),transparent_40%),linear-gradient(180deg,#fff9ef,#fffdf8)] px-6">
      <div className="text-center">
        <div className="mx-auto w-20 animate-float-fast">
          <Strawberry />
        </div>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.32em] text-navy/50">
          Preparing the little world
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-navy">Strawberry Little Star</h1>
      </div>
    </div>
  );
}
