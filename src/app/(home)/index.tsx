import HeroCard from "./components/HeroCard";
import ProfileCard from "./components/ProfileCard";

const Home = () => {
  return (
    <>
      {/* <!-- Hero + Bento Grid Wrapper --> */}
      <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-5 auto-rows-[minmax(140px,auto)]">
        {/* <!-- Hero Intro Card --> */}
        <HeroCard />

        {/* <!-- Profile / Persona Card --> */}
        <ProfileCard />

        {/* <!-- Tech Stack Card --> */}

        {/* <!-- Highlight Metrics Card --> */}
        <article className="md:col-span-1 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-tight text-neutral-50">
              Impact
            </h3>
            <div>
              <p className="text-[11px] text-neutral-500 mb-1">
                Shipped interfaces
              </p>
              <p className="text-2xl font-semibold tracking-tight text-neutral-50">
                30+
              </p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 mb-1">
                Performance focus
              </p>
              <p className="text-xs text-neutral-300">
                Core Web Vitals, bundle size and meaningful motion.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between pt-3 border-t border-neutral-900">
            <span className="text-[11px] text-neutral-500">
              Code / UI balance
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-7 rounded-full bg-emerald-400/80"></span>
              <span className="h-1.5 w-4 rounded-full bg-neutral-700"></span>
            </div>
          </div>
        </article>

        {/* <!-- Featured Project Card --> */}
        <article
          id="work"
          className="md:col-span-3 row-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-6 flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                Featured project
              </h3>
              <p className="text-[11px] text-neutral-500">
                Interface for a SaaS analytics dashboard
              </p>
            </div>
            <a
              href="#"
              className="text-[11px] text-neutral-300 hover:text-neutral-50 inline-flex items-center transition-colors"
            >
              Case study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </a>
          </div>

          <div className="relative flex-1 rounded-xl border border-neutral-900 bg-neutral-900/70 overflow-hidden mb-4">
            <div className="absolute inset-0 bg-linear-to-tr from-neutral-950 via-neutral-900/80 to-neutral-950"></div>
            <div className="relative p-4 sm:p-5 flex flex-col h-full">
              {/* <!-- Fake app header --> */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-700"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
                  <span className="ml-2 text-[11px] text-neutral-400">
                    analytics.studio
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px]">
                  Live prototype
                </span>
              </div>

              {/* <!-- Fake dashboard grid --> */}
              <div className="grid grid-cols-3 gap-3 text-[10px] text-neutral-400 mb-4">
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-2.5">
                  <p className="mb-1 text-neutral-300">Conversion</p>
                  <p className="text-lg font-semibold tracking-tight text-neutral-50">
                    +18%
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-2.5">
                  <p className="mb-1 text-neutral-300">Drop-off</p>
                  <p className="text-lg font-semibold tracking-tight text-neutral-50">
                    -12%
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-2.5">
                  <p className="mb-1 text-neutral-300">Sessions</p>
                  <p className="text-lg font-semibold tracking-tight text-neutral-50">
                    38k
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between pt-2 border-t border-neutral-900">
                <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                  <span className="rounded-full border border-neutral-800 px-2 py-0.5 bg-neutral-950 text-neutral-300">
                    Design system
                  </span>
                  <span className="rounded-full border border-neutral-800 px-2 py-0.5 bg-neutral-950 text-neutral-300">
                    Dashboard UI
                  </span>
                </div>
                <span className="text-[10px] text-neutral-500">
                  Role: Product UI · Frontend
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed mb-4">
            Designed a modular component library and implemented the full
            dashboard experience using React, TypeScript and utility-first
            styling. Focused on data legibility, motion and responsive layouts.
          </p>

          {/* <!-- More projects: compact list --> */}
          <div className="border-t border-neutral-900 pt-3 mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                More projects
              </span>
              <a
                href="#"
                className="text-[11px] text-neutral-300 hover:text-neutral-50 inline-flex items-center gap-1"
              >
                View all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </div>
            <div className="grid gap-2 text-[11px] text-neutral-300 sm:grid-cols-3">
              <a
                href="#"
                className="rounded-lg border border-neutral-900 bg-neutral-950/60 px-3 py-2 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors flex flex-col gap-0.5"
              >
                <span className="font-medium tracking-tight text-neutral-50">
                  Marketing site revamp
                </span>
                <span className="text-neutral-500">Landing · A/B testing</span>
              </a>
              <a
                href="#"
                className="rounded-lg border border-neutral-900 bg-neutral-950/60 px-3 py-2 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors flex flex-col gap-0.5"
              >
                <span className="font-medium tracking-tight text-neutral-50">
                  Component library
                </span>
                <span className="text-neutral-500">Design system · Docs</span>
              </a>
              <a
                href="#"
                className="rounded-lg border border-neutral-900 bg-neutral-950/60 px-3 py-2 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors flex flex-col gap-0.5"
              >
                <span className="font-medium tracking-tight text-neutral-50">
                  Admin console
                </span>
                <span className="text-neutral-500">Data-heavy UI</span>
              </a>
            </div>
          </div>
        </article>

        {/* <!-- Typography & Design Principles Card --> */}
        <article
          id="about"
          className="md:col-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-6 flex flex-col"
        >
          <h3 className="text-sm font-semibold tracking-tight text-neutral-50 mb-3">
            Typography &amp; design ethos
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-4">
            Type sets the rhythm of the interface. I treat whitespace, hierarchy
            and contrast like code: deliberate, consistent and easy to maintain.
          </p>
          <ul className="space-y-3 text-[11px] text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="mt-[5px] h-1 w-4 rounded-full bg-neutral-600"></span>
              <div>
                <p className="font-medium tracking-tight text-neutral-50 mb-0.5">
                  Precise hierarchy
                </p>
                <p className="text-neutral-400">
                  Clear scales for headings, labels and body text that stay
                  consistent across breakpoints.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[5px] h-1 w-4 rounded-full bg-neutral-600"></span>
              <div>
                <p className="font-medium tracking-tight text-neutral-50 mb-0.5">
                  Micro-interactions
                </p>
                <p className="text-neutral-400">
                  Subtle motion that guides attention, never distracts—anchored
                  in performance budgets.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[5px] h-1 w-4 rounded-full bg-neutral-600"></span>
              <div>
                <p className="font-medium tracking-tight text-neutral-50 mb-0.5">
                  System thinking
                </p>
                <p className="text-neutral-400">
                  Shared tokens, primitives and patterns to scale products
                  without visual debt.
                </p>
              </div>
            </li>
          </ul>
        </article>

        {/* <!-- Contact Card --> */}
        <article
          id="contact"
          className="md:col-span-3 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-2">
              Collaboration
            </p>
            <h3 className="text-[17px] sm:text-lg font-semibold tracking-tight text-neutral-50 mb-1">
              Let’s build your next interface.
            </h3>
            <p className="text-xs text-neutral-400 max-w-md">
              I’m open to collaborations, product teams and studios that value
              thoughtful UI, robust frontend and a tight feedback loop.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 w-full sm:w-auto">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center justify-center rounded-full bg-neutral-50 text-neutral-950 px-4 py-2 text-xs font-medium tracking-tight hover:bg-neutral-200 transition-colors w-full sm:w-auto"
            >
              Email me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1.5 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z"></path>
                <polyline points="4,4 12,13 20,4"></polyline>
              </svg>
            </a>
            <div className="flex flex-wrap gap-2 text-[11px] text-neutral-400">
              <a
                href="#"
                className="px-2.5 py-1 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-2.5 py-1 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="px-2.5 py-1 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
              >
                Dribbble
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
