import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const HeroCard = () => {
  return (
    <>
      <article className="relative md:col-span-3 row-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-7 lg:p-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-10 h-64 w-64 rounded-full bg-sky-500/5 blur-3xl"></div>
        </div>

        <div className="relative flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 text-xs">
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 font-medium text-neutral-300 tracking-tight">
              <span className="mr-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Frontend Developer · UI Engineer · Wordpress Expert
            </span>
            <span className="text-neutral-500">Portfolio · 2025</span>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-50 leading-tight">
              Crafting elegant digital experiences
              <span className="text-neutral-400">
                {" "}
                for modern web products.
              </span>
            </h1>
            <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
              Passionate developer crafting performant, user-friendly web
              experiences with modern Typescript UI/UX and scalable
              architecture.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                size="sm"
                variant="outline"
                className="rounded-full text-xs"
              >
                View selected work
                <ArrowUpRight />
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="rounded-full text-xs"
              >
                Download resume
              </Button>
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-900 pt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-[0.16em] text-neutral-500">
                Focus
              </span>

              <Badge variant="outline">Web Development</Badge>
              <Badge variant="outline">Interface</Badge>
              <Badge variant="outline">Frontend</Badge>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HeroCard;
