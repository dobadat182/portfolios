import { ChevronRight } from "lucide-react";

const Badge = ({ title }: { title: string }) => {
  const BADGE_SIZE = "h-8 w-8";
  return (
    <div
      className={`${BADGE_SIZE} rounded-full bg-neutral-800 border border-neutral-900 flex items-center justify-center`}
    >
      <span className="text-neutral-300">{title}</span>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <article className="md:col-span-2 row-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-5 sm:p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-xs">
        <span className="font-medium tracking-tight text-neutral-300">
          Based in
        </span>
        <span className="text-neutral-500">Ho Chi Minh · VN</span>
      </div>

      <div className="flex items-center gap-4 mb-5">
        <div className="relative h-14 w-14 rounded-2xl border border-neutral-800 bg-neutral-900">
          <span className="absolute -bottom-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950 border border-neutral-800">
            <span className="block h-3 w-3 rounded-full bg-emerald-400"></span>
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-[17px] font-semibold tracking-tight text-neutral-50 leading-snug">
            Davis Do
          </h2>
          <p className="text-xs text-neutral-400 leading-snug">
            Frontend engineer specializing in component-driven UIs and
            interaction design.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-neutral-900 bg-neutral-950/80 p-3">
          <p className="text-xs text-neutral-500 mb-1">Experience</p>
          <p className="text-sm font-medium tracking-tight text-neutral-100">
            4+ years
          </p>
        </div>
        <div className="rounded-xl border border-neutral-900 bg-neutral-950/80 p-3">
          <p className="text-xs text-neutral-500 mb-1">Specialty</p>
          <p className="text-sm font-medium tracking-tight text-neutral-100">
            UI Development
          </p>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        <p className="text-xs text-neutral-400 leading-relaxed">
          I work closely with product teams to translate ideas into polished
          interfaces, balancing clarity, motion and performance.
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
          <div className="flex -space-x-2 text-xs">
            <Badge title="UI" />
            <Badge title="UX" />
            <Badge title="FE" />
          </div>
          <a
            href="#about"
            className="text-xs text-neutral-300 hover:text-neutral-50 transition-colors inline-flex items-center"
          >
            More about me
            <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
