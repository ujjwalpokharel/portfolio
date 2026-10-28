import Tags from "./Tags";

type Props = { date?: string; title: string; place?: string; body?: string; tags?: string[]; href?: string };

export default function Card({ date, title, place, body, tags, href }: Props) {
  return (
    <li className="mb-12 transition-opacity lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{date}</header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            {href ? (
              <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-baseline text-base group-hover:text-teal-300 focus-visible:text-teal-300">
                <span>{title}</span>
                <svg viewBox="0 0 20 20" className="ml-1 h-4 w-4 shrink-0 translate-y-px fill-current transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                </svg>
              </a>
            ) : (
              <span className="text-base transition group-hover:text-teal-300">{title}</span>
            )}
          </h3>
          {place && <p className="mt-1 text-sm text-slate-500">{place}</p>}
          {body && <p className="mt-2 text-sm leading-normal">{body}</p>}
          {tags && <Tags items={tags} />}
        </div>
      </div>
    </li>
  );
}
