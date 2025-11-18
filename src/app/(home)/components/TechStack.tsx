const TechStack = () => {
  return (
    <article
      id="stack"
      className="md:col-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold tracking-tight text-neutral-50">
          Stack
        </h3>
        <span className="text-[11px] text-neutral-500">Frontend-first</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 text-[11px]">
        <div className="rounded-xl border border-neutral-900 bg-neutral-950 px-3 py-2 flex flex-col gap-1 hover:border-neutral-700 transition-colors">
          <span className="text-neutral-300 font-medium tracking-tight">
            React
          </span>
          <span className="text-neutral-500">Hooks · SPA</span>
        </div>
        <div className="rounded-xl border border-neutral-900 bg-neutral-950 px-3 py-2 flex flex-col gap-1 hover:border-neutral-700 transition-colors">
          <span className="text-neutral-300 font-medium tracking-tight">
            TypeScript
          </span>
          <span className="text-neutral-500">Types · DX</span>
        </div>
        <div className="rounded-xl border border-neutral-900 bg-neutral-950 px-3 py-2 flex flex-col gap-1 hover:border-neutral-700 transition-colors">
          <span className="text-neutral-300 font-medium tracking-tight">
            Next.js
          </span>
          <span className="text-neutral-500">SSR · App</span>
        </div>
        <div className="rounded-xl border border-neutral-900 bg-neutral-950 px-3 py-2 flex flex-col gap-1 hover:border-neutral-700 transition-colors">
          <span className="text-neutral-300 font-medium tracking-tight">
            Tailwind
          </span>
          <span className="text-neutral-500">Design</span>
        </div>
        <div className="rounded-xl border border-neutral-900 bg-neutral-950 px-3 py-2 flex flex-col gap-1 hover:border-neutral-700 transition-colors">
          <span className="text-neutral-300 font-medium tracking-tight">
            Framer Motion
          </span>
          <span className="text-neutral-500">Motion</span>
        </div>
        <div className="rounded-xl border border-neutral-900 bg-neutral-950 px-3 py-2 flex flex-col gap-1 hover:border-neutral-700 transition-colors">
          <span className="text-neutral-300 font-medium tracking-tight">
            Accessibility
          </span>
          <span className="text-neutral-500">AA · ARIA</span>
        </div>
      </div>
    </article>
  );
};
